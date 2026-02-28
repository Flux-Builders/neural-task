import os
from typing import List, Optional
import google.generativeai as genai
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

class AIService:
    def __init__(self):
        # Configure Gemini
        gemini_api_key = os.getenv("GOOGLE_API_KEY")
        if gemini_api_key:
            genai.configure(api_key=gemini_api_key)
            self.gemini_model = genai.GenerativeModel('gemini-1.5-pro')
        else:
            self.gemini_model = None

        # Configure OpenAI
        openai_api_key = os.getenv("OPEN_AI_KEY")
        if openai_api_key:
            self.openai_client = OpenAI(api_key=openai_api_key)
        else:
            self.openai_client = None

    async def get_synthesis(self, tasks: List[str]) -> str:
        """
        Synthesize task lists into a strategic recommendation.
        """
        prompt = (
            "Analyze the following project tasks and provide a concise, "
            "executive-level synthesis for a high-performance developer. "
            "Highlight bottlenecks and suggest an optimal focus path for today. "
            f"Tasks: {', '.join(tasks)}"
        )
        
        if self.gemini_model:
            response = self.gemini_model.generate_content(prompt)
            return response.text
        elif self.openai_client:
            response = self.openai_client.chat.completions.create(
                model="gpt-4",
                messages=[{"role": "user", "content": prompt}]
            )
            return response.choices[0].message.content
        else:
            return "Neural engine currently offline. Connect API keys to activate synthesis."

    async def neural_search(self, query: str, context: List[str]) -> str:
        """
        Search through indexed tasks/knowledge base using semantic reasoning.
        """
        prompt = (
            f"User query: {query}\n\nSearch context (tasks/docs):\n"
            f"{' --- '.join(context)}\n\n"
            "Identify the most relevant information. "
            "Provide a precise answer or link."
        )
        
        if self.gemini_model:
            response = self.gemini_model.generate_content(prompt)
            return response.text
        elif self.openai_client:
            response = self.openai_client.chat.completions.create(
                model="gpt-4",
                messages=[{"role": "user", "content": prompt}]
            )
            return response.choices[0].message.content
        else:
            return "Neural engine currently offline. Connect API keys to activate search."

ai_service = AIService()
