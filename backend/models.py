# from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_chroma import Chroma
# from langchain_huggingface import HuggingFaceEmbeddings, HuggingFaceEndpoint
# from langchain.chains import RetrievalQA
# from langchain.prompts import PromptTemplate
# from dotenv import load_dotenv
# import os

# # === Load environment variables (for HF_API_TOKEN) ===
# load_dotenv()
# HF_TOKEN = os.getenv("HUGGINGFACE_TOKEN2")  # You must define this in .env or hardcode it

# # === Load PDFs ===
# loader = DirectoryLoader(path="books", glob="*.pdf", loader_cls=PyPDFLoader)

# # === Text splitting & embedding ===
# text_splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=50)
# embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/msmarco-distilbert-base-v3")

# # === Vector store setup ===
# vectorstore = Chroma(
#     embedding_function=embedding,
#     persist_directory="chroma_db"
# )

# # === Populate vectorstore if needed ===
# persist_directory = "chroma_db"

# # If the vector store is not found, ingest the documents
# if not os.path.exists(persist_directory):
#     print("Vectorstore not found, ingesting documents...")

#     # Load and process documents if vector store is missing
#     for doc in loader.lazy_load():
#         chunks = text_splitter.split_documents([doc])
#         vectorstore.add_documents(chunks)  # Automatically persisted
# else:
#     print("Vectorstore already exists. Skipping ingestion.")

# # === Create retriever ===
# retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# # === Hugging Face API LLM (Qwen or Mistral etc.) ===
# llm = HuggingFaceEndpoint(
#     repo_id="mistralai/Mistral-7B-Instruct-v0.3",  
#     task="text-generation",
#     huggingfacehub_api_token=HF_TOKEN,
#     temperature=0.9
# )

# # === Prompt template ===
# prompt_template = PromptTemplate(
#     input_variables=["context", "question"],
#     template="""
# You are an expert tutor helping a student understand a topic based on a textbook. Read the following context carefully and give a detailed, well-structured answer to the question. Include definitions, key points, explanations, and examples if relevant.

# Context:
# {context}

# Question:
# {question}

# Instructions:
# - Provide a clear and in-depth explanation.
# - Break down complex terms or processes if necessary.
# - Use bullet points or paragraph structure if it helps clarity.
# - Avoid vague answers. Focus strictly on the context.
# - Do not add unrelated information.

# Answer:
# """
# )

# # === Create RetrievalQA chain ===
# qa_chain = RetrievalQA.from_chain_type(
#     llm=llm,
#     retriever=retriever,
#     chain_type="stuff",
#     chain_type_kwargs={"prompt": prompt_template}
# )

# # === User query ===
# query = "Palm-Line Detection"

# # === Get answer ===
# response = qa_chain.invoke({"query": query})


# # === Print result ===
# print(response["result"])



# models.py
from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings, HuggingFaceEndpoint
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
import os
from dotenv import load_dotenv
load_dotenv()

HF_TOKEN = os.getenv("HUGGINGFACE_TOKEN2")

loader = DirectoryLoader(path=r"books", glob="*.pdf", loader_cls=PyPDFLoader)
# # === Text splitting & embedding ===
text_splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=50)
embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/msmarco-distilbert-base-v3")

# === Vector store setup ===
vectorstore = Chroma(
    embedding_function=embedding,
    persist_directory="chroma_db"
)

# # === Populate vectorstore if needed ===
persist_directory = "chroma_db"

# # If the vector store is not found, ingest the documents
if not os.path.exists(persist_directory):
    print("Vectorstore not found, ingesting documents...")

    # Load and process documents if vector store is missing
    for doc in loader.lazy_load():
        chunks = text_splitter.split_documents([doc])
        vectorstore.add_documents(chunks)  # Automatically persisted
else:
    print("Vectorstore already exists. Skipping ingestion.")

# # === Create retriever ===
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# LLM setup
llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mistral-7B-Instruct-v0.3",
    task="text-generation",
    huggingfacehub_api_token=HF_TOKEN,
    temperature=0.9
)

# Prompt template
prompt_template = PromptTemplate(
    input_variables=["context", "question"],
    template="""
You are an expert tutor helping a student understand a topic based on a textbook. Read the following context carefully and give a detailed, well-structured answer to the question. Include definitions, key points, explanations, and examples if relevant.

Context:
{context}

Question:
{question}

Instructions:
- Provide a clear and in-depth explanation.
- Break down complex terms or processes if necessary.
- Use bullet points or paragraph structure if it helps clarity.
- Avoid vague answers. Focus strictly on the context.
- Do not add unrelated information.

Answer:
"""
)

# QA Chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    chain_type="stuff",
    chain_type_kwargs={"prompt": prompt_template}
)

# Public function to use in Flask
def answer_question(question: str):
    return qa_chain.invoke({"query": question})["result"]

