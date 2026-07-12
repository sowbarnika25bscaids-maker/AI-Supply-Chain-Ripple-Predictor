from faker import Faker
import pandas as pd
import random
import os

fake = Faker("en_IN")

DATA_FOLDER = os.path.join(os.path.dirname(__file__), "..", "data")
os.makedirs(DATA_FOLDER, exist_ok=True)

# -------------------------
# Suppliers
# -------------------------
suppliers = []
for i in range(1, 11):
    suppliers.append({
        "supplier_id": f"S{i}",
        "supplier_name": fake.company(),
        "city": fake.city(),
        "capacity": random.randint(500, 3000),
        "risk_score": round(random.uniform(0.1, 0.9), 2),
        "alternate_supplier": f"S{random.randint(1,10)}"
    })

# -------------------------
# Warehouses
# -------------------------
warehouses = []
for i in range(1, 6):
    warehouses.append({
        "warehouse_id": f"W{i}",
        "city": fake.city(),
        "storage_capacity": random.randint(5000, 20000)
    })

# -------------------------
# Factories
# -------------------------
factories = []
for i in range(1, 5):
    factories.append({
        "factory_id": f"F{i}",
        "city": fake.city(),
        "production_capacity": random.randint(1000, 5000)
    })

# -------------------------
# Transport Hubs
# -------------------------
transport_hubs = []
for i in range(1, 4):
    transport_hubs.append({
        "hub_id": f"T{i}",
        "city": fake.city(),
        "hub_capacity": random.randint(1000, 8000)
    })

# -------------------------
# Customers
# -------------------------
customers = []
for i in range(1, 16):
    customers.append({
        "customer_id": f"C{i}",
        "customer_name": fake.company(),
        "city": fake.city(),
        "priority": random.choice(["High", "Medium", "Low"])
    })

# -------------------------
# Connections
# -------------------------
connections = []

for i in range(1, 11):
    connections.append({
        "source": f"S{i}",
        "target": f"W{random.randint(1,5)}",
        "dependency_weight": round(random.uniform(0.5,1.0),2),
        "lead_time": random.randint(1,5)
    })

for i in range(1,6):
    connections.append({
        "source": f"W{i}",
        "target": f"F{random.randint(1,4)}",
        "dependency_weight": round(random.uniform(0.5,1.0),2),
        "lead_time": random.randint(1,5)
    })

for i in range(1,5):
    connections.append({
        "source": f"F{i}",
        "target": f"T{random.randint(1,3)}",
        "dependency_weight": round(random.uniform(0.5,1.0),2),
        "lead_time": random.randint(1,5)
    })

for i in range(1,4):
    for _ in range(5):
        connections.append({
            "source": f"T{i}",
            "target": f"C{random.randint(1,15)}",
            "dependency_weight": round(random.uniform(0.5,1.0),2),
            "lead_time": random.randint(1,5)
        })

# -------------------------
# Historical Disruptions
# -------------------------
historical = []

events = ["Flood", "Strike", "Port Congestion", "Fire", "Machine Failure"]

for i in range(1,11):
    historical.append({
        "event_id": i,
        "affected_supplier": f"S{random.randint(1,10)}",
        "event": random.choice(events),
        "delay_days": random.randint(1,10),
        "impact_level": random.choice(["Low","Medium","High"])
    })

# -------------------------
# Save CSV
# -------------------------
pd.DataFrame(suppliers).to_csv(os.path.join(DATA_FOLDER,"suppliers.csv"),index=False)
pd.DataFrame(warehouses).to_csv(os.path.join(DATA_FOLDER,"warehouses.csv"),index=False)
pd.DataFrame(factories).to_csv(os.path.join(DATA_FOLDER,"factories.csv"),index=False)
pd.DataFrame(transport_hubs).to_csv(os.path.join(DATA_FOLDER,"transport_hubs.csv"),index=False)
pd.DataFrame(customers).to_csv(os.path.join(DATA_FOLDER,"customers.csv"),index=False)
pd.DataFrame(connections).to_csv(os.path.join(DATA_FOLDER,"connections.csv"),index=False)
pd.DataFrame(historical).to_csv(os.path.join(DATA_FOLDER,"historical_disruptions.csv"),index=False)

print("All datasets generated successfully!")