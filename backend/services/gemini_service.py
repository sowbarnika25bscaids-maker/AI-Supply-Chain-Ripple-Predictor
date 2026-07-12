import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


class GeminiService:

    MODEL = "gemini-3.5-flash"


    def generate_recommendation(
        self,
        detection,
        recovery,
        risk
    ):

        prompt = f"""
You are an AI Supply Chain Risk Expert.

Analyze the following supply chain disruption:

Event: {detection["event"]}
Failed Supplier: {detection["failed_node"]}
Severity: {detection["severity"]}

Recommended Recovery Supplier: {recovery["recommended_supplier"]}
Supplier Risk Score: {recovery["risk_score"]}
Available Capacity: {recovery["capacity"]}

Overall Supply Chain Risk: {risk["overall_risk"]}%
Risk Level: {risk["risk_level"]}


Generate the response strictly in this format:


## 1. Executive Summary

Explain the incident, failed supplier impact, and current supply chain condition.


## 2. Business Impact

Explain:
- Production impact
- Customer impact
- Financial impact
- Operational risks


## 3. Immediate Actions (0-24 Hours)

Provide urgent recovery steps to stabilize the supply chain.


## 4. Long-Term Prevention

Provide strategies to prevent future disruptions:

- Supplier diversification
- Risk monitoring
- Backup supplier planning
- Resilience improvements


## 5. Final Recommendation

Provide the final decision and explain why the recommended supplier is the best recovery option.


Keep the response professional and suitable for supply chain executives.
"""

        try:

            response = client.models.generate_content(
                model=self.MODEL,
                contents=prompt
            )

            return response.text


        except Exception as e:

            print("Gemini Error:", e)

            return f"AI Error: {e}"



    def chat(
        self,
        question,
        detection,
        recovery,
        risk
    ):

        prompt = f"""
You are an AI Supply Chain Consultant.

Current Supply Chain Incident:

Event:
{detection["event"]}

Failed Supplier:
{detection["failed_node"]}

Severity:
{detection["severity"]}


Recommended Supplier:
{recovery["recommended_supplier"]}

Supplier Risk Score:
{recovery["risk_score"]}

Supplier Capacity:
{recovery["capacity"]}


Overall Risk:
{risk["overall_risk"]}%

Risk Level:
{risk["risk_level"]}


User Question:

{question}


Instructions:

- Answer using the provided supply chain data.
- Give practical business recommendations.
- Explain reasoning clearly.
- Respond like an expert supply chain analyst.
"""

        try:

            response = client.models.generate_content(
                model=self.MODEL,
                contents=prompt
            )

            return response.text


        except Exception as e:

            print("Gemini Error:", e)

            return f"AI Error: {e}"