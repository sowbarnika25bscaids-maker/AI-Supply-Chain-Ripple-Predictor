import pandas as pd
import os


class RecoveryAgent:

    def __init__(self):

        data_folder = os.path.join(
            os.path.dirname(__file__),
            "..",
            "data"
        )

        self.suppliers = pd.read_csv(
            os.path.join(data_folder, "suppliers.csv")
        )

    def recommend(self, failed_supplier):

        row = self.suppliers[
            self.suppliers["supplier_id"] == failed_supplier
        ]

        if row.empty:
            return {
                "message": "Supplier not found"
            }

        alt = row.iloc[0]["alternate_supplier"]

        alt_row = self.suppliers[
            self.suppliers["supplier_id"] == alt
        ]

        return {

            "failed_supplier": failed_supplier,

            "recommended_supplier": alt,

            "risk_score": float(alt_row.iloc[0]["risk_score"]),

            "capacity": int(alt_row.iloc[0]["capacity"])
        }