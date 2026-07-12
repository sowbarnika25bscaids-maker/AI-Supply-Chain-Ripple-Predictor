from communication_agent import CommunicationAgent

agent = CommunicationAgent()

detection = {
    "event": "Flood at Supplier S3",
    "failed_node": "S3",
    "severity": "High"
}

recovery = {
    "recommended_supplier": "S9",
    "risk_score": 0.90,
    "capacity": 2855
}

print(agent.generate(detection, recovery))