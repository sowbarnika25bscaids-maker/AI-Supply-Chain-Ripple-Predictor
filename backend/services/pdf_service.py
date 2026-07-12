from io import BytesIO
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph


class PDFService:

    def generate(
        self,
        detection,
        recovery,
        risk,
        recommendation
    ):

        buffer = BytesIO()

        doc = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        story = []

        story.append(
            Paragraph(
                "<b>AI Supply Chain Ripple Predictor</b>",
                styles["Title"]
            )
        )

        story.append(
            Paragraph(
                "<br/>",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Event:</b> {detection['event']}",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Failed Supplier:</b> {detection['failed_node']}",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Severity:</b> {detection['severity']}",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Recommended Supplier:</b> {recovery['recommended_supplier']}",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Risk Score:</b> {risk['overall_risk']}%",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                f"<b>Risk Level:</b> {risk['risk_level']}",
                styles["Normal"]
            )
        )

        story.append(
            Paragraph(
                "<br/><b>AI Recommendation</b>",
                styles["Heading2"]
            )
        )

        story.append(
            Paragraph(
                recommendation.replace("\n", "<br/>"),
                styles["Normal"]
            )
        )

        doc.build(story)

        buffer.seek(0)

        return buffer