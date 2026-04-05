import { useSelector } from "react-redux";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";

function InsightsSection() {
  const { transactions } = useSelector((state) => state.transaction);

  let totalIncome = 0;
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((t) => {
    const amount = Number(t.amount);

    if (t.type === "income") {
      totalIncome += amount;
    } else {
      totalExpense += amount;
      categoryMap[t.category] = (categoryMap[t.category] || 0) + amount;
    }
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b,
        )
      : "N/A";

  const highestAmount = categoryMap[highestCategory] || 0;

  const savings = totalIncome - totalExpense;

  const expenseRatio =
    totalIncome > 0 ? ((totalExpense / totalIncome) * 100).toFixed(1) : 0;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition">
          <div className="flex justify-between items-center">
            <h3 className="text-sm opacity-80">Top Spending</h3>
            <MdInsights className="text-xl" />
          </div>

          <p className="text-xl font-bold mt-3">{highestCategory}</p>

          <p className="text-sm opacity-80 mt-1">₹ {highestAmount}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition">
          <div className="flex justify-between items-center">
            <h3 className="text-sm opacity-80">Savings</h3>

            {savings >= 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          </div>

          <p className="text-xl font-bold mt-3">₹ {savings}</p>

          <p className="text-sm opacity-80 mt-1">
            {savings >= 0 ? "Great! You're saving money" : "Overspending alert"}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
          <h3 className="text-sm text-gray-500">Expense Ratio</h3>

          <p className="text-xl font-bold mt-2 text-gray-800">
            {expenseRatio}%
          </p>

          <div className="w-full bg-gray-200 h-2 rounded mt-3">
            <div
              className="bg-red-500 h-2 rounded transition-all duration-500"
              style={{ width: `${expenseRatio}%` }}
            />
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Percentage of income spent
          </p>
        </div>
        <div className="bg-linear-to-r from-yellow-300 to-yellow-500 rounded-2xl p-5 shadow-lg hover:shadow-xl transition col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-md text-white">Smart Tip</h3>

          <p className="mt-3 text-gray-700">
            {highestCategory !== "N/A"
              ? `You are spending most on ${highestCategory}. Try optimizing this category to increase your savings and improve financial stability.`
              : "Start adding transactions to unlock personalized insights."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsSection;
