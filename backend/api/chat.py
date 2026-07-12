from fastapi import APIRouter
from pydantic import BaseModel

from services.gemini_service import GeminiService

router = APIRouter()

gemini = GeminiService()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
def chat(request: ChatRequest):

    answer = gemini.chat(request.question)

    return {
        "answer": answer
    }