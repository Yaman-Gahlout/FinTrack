import { useSelector } from "react-redux";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";

function Insights() {
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

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-600 text-sm">Highest Spending</h3>
            <MdInsights className="text-blue-500 text-xl" />
          </div>

          <p className="text-lg font-semibold mt-2 text-gray-800">
            {highestCategory}
          </p>

          <p className="text-sm text-gray-400 mt-1">₹ {highestAmount}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-600 text-sm">Income vs Expense</h3>

            {savings >= 0 ? (
              <FaArrowTrendUp className="text-green-500" />
            ) : (
              <FaArrowTrendDown className="text-red-500" />
            )}
          </div>

          <p className="text-lg font-semibold mt-2 text-gray-800">
            ₹ {savings}
          </p>

          <p className="text-sm text-gray-400 mt-1">
            {savings >= 0
              ? "You are saving money"
              : "Spending is higher than income"}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-gray-600 text-sm">Smart Tip</h3>

          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            {highestCategory !== "N/A"
              ? `Try reducing your spending on ${highestCategory} to improve savings.`
              : "Start tracking your expenses to get insights."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
