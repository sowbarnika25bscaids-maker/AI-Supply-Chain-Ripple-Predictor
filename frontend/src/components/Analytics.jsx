import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics({ result }) {
  if (!result) return null;

  const riskData = [
    {
      name: "Overall Risk",
      value: result.risk.overall_risk,
    },
  ];

  const levelData = [];

  result.affected_nodes.forEach((node) => {
    levelData.push({
      name: node.node,
      value: node.level + 1,
    });
  });

  const colors = [
    "#2563eb",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#84cc16",
    "#f97316",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="font-bold text-xl mb-4">
          📊 Overall Risk
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={riskData}>
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="font-bold text-xl mb-4">
          🥧 Ripple Distribution
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={levelData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {levelData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Analytics;