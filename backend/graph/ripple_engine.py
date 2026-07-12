import networkx as nx

class RippleEngine:
    def __init__(self, graph):
        self.graph = graph

    def simulate(self, failed_node):
        affected = []
        visited = set()
        queue = [(failed_node, 0)]

        while queue:
            node, level = queue.pop(0)

            if node in visited:
                continue

            visited.add(node)

            affected.append({
                "node": node,
                "level": level
            })

            for neighbor in self.graph.successors(node):
                queue.append((neighbor, level + 1))

        return affected