import networkx as nx
from ripple_engine import RippleEngine

# Sample graph
G = nx.DiGraph()

G.add_edge("S1", "W1")
G.add_edge("W1", "F1")
G.add_edge("F1", "T1")
G.add_edge("T1", "C1")

engine = RippleEngine(G)

result = engine.simulate("S1")

print("Affected Nodes:")
for node in result:
    print(node)