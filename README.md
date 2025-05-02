
# 📘 Notedly - AI-Powered Tutor & Video Generator

**Notedly** is an intelligent assistant that transforms educational PDFs into spoken, easy-to-understand video lessons — all in under 3 minutes. Designed for students and educators, it breaks down complex content into human-like summaries and even generates narrated videos using AI.

---

## 🚀 Features

- 🧠 **AI Summarization**  
  Converts dense textbook chapters and notes into concise, tutor-style explanations.
  
- 🎙️ **Natural Narration**  
  Uses ElevenLabs (or any TTS API) to turn summaries into clear, human-like audio.
  
- 🎥 **Video Generation**  
  Integrates with the HeyGen API to create avatar-narrated educational videos.  
  **⚠️ Note:** Video generation is currently under development.

- 📂 **Local + Cloud LLMs**  
  Choose between local (TinyLlama) and Hugging Face-hosted models (e.g., Mistral).

- 🕐 **Time-Constrained Output**  
  Designed to keep all summaries and videos under 3 minutes.

---

## 🛠️ How It Works

1. 📄 **Upload** your educational PDF (e.g., a textbook chapter or lecture notes).
2. 🧩 **Summarization**: LangChain splits and processes the text using LLMs.
3. 🗣️ **Narration**: ElevenLabs generates speech from the generated script.
4. 🎬 **Video Generation**: (Planned) HeyGen API turns narration into videos.

---

## 🧑‍💻 Tech Stack

- **Python**, **LangChain**
- **LLMs**: TinyLlama (local) or Mistral (via Hugging Face)
- **Text-to-Speech**: ElevenLabs API
- **Video Generation**: HeyGen API (planned)
- **Vector Storage** (Future): ChromaDB for interactive document QA

---

## 🔧 Setup

```bash
git clone https://github.com/yourusername/notedly.git
cd notedly
pip install -r requirements.txt
```

