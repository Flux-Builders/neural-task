# 🎨 Neural-Task Frontend

This is a modern Single Page Application (SPA), built as a human-centric interface for the high-performance AI-orchestrated Project Management Engine.

---

## 🛠️ Tech Stack & Key Libraries

Below are the core libraries used in the frontend and their specific purposes:

### 1. **Core UI & Build Tools**

- **React 19**: A powerful library for building declarative and reactive user interfaces with high performance.
- **Vite**: Next-generation frontend tooling providing an extremely fast development environment and highly optimized production builds.
- **TypeScript**: Adds static typing to JavaScript, ensuring robust code and better developer experience.

### 2. **Navigation & Communication**

- **React Router v7**: The standard routing library for React, handling all navigation and URL-based state management within the application.
- **Axios**: A promise-based HTTP client for making API requests to the FastAPI backend with ease and security.

### 3. **Data Visualization & Icons**

- **Recharts**: A composable charting library built on React components, used for rendering project analytics and performance metrics.
- **Lucide-React**: A beautiful and consistent icon library used for all UI elements, providing scalable vector graphics.

### 4. **Styling & Design System**

- **Tailwind CSS v4**: A modern, utility-first CSS framework that allows for rapid UI development with a "Cyber-Professional" aesthetic.
- **Clsx / Tailwind-Merge**: Lightweight utilities for conditionally joining CSS class names and merging Tailwind classes without conflicts.
- **Autoprefixer / PostCSS**: Tools for transforming CSS with JavaScript and adding vendor prefixes for complete cross-browser compatibility.

### 5. **Quality & Standardisation**

- **ESLint**: A pluggable linting utility for identifying and fixing potential issues in JavaScript and TypeScript codebases.
- **TSConfig**: Standardised TypeScript compiler configuration that ensures type safety across the entire project.

---

## 🚀 Getting Started

1.  **Installation**:

    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env` file in the root of `/frontend` and add your backend's URL:

    ```env
    VITE_API_BASE_URL=http://localhost:8000/api/v1
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.
