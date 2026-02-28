from fastapi import APIRouter
from app.api.endpoints import task_router, user_router, ai_router, automation_router

router = APIRouter()

router.include_router(task_router, prefix="/tasks", tags=["Tasks"])
router.include_router(user_router, prefix="/user", tags=["Auth"])
router.include_router(ai_router, prefix="/ai", tags=["Neural Engine"])
router.include_router(automation_router, prefix="/automations", tags=["Automations"])
