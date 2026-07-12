function ExecutiveDashboard({ result }) {

  if (!result) return null;

  return (

    <div className="grid md:grid-cols-4 gap-4 mb-8">

      <div className="bg-blue-600 text-white p-5 rounded-xl">
        <h3>Total Impact</h3>
        <h1 className="text-4xl">
          {result.affected_nodes.length}
        </h1>
      </div>

      <div className="bg-red-600 text-white p-5 rounded-xl">
        <h3>Risk</h3>
        <h1 className="text-4xl">
          {result.risk.overall_risk}%
        </h1>
      </div>

      <div className="bg-green-600 text-white p-5 rounded-xl">
        <h3>Recovery</h3>
        <h1 className="text-3xl">
          {result.recovery.recommended_supplier}
        </h1>
      </div>

      <div className="bg-purple-600 text-white p-5 rounded-xl">
        <h3>Severity</h3>
        <h1 className="text-3xl">
          {result.detection.severity}
        </h1>
      </div>

    </div>

  );

}

export default ExecutiveDashboard;