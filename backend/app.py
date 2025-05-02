# # app.py
# import os
# import uuid
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import traceback
# import PyPDF2  # For PDF handling
# import docx    # For DOCX handling
# # Import your LM functions/classes
# # from your_chat_model import get_chat_response
# # from your_flashcard_model import generate_flashcards_from_text
# # from your_quiz_model import generate_quiz_from_text
# # from your_audio_model import generate_audio_from_text # For future audio feature
# # from backend.models import answer_question  # Add this at the top

# from models import answer_question
# # --- Dummy LM functions (Replace with your actual model calls) ---
# # def get_chat_response(doc_text, question):
# #     print(f"Simulating chat response for: {question[:50]}... using doc (first 100 chars): {doc_text[:100]}...")
# #     # Replace with: result = your_chat_model.predict(context=doc_text, question=question)
# #     return f"AI response based on document content regarding '{question}'. (This is simulated)"

# def get_chat_response(doc_text, question):
#     print(f"Simulating chat response for: {question[:50]}...")
#     return f"AI response based on document content regarding '{question}'. (This is simulated)"


# def generate_flashcards_from_text(doc_text):
#     print(f"Simulating flashcard generation for doc (first 100 chars): {doc_text[:100]}...")
#     # Replace with: cards = your_flashcard_model.generate(text=doc_text)
#     return [
#         {"question": "Simulated Q1: Main topic?", "answer": "Simulated A1: Based on the document content."},
#         {"question": "Simulated Q2: Key takeaway?", "answer": "Simulated A2: Derived from the text provided."},
#         {"question": "Simulated Q3: An important detail?", "answer": "Simulated A3: Extracted from the source material."},
#     ]

# def generate_quiz_from_text(doc_text):
#     print(f"Simulating quiz generation for doc (first 100 chars): {doc_text[:100]}...")
#     # Replace with: quiz_data = your_quiz_model.generate(text=doc_text)
#     # Ensure the format matches: {question: str, options: List[str], correctAnswer: int (index)}
#     return [
#         {"question": "Simulated Q1: What is discussed?", "options": ["Option A", "Option B (Correct)", "Option C"], "correctAnswer": 1},
#         {"question": "Simulated Q2: A specific detail?", "options": ["Detail X", "Detail Y", "Detail Z (Correct)"], "correctAnswer": 2},
#     ]
# # ----------------------------------------------------------------

# app = Flask(__name__)
# CORS(app) # Allow requests from your React frontend

# # --- Simple In-Memory Storage for Document Content ---
# # Warning: This is lost when the server restarts.
# # For production, use a database, file storage, or vector store.
# document_store = {}

# def extract_text_from_file(file_stream, filename):
#     """Extracts text from PDF, DOCX, or TXT files."""
#     text = ""
#     if filename.lower().endswith('.pdf'):
#         reader = PyPDF2.PdfReader(file_stream)
#         for page in reader.pages:
#             text += page.extract_text() or ""
#     elif filename.lower().endswith('.docx'):
#         doc = docx.Document(file_stream)
#         for para in doc.paragraphs:
#             text += para.text + "\n"
#     elif filename.lower().endswith('.txt'):
#         text = file_stream.read().decode('utf-8')
#     else:
#         raise ValueError("Unsupported file type")
#     return text

# # --- API Endpoints ---

# @app.route('/')
# def home():
#     return "Flask Learning Hub Backend Running!"

# @app.route('/api/upload', methods=['POST'])
# def upload_document():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400

#     if file:
#         try:
#             # Extract text content
#             text_content = extract_text_from_file(file.stream, file.filename)

            
#             if not text_content.strip():
#                  return jsonify({"error": "Could not extract text or file is empty"}), 400

#             # Store content and generate ID
#             document_id = str(uuid.uuid4())
#             document_store[document_id] = text_content

#             save_path = os.path.join(r"backend\books", f"{document_id}_{file.filename}")
#             print(save_path)
#             file.stream.seek(0)
#             with open(save_path, "wb") as f:
#                 f.write(file.read())
#             print(f"Saved original file for vector ingestion: {save_path}")

#             # document_store[document_id] = text_content # Store extracted text
#             print(f"Stored document {document_id}, size: {len(text_content)} chars")

#             # Return the ID to the client
#             return jsonify({
#                 "message": "File processed successfully",
#                 "documentId": document_id,
#                 "filename": file.filename # Good to send back for UI confirmation
#             }), 200

#         except ValueError as ve:
#              return jsonify({"error": str(ve)}), 415 # Unsupported Media Type
#         except Exception as e:
#             print(traceback.format_exc())
#             return jsonify({"error": f"An error occurred during file processing: {str(e)}"}), 500

#     return jsonify({"error": "Unknown error during upload"}), 500

# @app.route('/api/chat', methods=['POST'])
# def handle_chat():
#     data = request.get_json()
#     document_id = data.get('documentId')
#     question = data.get('question')

#     if not document_id or not question:
#         return jsonify({"error": "Missing documentId or question"}), 400

#     doc_text = document_store.get(document_id)
#     if not doc_text:
#         return jsonify({"error": "Document not found or expired"}), 404

#     try:
#         # --- Replace with your actual chat LM call ---
#         # response_text = get_chat_response(doc_text, question)
#         response_text = answer_question(question)

#         # --------------------------------------------
#         return jsonify({"response": response_text})
#     except Exception as e:
#         print(traceback.format_exc())
#         return jsonify({"error": f"Error processing chat request: {str(e)}"}), 500

# @app.route('/api/generate_flashcards', methods=['POST'])
# def generate_flashcards():
#     data = request.get_json()
#     document_id = data.get('documentId')

#     if not document_id:
#         return jsonify({"error": "Missing documentId"}), 400

#     doc_text = document_store.get(document_id)
#     if not doc_text:
#         return jsonify({"error": "Document not found or expired"}), 404

#     try:
#         # --- Replace with your actual flashcard generation LM call ---
#         flashcards_data = generate_flashcards_from_text(doc_text)
#         # ---------------------------------------------------------
#         return jsonify({"flashcards": flashcards_data})
#     except Exception as e:
#         print(traceback.format_exc())
#         return jsonify({"error": f"Error generating flashcards: {str(e)}"}), 500

# @app.route('/api/generate_quiz', methods=['POST'])
# def generate_quiz():
#     data = request.get_json()
#     document_id = data.get('documentId')

#     if not document_id:
#         return jsonify({"error": "Missing documentId"}), 400

#     doc_text = document_store.get(document_id)
#     if not doc_text:
#         return jsonify({"error": "Document not found or expired"}), 404

#     try:
#         # --- Replace with your actual quiz generation LM call ---
#         # Ensure your model returns the correct format
#         quiz_data = generate_quiz_from_text(doc_text)
#         # ----------------------------------------------------
#         return jsonify({"quizQuestions": quiz_data})
#     except Exception as e:
#         print(traceback.format_exc())
#         return jsonify({"error": f"Error generating quiz: {str(e)}"}), 500

# # --- Optional: Endpoint to clear document store if needed ---
# @app.route('/api/clear_document/<document_id>', methods=['DELETE'])
# def clear_document(document_id):
#     if document_id in document_store:
#         del document_store[document_id]
#         print(f"Cleared document {document_id}")
#         return jsonify({"message": "Document cleared"}), 200
#     else:
#         return jsonify({"error": "Document not found"}), 404

# if __name__ == '__main__':
#     port = 5555 # Make sure this matches your Vite proxy target
#     print(f"Starting Flask server on http://127.0.0.1:{port}")
#     app.run(debug=True, port=port)



# app.py
import os
import uuid
import traceback
import logging
import io
from flask import Flask, request, jsonify,send_file
from flask_cors import CORS
import PyPDF2
import docx
from summary import make_summary

from nltk.tokenize import sent_tokenize 
from models import answer_question
from audio import text_to_speech
from flashcard_generator import generate_flashcards_from_text

# Near the top, after imports
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


app = Flask(__name__)
CORS(app)

# In-memory document store (clears on restart)
document_store = {}

# Create folder for saving documents for vector DB
os.makedirs("books", exist_ok=True)

# Extract text from file
def extract_text_from_file(file_stream, filename):
    text = ""
    if filename.lower().endswith('.pdf'):
        reader = PyPDF2.PdfReader(file_stream)
        for page in reader.pages:
            text += page.extract_text() or ""
    elif filename.lower().endswith('.docx'):
        doc = docx.Document(file_stream)
        for para in doc.paragraphs:
            text += para.text + "\n"
    elif filename.lower().endswith('.txt'):
        text = file_stream.read().decode('utf-8')
    else:
        raise ValueError("Unsupported file type")
    return text

@app.route('/')
def home():
    return "Flask Learning Hub Backend Running!"

@app.route('/api/upload', methods=['POST'])
def upload_document():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Generate document ID
        document_id = str(uuid.uuid4())

        # Save uploaded file
        filename = f"{document_id}_{file.filename}"
        save_dir = os.path.join("books")
        os.makedirs(save_dir, exist_ok=True)
        save_path = os.path.join(save_dir, filename)
        file.save(save_path)
        print(f"✅ Saved file: {save_path}")

        # === Call summary ===
        make_summary()

        # Reopen file for text extraction
        with open(save_path, "rb") as f:
            text_content = extract_text_from_file(f, file.filename)

        if not text_content.strip():
            return jsonify({"error": "Empty or unreadable document"}), 400

        document_store[document_id] = text_content
        print(f"📄 Stored {document_id}, {len(text_content)} chars")

        return jsonify({
            "message": "File processed",
            "documentId": document_id,
            "filename": file.filename
        })

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"error": "File processing failed", "details": str(e)}), 500

@app.route('/api/chat', methods=['POST'])
def handle_chat():
    data = request.get_json()
    doc_id = data.get('documentId')
    question = data.get('question')

    if not doc_id or not question:
        return jsonify({"error": "Missing documentId or question"}), 400

    doc_text = document_store.get(doc_id)
    if not doc_text:
        return jsonify({"error": "Document not found"}), 404

    try:
        response = answer_question(question)
        return jsonify({"response": response})
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": f"Chat error: {str(e)}"}), 500

@app.route('/api/clear_document/<document_id>', methods=['DELETE'])
def clear_document(document_id):
    if document_id in document_store:
        del document_store[document_id]
        print(f"🗑️ Cleared {document_id}")
        return jsonify({"message": "Document cleared"})
    return jsonify({"error": "Not found"}), 404

# --- NEW Text-to-Speech Endpoint ---
# @app.route('/tts', methods=['POST','GET'])
# def handle_text_to_speech():
#     """Generates audio from provided text using ElevenLabs."""
#     # data = request.get_json()
#     # text_to_convert = data.get('text')
#     # voice_id = data.get('voiceId') # Optional: Allow frontend to specify voice

#     # if not text_to_convert:
#     #     return jsonify({"error": "Missing 'text' in request body"}), 400

#     # logging.info(f"Received TTS request for text (first 50 chars): {text_to_convert[:50]}...")

#     # # Call the function from audio.py
    
#     with open (r"tutor_explanation.txt","r", encoding="utf-8") as f:
#         summary_text  = f.read()
#     def get_first_n_sentences(text, n=50):
#         sentences = sent_tokenize(text)
#         return " ".join(sentences[:n])

#     short_summary = get_first_n_sentences(summary_text, n=10)
#     print(short_summary)
#     audio_bytes = text_to_speech(short_summary)
    
#     if audio_bytes:
#         # Send the audio bytes directly back
#         audio_io = io.BytesIO(audio_bytes)
#         return send_file(
#             audio_io,
#             mimetype='audio/mpeg', # Standard MIME type for MP3
#             as_attachment=False # Play inline, don't force download
#             # download_name='speech.mp3' # Optional: Suggest filename if saved
#         )
#     else:
#         # Handle case where TTS generation failed
#         return jsonify({"error": "Failed to generate speech audio"}), 500


# @app.route('/api/getTutorExplanation')
# def tutorexplanation():
#     return "tutor_explanation.txt"



# # # # # # # # ## # # 

@app.route('/api/getTutorExplanation', methods=['GET'])
def get_tutor_explanation():
    """Reads and returns the content of tutor_explanation.txt."""
    file_path = "/Users/goyamjain/Downloads/smart-note-alchemy-main-4/backend/tutor_explanation.txt" # Assuming it's in the same dir as app.py
    try:
        # Ensure correct encoding, utf-8 is common
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        # Return plain text content
        return content, 200, {'Content-Type': 'text/plain; charset=utf-8'}
    except FileNotFoundError:
        logging.error(f"File not found: {file_path}")
        return jsonify({"error": "Tutor explanation file not found"}), 404
    except Exception as e:
        logging.error(f"Error reading file {file_path}: {e}")
        return jsonify({"error": "Failed to read tutor explanation file"}), 500
# ---

@app.route('/tts', methods=['POST','GET']) # Changed to only POST as it performs an action
def handle_text_to_speech():
    """Generates audio from tutor_explanation.txt using ElevenLabs."""

    # No need to get text from request body based on current logic
    # data = request.get_json()
    # text_to_convert = data.get('text')
    # voice_id = data.get('voiceId') # Optional: Could add this back later

    logging.info("Received TTS request...")

    explanation_file_path = "/Users/goyamjain/Downloads/smart-note-alchemy-main-4/backend/tutor_explanation.txt"
    try:
        with open(explanation_file_path, "r", encoding="utf-8") as f:
            summary_text = f.read()
    except FileNotFoundError:
        logging.error(f"File not found: {explanation_file_path}")
        return jsonify({"error": "Tutor explanation file not found for TTS"}), 404
    except Exception as e:
        logging.error(f"Error reading file {explanation_file_path}: {e}")
        return jsonify({"error": "Failed to read tutor explanation file for TTS"}), 500

    # --- Text processing ---
    def get_first_n_sentences(text, n=10): # Reduced default N slightly
        sentences = sent_tokenize(text)
        # Handle cases with fewer than N sentences
        return " ".join(sentences[:min(n, len(sentences))])

    short_summary = get_first_n_sentences(summary_text, n=10)
    if not short_summary:
         return jsonify({"error": "No text found in explanation file after processing"}), 400
    logging.info(f"Generating TTS for text (first 50 chars): {short_summary[:50]}...")
    # ---

    # Call the modified function from audio.py
    audio_bytes = text_to_speech(short_summary) # Use default voice for now

    if audio_bytes:
        logging.info("Successfully generated audio bytes. Sending response.")
        # Send the audio bytes directly back
        audio_io = io.BytesIO(audio_bytes)
        return send_file(
            audio_io,
            mimetype='audio/mpeg', # Standard MIME type for MP3
            as_attachment=False, # Play inline
            # download_name='speech.mp3' # Optional
        )
    else:
        logging.error("TTS generation failed in audio.py")
        # Handle case where TTS generation failed
        return jsonify({"error": "Failed to generate speech audio via ElevenLabs"}), 500


# Inside app.py

# (Keep your existing document_store and other routes)

@app.route('/api/generate_flashcards', methods=['POST'])
def generate_flashcards():
    data = request.get_json()
    document_id = data.get('documentId')

    if not document_id:
        logging.warning("⚠️ Flashcard request missing documentId")
        return jsonify({"error": "Missing documentId"}), 400

    # Retrieve the text content associated with the document ID
    # Option 1: Use the in-memory store (as currently in your app.py)
    doc_text = document_store.get(document_id)

    # Option 2: If you want to generate from tutor_explanation.txt directly (like flashcard.py did)
    # try:
    #     with open("tutor_explanation.txt", "r", encoding="utf-8") as f:
    #         doc_text = f.read()
    # except FileNotFoundError:
    #     logging.error("❌ tutor_explanation.txt not found for flashcard generation.")
    #     return jsonify({"error": "Source document for flashcards not found"}), 404
    # except Exception as e:
    #      logging.error(f"❌ Error reading tutor_explanation.txt: {e}")
    #      return jsonify({"error": "Failed to read source document"}), 500

    # Choose Option 1 or 2 based on whether you want flashcards from the *uploaded*
    # document (Option 1) or always from tutor_explanation.txt (Option 2).
    # The request implies using the uploaded document via documentId, so stick with Option 1.

    if not doc_text:
        logging.warning(f"⚠️ Document not found in store for ID: {document_id}")
        return jsonify({"error": "Document not found or expired"}), 404

    logging.info(f"⚡️ Received request to generate flashcards for document ID: {document_id}")

    try:
        # --- Call the actual flashcard generation function ---
        flashcards_data = generate_flashcards_from_text(doc_text)
        # ----------------------------------------------------

        if flashcards_data is not None:
            logging.info(f"✅ Successfully generated flashcards for document ID: {document_id}")
            return jsonify({"flashcards": flashcards_data})
        else:
            # The generate_flashcards_from_text function already logs errors
            logging.error(f"❌ Flashcard generation failed for document ID: {document_id}")
            return jsonify({"error": "Failed to generate flashcards"}), 500

    except Exception as e:
        logging.error(f"❌ Unhandled error in /api/generate_flashcards route: {e}")
        # Log the full traceback for debugging
        import traceback
        logging.error(traceback.format_exc())
        return jsonify({"error": f"An internal server error occurred: {str(e)}"}), 500



if __name__ == '__main__':
    port = 5555
    print(f"🚀 Starting Flask on http://127.0.0.1:{port}")
    # Use reloader=True for development, but be aware of potential issues on Windows
    # If WinError 10038 persists, keep use_reloader=False
    app.run(debug=True, port=port, use_reloader=True)




# if __name__ == '__main__':
#     port = 5555
#     print(f"🚀 Starting Flask on http://127.0.0.1:{port}")
#     app.run(debug=True, port=port, use_reloader=False)  # ⛔️ No auto-reloader to avoid WinError 10038
