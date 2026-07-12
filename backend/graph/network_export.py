import networkx as nx


def export_network(graph):

    nodes = []

    edges = []

    for node in graph.nodes():

        if node.startswith("S"):
            color = "#ef4444"

        elif node.startswith("W"):
            color = "#3b82f6"

        elif node.startswith("F"):
            color = "#22c55e"

        elif node.startswith("T"):
            color = "#f59e0b"

        else:
            color = "#8b5cf6"

        nodes.append({

            "id": node,

            "data": {
                "label": node
            },

            "position": {
                "x": 0,
                "y": 0
            },

            "style": {

                "background": color,

                "color": "white"

            }

        })

    for u, v in graph.edges():

        edges.append({

            "id": f"{u}-{v}",

            "source": u,

            "target": v

        })

    return {

        "nodes": nodes,

        "edges": edges

    }