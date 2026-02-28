# 🚀 Deployment Guide: Neural-Task

Since **Neural-Task** is a monorepo consisting of a **React Frontend** and a **FastAPI Backend**, the deployment is split into two parts.

---

## 🎨 1. Frontend Deployment (Netlify)

We use Netlify for the frontend because it offers superior performance for React/Vite apps and provides automatic SSL.

### Steps:

1.  **Connect Repo**: Push your code to GitHub/GitLab/Bitbucket.
2.  **Add New Site**: In Netlify, select "Import from Git" and choose your repository.
3.  **Site Settings**:
    - **Base directory**: `frontend`
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
4.  **Environment Variables**:
    - Go to **Site Settings > Build & deploy > Environment variables**.
    - Add `VITE_API_BASE_URL`: Set this to your **Backend URL** (e.g., `https://neural-api.onrender.com/api/v1`).
5.  **Deploy**: Click "Deploy site".

> [!NOTE]
> I have already included a `netlify.toml` in your root directory which automates these settings for you!

---

## 🧠 2. Backend Deployment (Render.com)

FastAPI requires a persistent server (ASGI). Render is the most straightforward "set and forget" host for Python APIs.

### Steps:

1.  **New Web Service**: In [Render](https://render.com), click **New + > Web Service**.
2.  **Connect Repo**: Connect the same repository.
3.  **Settings**:
    - **Name**: `neural-task-api`
    - **Environment**: `Python 3`
    - **Root Directory**: `backend`
    - **Build Command**: `pip install -r requirements.txt`
    - **Start Command**: `python -m uvicorn main:app --host 0.0.0.0 --port $PORT`
4.  **Environment Variables**:
    - `SECRET_KEY`: (Generate a long random string)
    - `GOOGLE_API_KEY`: Your Gemini Key
    - `OPEN_AI_KEY`: Your OpenAI Key
5.  **Deploy**: Click "Create Web Service".

---

## 🔗 3. Connecting the Two

Once your Backend is live:

1.  Copy the **Backend URL** provided by Render.
2.  Go back to your **Netlify Settings**.
3.  Update the `VITE_API_BASE_URL` variable to point to the Render URL.
4.  **Redeploy** the frontend.

---

## 🛠️ Troubleshooting

- **CORS Issues**: The backend in `main.py` is currently set to `allow_origins=["*"]`. This is perfect for the initial setup. For production, you can later restrict this to your specific Netlify URL.
- **API Offline**: Ensure your `GOOGLE_API_KEY` is correctly set in Render's environment variables, or the Neural Engine will remain in "Offline" mode.
