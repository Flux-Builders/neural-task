# 🚀 NEURAL-TASK 

### **The AI-Orchestrated Project Management Engine**
*Built by **FluxBuilders** @ Mbeya University of Science and Technology (MUST)*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: Vite-React](https://img.shields.io/badge/Frontend-Vite%20%2B%20React-blue)](https://vitejs.dev/)
[![Stack: FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)](https://fastapi.tiangolo.com/)
[![Stack: Gemini-AI](https://img.shields.io/badge/AI-Gemini%201.5%20Pro-purple)](https://ai.google.dev/)

---

## 📖 Overview
**Neural-Task** is a high-performance project management platform designed to eliminate the "Cold-Start" problem in software development. By leveraging Large Language Models (LLMs), Neural-Task transforms high-level project visions into actionable, technical roadmaps. 

It doesn't just store your tasks; it **thinks** through them.

---

## ⚡ The Problem & Our Solution

### **The Problem**
Many developers—especially students—know *what* they want to build but struggle with the *how*. Breaking down a "User Authentication System" into 10 technical steps is a cognitive barrier that slows down production.

### **Our Solution**
**Neural-Task** acts as a virtual Senior Architect. Input your goal, and our **Neural-Decomposition Engine** generates a full Kanban board with:
1.  Technical sub-tasks.
2.  Suggested tech stacks for each task.
3.  AI-generated "Coding Tips" to get you started instantly.

---

## ✨ Key Features
- **🧠 Neural-Decomposition:** Real-time task breakdown using Gemini 1.5 Pro.
- **✨ Vibe-Coded UI:** A "Cyber-Professional" interface featuring glassmorphism and 3D hover effects.
- **🛹 Dynamic Kanban:** Drag-and-drop workflow powered by Framer Motion.
- **🔐 Secure Auth:** Enterprise-grade authentication via Supabase.
- **📊 Progress Insights:** Visual percentage trackers for individual and team completion rates.

---

## 🛠 Tech Stack

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, TypeScript | High-speed SPA architecture |
| **Styling** | Tailwind CSS, Framer Motion | Aesthetic & 3D animations |
| **Backend** | Python, FastAPI | High-performance asynchronous API |
| **Database** | Supabase (PostgreSQL) | Real-time data & authentication |
| **AI Engine** | Google Gemini API | Task logic & technical guidance |

---

## 🏗 Project Structure (Monorepo)
```text
/neural-task
├── /frontend           # React + Tailwind + Vite
│   ├── /src/components # Reusable UI Components
│   └── /src/hooks      # AI logic & State management
├── /backend            # FastAPI + Python
│   ├── /app/api        # Routes (Auth, Tasks, AI)
│   └── /app/core       # AI Engine (Gemini Integration)
└── /docs               # Project Charter & Technical Specs
