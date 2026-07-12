import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function RiskForecast({ result }) {

  if (!result) return null;

  const base = result.risk.overall_risk;

  const data = [
    { day: "Day 1", risk: base },
    { day: "Day 2", risk: Math.max(base - 5, 10) },
    { day: "Day 3", risk: Math.max(base - 10, 10) },
    { day: "Day 4", risk: Math.max(base - 15, 10) },
    { day: "Day 5", risk: Math.max(base - 20, 10) },
    { day: "Day 6", risk: Math.max(base - 25, 10) },
    { day: "Day 7", risk: Math.max(base - 30, 10) },
  ];

  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="text-xl font-bold mb-4">
        📈 7-Day Risk Forecast
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="risk"
            stroke="#ef4444"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default RiskForecast;