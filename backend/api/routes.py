from fastapi import APIRouter
from pydantic import BaseModel

from graph.build_graph import build_graph
from graph.ripple_engine import RippleEngine
from graph.network_export import export_network

from agents.detection_agent import DetectionAgent
from agents.recovery_agent import RecoveryAgent
from agents.communication_agent import CommunicationAgent

from services.risk_service import RiskService
from services.gemini_service import GeminiService

from fastapi.responses import StreamingResponse
from services.pdf_service import PDFService
from agents.gemini_agent import GeminiAgent

router = APIRouter()

# Build Graph
graph = build_graph()
ripple_engine = RippleEngine(graph)

# Agents
detector = DetectionAgent()
recovery = RecoveryAgent()
communicator = CommunicationAgent()

# Services
risk = RiskService()
gemini = GeminiService()

pdf = PDFService()

gemini_agent = GeminiAgent()
class SimulationRequest(BaseModel):
    event: str


@router.get("/")
def home():
    return {
        "project": "AI Supply Chain Ripple Predictor",
        "status": "Running"
    }


@router.post("/simulate")
def simulate(request: SimulationRequest):

    # Detect disruption
    detection = detector.detect(request.event)
    print(detection)
    # Predict ripple effect
    affected_nodes = ripple_engine.simulate(
        detection["failed_node"]
    )

    # Recovery recommendation
    recovery_result = recovery.recommend(
        detection["failed_node"]
    )

    # Risk analysis
    risk_result = risk.calculate(
        affected_nodes
    )

    # AI Recommendation using Gemini
    try:

        message = gemini.generate_recommendation(
            detection,
            recovery_result,
            risk_result
        )

    except Exception as e:

        print("Gemini Error:", e)

        # Fallback if Gemini fails
        message = communicator.generate(
            detection,
            recovery_result
        )

    return {

        "detection": detection,

        "affected_nodes": affected_nodes,

        "recovery": recovery_result,

        "risk": risk_result,

        "communication": message

    }


@router.get("/network")
def network():

    return export_network(graph)

@router.post("/download-report")
def download_report(request: SimulationRequest):

    detection = detector.detect(request.event)

    print(detection)

    affected_nodes = ripple_engine.simulate(
        detection["failed_node"]
    )

    recovery_result = recovery.recommend(
        detection["failed_node"]
    )

    risk_result = risk.calculate(
        affected_nodes
    )

    try:

        message = gemini.generate_recommendation(
            detection,
            recovery_result,
            risk_result
        )

    except Exception:

        message = communicator.generate(
            detection,
            recovery_result
        )

    pdf_file = pdf.generate(
        detection,
        recovery_result,
        risk_result,
        message
    )

    return StreamingResponse(
        pdf_file,
        media_type="application/pdf",
        headers={
            "Content-Disposition": "attachment; filename=Incident_Report.pdf"
        }
        
    )


class ChatRequest(BaseModel):
    question: str
    result: dict


@router.post("/chat")
def chat(request: ChatRequest):

    answer = gemini_agent.chat(
        request.question,
        request.result
    )

    return {
        "answer": answer
    }