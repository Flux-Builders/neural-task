# 🧠 Neural-Task Backend

This is the high-performance AI-orchestrated core of the Neural-Task project management engine.

---

## 🛠️ Tech Stack & Key Libraries

Below are the core libraries used in the backend and their specific purposes:

### 1. **Core API Framework**

- **FastAPI**: A modern, high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints. Fast to code, and extremely efficient at execution.
- **Uvicorn**: A lightning-fast ASGI server implementation used in production to run the FastAPI application on top of any standard Python interpreter.

### 2. **Artificial Intelligence Layer**

- **google-generativeai**: The official Python client for Google Gemini 1.5 Pro. This powers the high-level synthesis of project tasks and strategic recommendations.
- **openai**: The standard SDK for OpenAI's GPT-4. Combined with Gemini, it creates a hybrid intelligence system for semantic search and complex reasoning.
- **Pydantic**: Used for data validation and schema management. It ensures that every piece of data moving through the AI pipeline is structurally correct and type-safe.

### 3. **Security & Authentication**

- **python-jose (with Cryptography)**: Provides support for JSON Web Tokens (JWT). This is used to issue and verify secure access tokens for user sessions.
- **passlib (with Bcrypt)**: A password hashing library that implements the industry-standard bcrypt algorithm to ensure all user passwords are securely stored on the server.
- **python-dotenv**: Automatically loads environment variables (like API keys and secrets) from a local `.env` file into the OS environment.

---

## 🚀 Getting Started

1.  **Environment Setup**:

    ```bash
    python -m venv venv
    .\venv\Scripts\activate # On Windows
    ```

2.  **Dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

3.  **Run Server**:
    ```bash
    python main.py
    ```
    The API will be live at `http://localhost:8000`. You can access the interactive Swagger UI at `http://localhost:8000/docs`.
