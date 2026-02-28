from fastapi import APIRouter, Depends, HTTPException, status
from typing import List, Optional
from app.models.schemas import Task, TaskCreate, User, Token, UserCreate
from app.core.auth import authenticate_user, create_access_token # Needs to be defined or mocked
from datetime import datetime

# --- MOCK ROUTERS FOR MVP DEMO ---
task_router = APIRouter()
user_router = APIRouter()
ai_router = APIRouter()
automation_router = APIRouter()

# --- TASK ENDPOINTS (Priority Matrix) ---
@task_router.get("/", response_model=List[Task])
async def get_tasks():
    # Return mock data for the MVP
    return [
        {
            "id": "t1", "user_id": "u1", "title": "Neural Sync", 
            "priority": "critical", "impact": 9, "effort": 3, 
            "is_completed": False, "created_at": datetime.now()
        },
        {
            "id": "t2", "user_id": "u1", "title": "API Gateway", 
            "priority": "high", "impact": 8, "effort": 5, 
            "is_completed": False, "created_at": datetime.now()
        }
    ]

# --- AI ENDPOINTS (Neural Search & Synthesis) ---
@ai_router.post("/synthesis")
async def tasks_synthesis(tasks: List[str]):
    from app.services.ai_service import ai_service
    return {"synthesis": await ai_service.get_synthesis(tasks)}

@ai_router.post("/search")
async def neural_search(query: str, context: List[str]):
    from app.services.ai_service import ai_service
    return {"results": await ai_service.neural_search(query, context)}

# --- USER ENDPOINTS (Onboarding Gate) ---
@user_router.post("/login", response_model=Token)
async def login(credentials: dict):
    # Simplified login logic for MVP
    access_token = create_access_token(data={"sub": credentials.get("email", "pilot@neural.io")})
    return {"access_token": access_token, "token_type": "bearer"}

# --- AUTOMATION ENDPOINTS (Node Logic) ---
@automation_router.get("/")
async def get_automations():
    return [{"id": "a1", "name": "Morning Synthesis Sync", "is_active": True}]
