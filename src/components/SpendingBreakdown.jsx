import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#ffc0cb",
];

function getColor(index) {
  return COLORS[index % COLORS.length];
}

function SpendingBreakdown() {
  const { transactions } = useSelector((state) => state.transaction);
  const data = transactions.reduce((acc, t) => {
    if (t.type === "expense") {
      const existing = acc.find((c) => c.name === t.category);
      if (existing) {
        existing.value += t.amount;
      } else {
        acc.push({ name: t.category, value: t.amount });
      }
    }
    return acc;
  }, []);
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
                <Cell key={index} fill={getColor(index)} />
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
