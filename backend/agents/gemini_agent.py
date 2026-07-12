from services.gemini_service import GeminiService


class GeminiAgent:

    def __init__(self):
        self.gemini = GeminiService()

    def chat(self, question, result):

        detection = result["detection"]
        recovery = result["recovery"]
        risk = result["risk"]

        return self.gemini.chat(
            question,
            detection,
            recovery,
            risk
        )