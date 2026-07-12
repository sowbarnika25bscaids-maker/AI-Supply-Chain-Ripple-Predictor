class CommunicationAgent:

    def generate(self, detection, recovery):

        return f"""
🚨 Supply Chain Disruption Detected

Event:
{detection['event']}

Failed Supplier:
{detection['failed_node']}

Severity:
{detection['severity']}

Recommended Supplier:
{recovery['recommended_supplier']}

Risk Score:
{recovery['risk_score']}

Available Capacity:
{recovery['capacity']}

Recommendation:
Immediately switch procurement to the alternate supplier to minimize downstream delays and reduce operational risk.
"""