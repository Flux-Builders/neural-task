from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Any
from datetime import datetime
from enum import Enum

class PriorityEnum(str, Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

# --- AUTH SCHEMAS ---
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: str
    is_active: bool = True
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None


# --- TASK SCHEMAS (Priority Matrix) ---
class TaskBase(BaseModel):
    title: str = Field(..., max_length=255)
    description: Optional[str] = None
    priority: PriorityEnum = PriorityEnum.MEDIUM
    impact: int = Field(0, ge=0, le=10) # 0-10 for matrix logic
    effort: int = Field(0, ge=0, le=10) # 0-10 for matrix logic
    is_completed: bool = False

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: str
    user_id: str
    created_at: datetime
    
    class Config:
        from_attributes = True


# --- AUTOMATION SCHEMAS (Node-Editor Logic) ---
class AutomationNode(BaseModel):
    id: str
    type: str # e.g., 'trigger', 'action', 'condition'
    data: dict

class AutomationEdge(BaseModel):
    id: str
    source: str
    target: str

class AutomationBase(BaseModel):
    name: str
    is_active: bool = True
    nodes: List[AutomationNode]
    edges: List[AutomationEdge]

class AutomationCreate(AutomationBase):
    pass

class Automation(AutomationBase):
    id: str
    user_id: str
    last_triggered: Optional[datetime] = None

    class Config:
        from_attributes = True


# --- ANALYTICS SCHEMAS (Heatmap Data) ---
class HeatmapPoint(BaseModel):
    x: int # hour of day
    y: int # day of week
    value: int # task completion count or focus score

class AnalyticsSummary(BaseModel):
    total_completed: int
    efficiency_score: float # 0.0 - 1.0
    heatmap_data: List[HeatmapPoint]
    optimization_suggestions: List[str]
