import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", balance: 40000 },
  { name: "February", balance: 30000 },
  { name: "March", balance: 25000 },
  { name: "April", balance: 40000 },
  { name: "May", balance: 35000 },
];

function BalanceTrend() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Balance Trend
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BalanceTrend;
