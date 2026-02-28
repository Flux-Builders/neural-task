# 📦 Project Dependencies & Architecture

This document provides a comprehensive overview of the libraries and frameworks used in the **Neural-Task** project, along with their specific roles and purposes.

---

## 🖥️ Backend (FastAPI)

The backend is a high-performance, asynchronous API designed for AI-orchestrated task management.

### Core Framework & Server

| Library     | Purpose                                                                                                                   |
| :---------- | :------------------------------------------------------------------------------------------------------------------------ |
| **FastAPI** | Modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.     |
| **Uvicorn** | A lightning-fast ASGI (Asynchronous Server Gateway Interface) server implementation, used to run the FastAPI application. |

### AI Core & Services

| Library                 | Purpose                                                                                                      |
| :---------------------- | :----------------------------------------------------------------------------------------------------------- |
| **google-generativeai** | Official Python SDK for the Google Gemini API, enabling advanced multimodal synthesis and reasoning.         |
| **openai**              | The OpenAI Python library, providing access to the GPT-4 models for strategic task decomposition and search. |

### Security & Authentication

| Library             | Purpose                                                                                                                           |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| **python-jose**     | A JavaScript Object Signing and Encryption (JOSE) implementation in Python, used for encoding and decoding JWT (JSON Web Tokens). |
| **passlib[bcrypt]** | A password hashing library for Python that provides high-level password security and verification.                                |

### Utilities

| Library           | Purpose                                                                                                           |
| :---------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Pydantic**      | Data validation and settings management using Python type annotations. Deeply integrated with FastAPI.            |
| **python-dotenv** | Reads key-value pairs from a `.env` file and adds them to environment variables for secure configuration.         |
| **Typing**        | Standard library extension providing support for type hints, critical for FastAPI's documentation and validation. |

---

## 🎨 Frontend (React + Vite)

A modern Single Page Application (SPA) with a focus on high-performance UX and real-time responsiveness.

### Core UI Framework

| Library        | Purpose                                                                                                                   |
| :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **React 19**   | A JavaScript library for building user interfaces with high performance and declarative components.                       |
| **Vite**       | Next-generation frontend tooling that provides an extremely fast development environment and optimized production builds. |
| **TypeScript** | Adds static typing to JavaScript, ensuring robust code and better developer experience.                                   |

### Navigation & State

| Library             | Purpose                                                                                     |
| :------------------ | :------------------------------------------------------------------------------------------ |
| **React Router v7** | The standard routing library for React, handling navigation and URL-based state management. |
| **Axios**           | A promise-based HTTP client for making API requests to the FastAPI backend.                 |

### Data Visualization & Icons

| Library          | Purpose                                                                                              |
| :--------------- | :--------------------------------------------------------------------------------------------------- |
| **Recharts**     | A composable charting library built on React components for rendering flow analytics and heatmaps.   |
| **Lucide-React** | A beautiful and consistent icon library based on Lucide, providing scalable vector icons for the UI. |

### Styling & Design System

| Library                    | Purpose                                                                                                |
| :------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Tailwind CSS v4**        | A utility-first CSS framework for rapid UI development with a "Cyber-Professional" aesthetic.          |
| **Clsx / Tailwind-Merge**  | Utilities for conditionally joining CSS class names and merging Tailwind classes without conflicts.    |
| **Autoprefixer / PostCSS** | Tools for transforming CSS with JavaScript and adding vendor prefixes for cross-browser compatibility. |

### Development & Linting

| Library      | Purpose                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------- |
| **ESLint**   | A pluggable linting utility for JavaScript and TypeScript to identify and fix code quality issues. |
| **TSConfig** | Configuration for the TypeScript compiler to ensure consistent type-checking across the project.   |

---

## 🏗️ System Integration

The system leverages a **Monorepo** structure where:

1.  **Frontend** communicates with the **Backend** via a secure REST API.
2.  **Authentication** is handled via JWT, ensuring stateless and secure user sessions.
3.  **AI Services** are abstracted via an internal `AIService` layer, allowing seamless switching between Gemini and GPT-4.
