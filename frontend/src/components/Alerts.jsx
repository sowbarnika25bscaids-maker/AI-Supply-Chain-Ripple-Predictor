function Alerts({ result }) {
  if (!result) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3 text-red-700">
        🚨 Live Alerts
      </h2>

      <div className="space-y-2">

        <p>
          🔴 <b>{result.detection.failed_node}</b> has failed.
        </p>

        <p>
          ⚠ Ripple spread to{" "}
          <b>{result.affected_nodes.length}</b> nodes.
        </p>

        <p>
          📈 Overall Risk :
          <b> {result.risk.overall_risk}%</b>
        </p>

        <p>
          🔄 Switching supplier to{" "}
          <b>{result.recovery.recommended_supplier}</b>
        </p>

      </div>
    </div>
  );
}

export default Alerts;