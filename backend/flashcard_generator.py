# models/flashcard_generator.py (or keep in flashcard.py and adjust import)

from langchain_huggingface import HuggingFaceEndpoint
from langchain.prompts import PromptTemplate
import json
import os
from dotenv import load_dotenv
import logging # Recommended for better error tracking

# === Load environment variable ===
load_dotenv()
HF_TOKEN = os.getenv("HUGGINGFACE_TOKEN2")

# === Initialize the model (consider initializing once in app.py if performance is critical) ===
# You might move this initialization part to your main app.py to avoid re-initializing
# the model on every request, depending on your application's structure.
try:
    llm = HuggingFaceEndpoint(
        repo_id="mistralai/Mistral-7B-Instruct-v0.3",
        task="text-generation",
        huggingfacehub_api_token=HF_TOKEN,
        temperature=0.7,
        max_new_tokens=512
    )
except Exception as e:
    logging.error(f"❌ Failed to initialize HuggingFace Endpoint: {e}")
    llm = None # Handle cases where initialization fails

# === Flashcard prompt template ===
prompt_template = PromptTemplate(
    input_variables=["context"],
    template="""
    You are an intelligent assistant that generates flashcards from study material.
    Given the following summary of a book or document, generate 5 to 10 flashcards in JSON format.
    Each flashcard should have a "question" and a "answer".

    Context:
    {context}

    Output Format (JSON):
    [{{
        "question": "...",
        "answer": "..."
    }},
    ...
    ]
    Only return valid JSON.
    """
)

def generate_flashcards_from_text(text_content: str) -> list | None:
    """
    Generates flashcards from the provided text using the Hugging Face model.

    Args:
        text_content: The text to generate flashcards from.

    Returns:
        A list of flashcard dictionaries (e.g., [{"question": "Q", "answer": "A"}, ...])
        or None if generation fails.
    """
    if not llm:
        logging.error("❌ LLM not initialized. Cannot generate flashcards.")
        return None
    if not text_content:
        logging.warning("⚠️ Attempted to generate flashcards from empty text.")
        return [] # Return empty list for empty input

    prompt = prompt_template.format(context=text_content)
    try:
        logging.info("⏳ Generating flashcards...")
        response = llm.invoke(prompt)
        # Clean the response: Sometimes models add extra text or markdown formatting
        cleaned_response = response.strip().strip('``````').strip()
        flashcards = json.loads(cleaned_response)
        logging.info(f"✅ Successfully generated {len(flashcards)} flashcards.")
        # Basic validation (optional but recommended)
        if isinstance(flashcards, list) and all(isinstance(fc, dict) and 'question' in fc and 'answer' in fc for fc in flashcards):
             return flashcards
        else:
             logging.error(f"❌ Generated response is not a valid list of flashcards: {flashcards}")
             return None
    except json.JSONDecodeError as e:
        logging.error(f"❌ Failed to parse JSON response from LLM: {e}\nResponse was: {response}")
        return None
    except Exception as e:
        logging.error(f"❌ Failed to generate flashcards: {e}")
        # Consider logging traceback: import traceback; logging.error(traceback.format_exc())
        return None

# Example Usage (optional, for testing the function directly)
# if __name__ == "__main__":
#     logging.basicConfig(level=logging.INFO)
#     # Example: Read from the tutor explanation file
#     try:
#         with open("../tutor_explanation.txt", "r", encoding="utf-8") as f: # Adjust path if needed
#             summary_text = f.read()
#         generated = generate_flashcards_from_text(summary_text)
#         if generated:
#             print("Generated Flashcards:")
#             print(json.dumps(generated, indent=2))
#             # Optionally save to file
#             # with open("flashcards_test_output.json", "w", encoding="utf-8") as f:
#             #     json.dump(generated, f, indent=2, ensure_ascii=False)
#         else:
#             print("Flashcard generation failed.")
#     except FileNotFoundError:
#         print("Error: tutor_explanation.txt not found. Make sure it exists.")
#     except Exception as e:
#         print(f"An error occurred: {e}")

