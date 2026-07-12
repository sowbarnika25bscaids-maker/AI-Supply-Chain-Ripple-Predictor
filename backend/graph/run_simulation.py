from build_graph import build_graph
from ripple_engine import RippleEngine

graph = build_graph()

engine = RippleEngine(graph)

result = engine.simulate("S1")

print("Ripple Simulation")
print("-----------------")

for item in result:
    print(item)