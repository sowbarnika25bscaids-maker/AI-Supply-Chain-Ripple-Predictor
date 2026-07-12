import re

class DetectionAgent:

    def detect(self, event_text: str):

        supplier = None

        match = re.search(r"S\d+", event_text)

        if match:
            supplier = match.group()

        severity = "Medium"

        if "fire" in event_text.lower():
            severity = "High"

        elif "flood" in event_text.lower():
            severity = "High"

        elif "strike" in event_text.lower():
            severity = "Medium"

        elif "delay" in event_text.lower():
            severity = "Low"

        return {
            "event": event_text,
            "failed_node": supplier,
            "severity": severity
        }