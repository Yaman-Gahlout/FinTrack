import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 1000 },
  { name: "Travel", value: 2000 },
  { name: "Shopping", value: 4000 },
  { name: "Bills", value: 3000 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

function SpendingBreakdown() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Spending Breakdown
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={90} label>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SpendingBreakdown;
