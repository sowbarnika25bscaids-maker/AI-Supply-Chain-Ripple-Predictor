import os
import pandas as pd
import networkx as nx

DATA_FOLDER = os.path.join(os.path.dirname(__file__), "..", "data")

def build_graph():
    G = nx.DiGraph()

    suppliers = pd.read_csv(os.path.join(DATA_FOLDER, "suppliers.csv"))
    warehouses = pd.read_csv(os.path.join(DATA_FOLDER, "warehouses.csv"))
    factories = pd.read_csv(os.path.join(DATA_FOLDER, "factories.csv"))
    transport_hubs = pd.read_csv(os.path.join(DATA_FOLDER, "transport_hubs.csv"))
    customers = pd.read_csv(os.path.join(DATA_FOLDER, "customers.csv"))
    connections = pd.read_csv(os.path.join(DATA_FOLDER, "connections.csv"))

    for _, row in suppliers.iterrows():
        G.add_node(row["supplier_id"], type="Supplier")

    for _, row in warehouses.iterrows():
        G.add_node(row["warehouse_id"], type="Warehouse")

    for _, row in factories.iterrows():
        G.add_node(row["factory_id"], type="Factory")

    for _, row in transport_hubs.iterrows():
        G.add_node(row["hub_id"], type="TransportHub")

    for _, row in customers.iterrows():
        G.add_node(row["customer_id"], type="Customer")

    for _, row in connections.iterrows():
        G.add_edge(
            row["source"],
            row["target"],
            dependency_weight=row["dependency_weight"],
            lead_time=row["lead_time"]
        )

    return G


if __name__ == "__main__":
    graph = build_graph()
    print(f"Nodes: {graph.number_of_nodes()}")
    print(f"Edges: {graph.number_of_edges()}")