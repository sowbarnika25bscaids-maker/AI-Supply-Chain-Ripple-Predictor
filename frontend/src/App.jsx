import { useState, useEffect } from "react";
import axios from "axios";
import RippleGraph from "./components/RippleGraph";
import Analytics from "./components/Analytics";
import SupplyChainNetwork from "./components/SupplyChainNetwork";
import SupplierMap from "./components/SupplierMap";
import KPI from "./components/KPI";
import Alerts from "./components/Alerts";
import ConfidenceMeter from "./components/ConfidenceMeter";
import EventFeed from "./components/EventFeed";
import RiskForecast from "./components/RiskForecast";
import AIChat from "./components/AIChat";
import ExecutiveDashboard from "./components/ExecutiveDashboard";
import ScenarioComparison from "./components/ScenarioComparison";
import Timeline from "./components/Timeline";
import Loader from "./components/Loader";

function App() {

  const [event, setEvent] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
const [recovered,setRecovered] = useState(false);
const [loading,setLoading] = useState(false);
  const [network, setNetwork] = useState({
    nodes: [],
    edges: [],
  });
useEffect(() => {
    const loadNetwork = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API}/network`
        );
        setNetwork(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadNetwork();
  }, []);
  const simulate = async () => {

    if (!event.trim()) {
  alert("Please enter a disruption event.");
  return;
}
  setLoading(true);

  setRecovered(false);

  try {

    const res = await axios.post(
      `${import.meta.env.VITE_API}/simulate`,
      {
        event,
      }
    );

    setResult(res.data);

    setHistory((prev) => [
      res.data,
      ...prev,
    ]);

  } catch (err) {

    alert("Backend is not running!");

    console.error(err);

  } finally {

    setLoading(false);

  }

};
  const downloadReport = async () => {
    if (!event.trim()) {
  alert("Please enter a disruption event first.");
  return;
}
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/download-report`,
        {
          event,
        },
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        "Incident_Report.pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert("Unable to download report");
      console.error(err);
    }
  };
  let graphNodes = [];
  let graphEdges = [];
  if (result) {
    graphNodes = result.affected_nodes.map((n, index) => ({
      id: n.node,
      position: {
        x: 250,
        y: index * 90,
      },
      data: {
        label: n.node,
      },
    }));
    for (let i = 0; i < graphNodes.length - 1; i++) {
      graphEdges.push({
        id: `e${i}`,
        source: graphNodes[i].id,
        target: graphNodes[i + 1].id,
      });
    }
  }
  const highlightedNetwork = {
  nodes: network.nodes.map((node) => {
    const affected = result?.affected_nodes.find(
      (n) => n.node === node.id
    );
    if (affected) {
      return {
        ...node,
        style: {
          ...node.style,
          background: "#ef4444",
          color: "white",
          border: "4px solid yellow",
        },
      };
    }
    return node;
  }),
  edges: network.edges,
};
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          AI Supply Chain Ripple Predictor
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4">
          <input
            className="flex-1 border rounded-lg p-3"
            placeholder="Example : Flood at Supplier S3"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              onClick={simulate}
              className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
            >
              {loading ? "Simulating..." : "Simulate"}
            </button>
            <button
              onClick={downloadReport}
              className="bg-green-600 text-white px-6 rounded-lg hover:bg-green-700"
            >
              📄 Download Report
            </button>

          </div>
{loading && <Loader />}
        </div>

        {result && (
<>

    <div className="animate-fade-in">
  <KPI result={result} />
</div>
   <div className="animate-fade-in">
  <ExecutiveDashboard result={result} />
</div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Detection */}

            <div className="bg-white shadow rounded-xl p-5">

              <h2 className="text-xl font-bold mb-3">
                🚨 Detection
              </h2>

              <p>
                <b>Event :</b> {result.detection.event}
              </p>

              <p>
                <b>Failed Node :</b> {result.detection.failed_node}
              </p>

              <p>
                <b>Severity :</b> {result.detection.severity}
              </p>

            </div>

            {/* Recovery */}

            <div className="bg-white shadow rounded-xl p-5">

              <h2 className="text-xl font-bold mb-3">
                📦 Recovery
              </h2>

              <p>
                <b>Alternate Supplier :</b>{" "}
                {result.recovery.recommended_supplier}
              </p>

              <p>
                <b>Risk Score :</b> {result.recovery.risk_score}
              </p>

              <p>
                <b>Capacity :</b> {result.recovery.capacity}
              </p>

              <button
className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
onClick={()=>setRecovered(true)}
>
⚡ Apply Recovery
</button>

            </div>

            {/* Overall Risk */}

            <div className="bg-white shadow rounded-xl p-5">

              <h2 className="text-xl font-bold mb-3">
                📊 Overall Risk
              </h2>

             <h1 className="text-5xl font-bold text-red-600">

{
recovered
?
Math.max(result.risk.overall_risk-40,0)
:
result.risk.overall_risk
}

%

</h1>

              <p className="mt-3">

Level :

<span
className={`ml-3 px-3 py-1 rounded-full text-white

${
result.risk.risk_level==="High"

?"bg-red-600"

:result.risk.risk_level==="Medium"

?"bg-yellow-500"

:"bg-green-600"

}`}>

{result.risk.risk_level}

</span>

</p>

            </div>

            {/* Complete Supply Chain Network */}

            <div className="bg-white shadow rounded-xl p-5 md:col-span-2">

              <h2 className="text-xl font-bold mb-3">
                🌍 Complete Supply Chain Network
              </h2>
              <div className="flex gap-4 text-sm mb-4 flex-wrap">

  <span>🔴 Failed Supplier</span>
  <span>🟠 Warehouse</span>
  <span>🟡 Factory</span>
  <span>🔵 Transport Hub</span>
  <span>🟣 Customer</span>
</div>

              <SupplyChainNetwork
    nodes={highlightedNetwork.nodes}
    edges={highlightedNetwork.edges}
/>
            </div>
          {/* Ripple Effect Graph */}
            <div className="bg-white shadow rounded-xl p-5 md:col-span-2">
              <h2 className="text-xl font-bold mb-3">
                🌊 Ripple Effect Graph
              </h2>
             <RippleGraph
                nodes={graphNodes}
                edges={graphEdges}
              />

            </div>
{/* Supplier Location Map */}

<div className="bg-white shadow rounded-xl p-5 md:col-span-2">

  <h2 className="text-xl font-bold mb-3">
    🗺️ Supplier Location Map
  </h2>

  <SupplierMap
    affectedSupplier={result.detection.failed_node}
    recommendedSupplier={result.recovery.recommended_supplier}
/>

</div>
            {/* AI Recommendation */}

            <div className="bg-white shadow rounded-xl p-5 md:col-span-2">

              <h2 className="text-xl font-bold mb-3">
                🤖 AI Recommendation
              </h2>

              <pre className="whitespace-pre-wrap">
                {result.communication}
              </pre>

            </div>

            {/* Alerts */}
<Alerts result={result} />

            <ConfidenceMeter result={result} />

            {/* Analytics */}

            <div className="md:col-span-2">

              <Analytics
                result={result}
              />

              <ScenarioComparison 
  history={history}
/>
            </div>
            <EventFeed history={history} />

<Timeline 
 history={history}
/>
            <RiskForecast result={result} />
            <AIChat result={result}/>        
            {/* Simulation History */}
            <div className="bg-white shadow rounded-xl p-5 md:col-span-2">
              <h2 className="text-xl font-bold mb-3">
                📜 Simulation History
              </h2>
              {history.length === 0 ? (
                <p>No simulations yet.</p>
              ) : (
                history.map((item, index) => (
                  <div
                    key={index}
                    className="border-b py-3"
                  >
                    <p>
                      <b>{item.detection.event}</b>
                    </p>

                    <p>
                      Failed Node : {item.detection.failed_node}
                    </p>

                    <p>
                      Risk : {item.risk.risk_level}
                    </p>
                  </div>                            
                ))
              )}
            </div>
            <div className="md:col-span-2 text-center text-gray-500 mt-10 mb-5">

AI Supply Chain Ripple Predictor

<br/>

Built with React • FastAPI • Gemini AI • NetworkX

</div>
          </div>
          </>
        )}
      </div>
    </div>
  )
}
export default App;