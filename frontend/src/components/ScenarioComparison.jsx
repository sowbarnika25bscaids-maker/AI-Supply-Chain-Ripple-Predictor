function ScenarioComparison({ history }) {

  if (history.length < 2) {

    return (
      <div className="bg-white shadow rounded-xl p-5 md:col-span-2">
        <h2 className="text-xl font-bold mb-3">
          📈 Scenario Comparison
        </h2>

        <p>
          Run at least 2 simulations to compare results.
        </p>
      </div>
    );

  }

  const latest = history[0];
  const previous = history[1];

  return (

    <div className="bg-white shadow rounded-xl p-5 md:col-span-2">

      <h2 className="text-xl font-bold mb-4">
        📈 Scenario Comparison
      </h2>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-2">Metric</th>
            <th className="border p-2">Latest</th>
            <th className="border p-2">Previous</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td className="border p-2">Supplier</td>

            <td className="border p-2">
              {latest.detection.failed_node}
            </td>

            <td className="border p-2">
              {previous.detection.failed_node}
            </td>

          </tr>

          <tr>

            <td className="border p-2">Risk</td>

            <td className="border p-2">
              {latest.risk.overall_risk}%
            </td>

            <td className="border p-2">
              {previous.risk.overall_risk}%
            </td>

          </tr>

          <tr>

            <td className="border p-2">Severity</td>

            <td className="border p-2">
              {latest.detection.severity}
            </td>

            <td className="border p-2">
              {previous.detection.severity}
            </td>

          </tr>

          <tr>

            <td className="border p-2">Recovery</td>

            <td className="border p-2">
              {latest.recovery.recommended_supplier}
            </td>

            <td className="border p-2">
              {previous.recovery.recommended_supplier}
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default ScenarioComparison;