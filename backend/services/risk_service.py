import random

class RiskService:

    def calculate(self, affected_nodes):

        overall = min(100, len(affected_nodes) * 12 + random.randint(5, 20))

        if overall < 35:
            level = "Low"
        elif overall < 70:
            level = "Medium"
        else:
            level = "High"

        return {
            "overall_risk": overall,
            "risk_level": level
        }