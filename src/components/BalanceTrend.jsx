import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BalanceTrend() {
  const data = [
    { name: "Nov", balance: 35000 },
    { name: "Dec", balance: 45000 },
    { name: "Jan", balance: 40000 },
    { name: "Feb", balance: 30000 },
    { name: "Mar", balance: 45000 },
    { name: "Apr", balance: useSelector((state) => state.transaction.balance) },
    ,
  ];
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
