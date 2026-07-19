from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import router
from api.chat import router as chat_router

app = FastAPI(title="AI Supply Chain Ripple Predictor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-supply-chain-ripple-predictor.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(chat_router)

@app.get("/")
def home():
    return {
        "project": "AI Supply Chain Ripple Predictor",
        "status": "Running"
    }