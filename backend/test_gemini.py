from services.gemini_service import GeminiService

service = GeminiService()

print(
    service.generate_recommendation(
        {
            "event": "Flood at Supplier S3",
            "failed_node": "S3",
            "severity": "High"
        },
        {
            "recommended_supplier": "S9",
            "risk_score": 0.9,
            "capacity": 2855
        },
        {
            "overall_risk": 82,
            "risk_level": "High"
        }
    )
)