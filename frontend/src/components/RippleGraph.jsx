import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

function RippleGraph({ nodes, edges }) {

  const animatedEdges = edges.map((edge) => ({
    ...edge,
    animated: true,
    style: {
      stroke: "#ef4444",
      strokeWidth: 3,
    },
  }));

  const coloredNodes = nodes.map((node, index) => {

    let color = "#3b82f6";

    if (index === 0)
      color = "#ef4444";

    else if (index === nodes.length - 1)
      color = "#22c55e";

    else
      color = "#f59e0b";

    return {

      ...node,

      style: {
        background: color,
        color: "white",
        borderRadius: 10,
        border: "2px solid white",
        padding: 10,
        width: 170,
        textAlign: "center",
        fontWeight: "bold",
      },

    };

  });

  return (

    <div
      style={{
        height: 500,
        width: "100%",
      }}
    >

      <ReactFlow
        nodes={coloredNodes}
        edges={animatedEdges}
        fitView
      >

        <Background />

        <Controls />

      </ReactFlow>

    </div>

  );

}

export default RippleGraph;