function KPI({ result }) {

  if (!result) return null;

  const risk = result.risk.overall_risk;

  const affected = result.affected_nodes.length;

  const supplier = result.recovery.recommended_supplier;

  const recoveryTime =
    affected * 4 + 8;

  const estimatedLoss =
    affected * 125000;

  return (

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">

      <div className="bg-red-500 text-white rounded-xl p-5 shadow">

        <p className="text-sm">
          Overall Risk
        </p>

        <h2 className="text-3xl font-bold">
          {risk}%
        </h2>

      </div>

      <div className="bg-orange-500 text-white rounded-xl p-5 shadow">

        <p className="text-sm">
          Impacted Nodes
        </p>

        <h2 className="text-3xl font-bold">
          {affected}
        </h2>

      </div>

      <div className="bg-green-600 text-white rounded-xl p-5 shadow">

        <p className="text-sm">
          Recovery Supplier
        </p>

        <h2 className="text-xl font-bold">
          {supplier}
        </h2>

      </div>

      <div className="bg-blue-600 text-white rounded-xl p-5 shadow">

        <p className="text-sm">
          Recovery Time
        </p>

        <h2 className="text-3xl font-bold">
          {recoveryTime} hrs
        </h2>

      </div>

      <div className="bg-purple-600 text-white rounded-xl p-5 shadow">

        <p className="text-sm">
          Estimated Loss
        </p>

        <h2 className="text-2xl font-bold">
          ₹{estimatedLoss.toLocaleString()}
        </h2>

      </div>

    </div>

  );

}

export default KPI;