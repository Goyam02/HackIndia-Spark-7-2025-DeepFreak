from flask import Flask, request
import time
import os
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from dotenv import load_dotenv

app = Flask(__name__)

# === Load Environment Variables ===
load_dotenv()
ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")

# === Helper Functions ===
def loadsum():
    # === Load PDFs ===
    loader = DirectoryLoader(path=r"books", glob="*.pdf", loader_cls=PyPDFLoader)
    documents = loader.load()

    # Debug: Check if documents were loaded
    print(f"📄 Loaded {len(documents)} documents.")
    if documents:
        for i, doc in enumerate(documents[:3]):  # Show first 3 documents
            print(f"🔍 Doc {i+1} preview: {doc.page_content[:200]}...")  # Preview first 200 characters

    # === Split Documents into Smaller Chunks for Processing ===
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    chunks = text_splitter.split_documents(documents)

    # Debug: Check how many chunks were created
    print(f"🔹 Total chunks created: {len(chunks)}")

    # === Load Summarization Model ===
    model_id = "facebook/bart-large-cnn"
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_id)
    summarizer = pipeline("summarization", model=model, tokenizer=tokenizer, device=0)

    return summarizer, chunks

def summarize_chunks(chunks):
    summarizer, _ = loadsum()
    summaries = []
    print(f"🔹 Total chunks to summarize: {len(chunks)}")

    for i, chunk in enumerate(chunks):
        content = chunk.page_content.strip()

        if not content:
            print(f"⚠️ Chunk {i} is empty. Skipping.")
            continue

        print(f"🔍 Chunk {i} preview: {content[:100]}...")

        input_length = len(content)
        max_length = min(input_length // 2, 100)

        try:
            summary = summarizer(content, max_length=max_length, min_length=50, do_sample=False)
            summaries.append(summary[0]['summary_text'])
            print(f"✅ Chunk {i} summarized.")
        except Exception as e:
            print(f"❌ Error summarizing chunk {i}: {e}")

    return summaries

def make_summary():
    start = time.time()

    # Make sure the chunks are available before proceeding
    summarizer, chunks = loadsum()
    if len(chunks) == 0:
        print("⚠️ No chunks to summarize.")
        return

    summaries = summarize_chunks(chunks)
    full_summary = "\n\n".join(summaries)

    if not full_summary.strip():
        full_summary = "⚠️ No summary could be generated from the provided content."

    duration = time.time() - start
    print(f"✅ Summarization completed in {duration:.2f} seconds.")
    print(f"📝 Total summaries written: {len(summaries)}")

    with open(r"tutor_explanation.txt", "w", encoding="utf-8") as f:
        f.write(full_summary)

    print("✅ Saved the summary to tutor_explanation.txt")

# === Flask Routes ===
@app.route('/api/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    
    if file:
        # Save file to disk (check the folder exists)
        file_path = os.path.join('books', file.filename)
        file.save(file_path)
        print(f"✅ Saved file: {file_path}")
        
        # Add a short delay to ensure the file is saved before processing
        time.sleep(2)
        
        # Now that the file is saved, generate the summary
        make_summary()
        
        return "File uploaded and summary created.", 200
    else:
        return "No file uploaded.", 400

if __name__ == '__main__':
    app.run(debug=True)
