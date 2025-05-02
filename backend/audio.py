# from transformers import AutoTokenizer, AutoModelForCausalLM
# from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from dotenv import load_dotenv
# import os
# import requests
# import torch
# import time
# import nltk

# from nltk.tokenize import sent_tokenize
# nltk.download("punkt_tab")

# # === Load Environment Variables ===
# load_dotenv()
# ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")

# # with open (r"tutor_explanation.txt","r", encoding="utf-8") as f:
# #     summary_text  = f.read()
    

# # def get_first_n_sentences(text, n=50):
# #     sentences = sent_tokenize(text)
# #     return " ".join(sentences[:n])

# # short_summary = get_first_n_sentences(summary_text, n=10)

# # === Text-to-Speech using ElevenLabs API ===
# def text_to_speech(text, filename="explanation_audio1.mp3", voice_id="EXAVITQu4vr4xnSDxMaL"):
#     if not ELEVENLABS_API_KEY:
#         print("❌ ElevenLabs API key not set.")
#         return

#     url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
#     headers = {
#         "xi-api-key": ELEVENLABS_API_KEY,
#         "Content-Type": "application/json"
#     }
#     payload = {
#         "text": text,
#         "model_id": "eleven_monolingual_v1",
#         "voice_settings": {
#             "stability": 0.85,
#             "similarity_boost": 0.75,
#             "emotion": "joy",
#             "pitch": 0.5,
#             "rate": 1.0
#         }
#     }
#     response = requests.post(url, headers=headers, json=payload)
#     if response.status_code == 200:
#         with open(filename, "wb") as f:
#             f.write(response.content)
#         print(f"✅ Audio saved as {filename}")
#     else:
#         print(f"❌ Failed to synthesize speech: {response.status_code}")
#         print(response.text)

# # text_to_speech(short_summary)



# audio.py
import requests
import os
from dotenv import load_dotenv
import nltk
from nltk.tokenize import sent_tokenize

# === Load Environment Variables ===
load_dotenv()
ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY").strip()

# try:
#     nltk.data.find('tokenizers/punkt')
# except nltk.downloader.DownloadError:
nltk.download("punkt_tab") # Download punkt if not found

# === Text-to-Speech using ElevenLabs API ===
def text_to_speech(text, voice_id="EXAVITQu4vr4xnSDxMaL"): # Removed filename default
    """Generates speech using ElevenLabs and returns audio bytes."""
    if not ELEVENLABS_API_KEY:
        print("❌ ElevenLabs API key not set.")
        return None # Return None on failure

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "Accept": "audio/mpeg", # Specify we want MP3 audio back
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1", # Or other suitable model
        "voice_settings": {
            "stability": 0.75,       # Adjust as needed
            "similarity_boost": 0.75 # Adjust as needed
            # "style": 0.5,          # Optional: experiment if model supports it
            # "use_speaker_boost": True # Optional: experiment if model supports it
        }
    }
    try:
        response = requests.post(url, headers=headers, json=payload, stream=True) # Use stream=True for potentially large audio
        response.raise_for_status() # Raises HTTPError for bad responses (4xx or 5xx)

        # --- Return the audio content directly ---
        print(f"✅ Successfully received audio stream from ElevenLabs.")
        return response.content # Return the raw bytes of the audio
        # ---

    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to synthesize speech: {e}")
        # Try to print error details from ElevenLabs if available
        try:
             error_details = response.json()
             print("Error details:", error_details)
        except: # Handle cases where response is not JSON
             print("Response content:", response.text)
        return None # Return None on failure
