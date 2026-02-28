# 🧠 Neural-Task: AI-Orchestrated Project Management Engine

**Neural-Task** is a production-ready SaaS MVP designed for high-performance engineering teams. It transforms high-level project visions into actionable, technical roadmaps using AI-orchestrated synthesis and real-time task decomposition.

---

## 📖 Project Architecture

The system is built as a modular monorepo, separating human-centric interfaces from the AI-driven core logic.

- **Frontend:** React SPA powered by Vite and the latest **Tailwind CSS v4**.
- **Backend:** High-performance asynchronous API built with **FastAPI**.
- **AI Core:** Hybrid intelligence integrating **Google Gemini 1.5 Pro** and **OpenAI GPT-4**.

---

## �️ Tech Stack & Requirements

### Frontend Requirements

- **Node.js:** v18.0.0 or higher
- **Package Manager:** npm (v9+)
- **Core:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Lucide-React
- **State/Routing:** React Router v7

### Backend Requirements

- **Python:** 3.9 or higher
- **Framework:** FastAPI
- **Validation:** Pydantic v2
- **Auth:** OAuth2 with JWT (python-jose, passlib)
- **Database (Integration Ready):** Supabase/PostgreSQL

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd neural-task
```

### 2. Backend Configuration

Navigate to the `/backend` directory and set up your virtual environment:

```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Unix/MacOS
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt
```

**Configure Environment Variables:**
Create a `.env` file in the `/backend` directory:

```env
GOOGLE_API_KEY=your_gemini_key_here
OPEN_AI_KEY=your_openai_key_here
SECRET_KEY=your_generate_jwt_secret_here
```

### 3. Frontend Configuration

Navigate to the `/frontend` directory:

```bash
cd ../frontend
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the `/frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## ⚡ Running the Application

### Start Backend (FastAPI)

From the `/backend` directory:

```bash
# Using uvicorn directly
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The API documentation will be available at `http://localhost:8000/docs`.

### Start Frontend (Vite)

From the `/frontend` directory:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 🧩 Featured Screens

1. **Executive Hub:** A 4-column mission control for high-level synthesis and team synergy.
2. **Priority Matrix:** A 2x2 "High Impact/Low Effort" grid for strategic task selection.
3. **Neural Search:** Semantic investigation into project knowledge bases.
4. **AI Co-Pilot:** Real-time workspace optimization and task decomposition.
5. **Flow Analytics:** Deep-focus heatmaps and productivity metrics.

---

## 📐 Design System

Neural-Task uses a **"Cyber-Professional"** aesthetic:

- **Palette:** `Obsidian (#0a0a0a)`, `Trust Teal (#2dd4bf)`, `Strategic Amber (#fbbf24)`.
- **UI Patterns:** Glassmorphism, 16px soft border-radii, and subtle micro-animations.
- **Typography:** Inter/System Sans for maximum readability.

---

## 🤝 Contribution Guidelines

Built by **FluxBuilders** @ MUST. We welcome contributions that align with our vision of eliminating the "Cold-Start" problem in development.

---

## 📄 License

This project is licensed under the MIT License.
