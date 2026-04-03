import { useSelector } from "react-redux";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaArrowCircleUp } from "react-icons/fa";

function SummaryCard() {
  const { balance, income, expenses } = useSelector(
    (state) => state.transaction,
  );

  const summaryData = [
    {
      title: "Monthly Income",
      amount: income,
      icon: <FaArrowCircleUp size={22} />,
      bg: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      title: "Total Expenses",
      amount: expenses,
      icon: <FaCircleArrowDown size={22} />,
      bg: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      title: "Total Balance",
      amount: balance,
      icon: <MdOutlineAccountBalanceWallet size={22} />,
      bg: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} rounded-2xl p-5 shadow-lg text-white flex items-center justify-between hover:scale-[1.02] transition duration-300`}
        >
          <div>
            <p className="text-sm opacity-80">{item.title}</p>

            <h2 className="text-2xl font-bold mt-1">
              ₹ {item.amount.toLocaleString()}
            </h2>
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCard;
