import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

function SupplyChainNetwork({

    nodes,

    edges

}) {

    return (

        <div style={{height:"650px"}}>

            <ReactFlow

                nodes={nodes}

                edges={edges}

                fitView

            />

        </div>

    );

}

export default SupplyChainNetwork;