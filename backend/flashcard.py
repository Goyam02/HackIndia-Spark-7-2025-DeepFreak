from langchain_huggingface import HuggingFaceEndpoint
from langchain.prompts import PromptTemplate
import json
import os
from dotenv import load_dotenv

# === Load environment variable for Hugging Face Token ===
load_dotenv()
HF_TOKEN = os.getenv("HUGGINGFACE_TOKEN2")

# === Load summarized text ===
with open("tutor_explanation.txt", "r", encoding="utf-8") as f:
    summary_text = f.read()

# === Initialize the model ===
llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mistral-7B-Instruct-v0.3",
    task="text-generation",
    huggingfacehub_api_token=HF_TOKEN,
    temperature=0.7,
    max_new_tokens=512
)

# === Flashcard prompt ===
prompt_template = PromptTemplate(
    input_variables=["context"],
    template="""
You are an intelligent assistant that generates flashcards from study material.

Given the following summary of a book or document, generate 5 to 10 flashcards in JSON format.
Each flashcard should have a "question" and a "answer".

Context:
{context}

Output Format (JSON):
[
  {{
    "question": "...",
    "answer": "..."
  }},
  ...
]

Only return valid JSON.
"""
)

# === Generate flashcards ===
prompt = prompt_template.format(context=summary_text)

try:
    response = llm.invoke(prompt)
    flashcards = json.loads(response.strip())

    with open("flashcards_from_summary.json", "w", encoding="utf-8") as f:
        json.dump(flashcards, f, indent=2, ensure_ascii=False)

    print("✅ Flashcards generated and saved to flashcards_from_summary.json")

except Exception as e:
    print(f"❌ Failed to generate flashcards: {e}")
