import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionCard from "./TransactionCard";
import { FiSearch, FiPlus } from "react-icons/fi";

function TransactionsSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [role, setRole] = useState("admin");
  const transactions = useSelector((state) => state.transaction.transactions);

  const navigate = useNavigate();
  const filtered = transactions
    .filter(
      (item) =>
        item.category.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "all" || item.type === filter),
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Transactions</h2>
          <p className="text-sm text-gray-400">Track your activity</p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="bg-gray-100 rounded-lg px-3 py-2 text-sm"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            className="bg-gray-100 rounded-lg px-3 py-2 text-sm"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="admin" selected>
              Admin
            </option>
          </select>

          {role === "admin" && (
            <button
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={() => navigate("/addTransaction")}
            >
              <FiPlus /> Add
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <TransactionCard key={item.id} item={item} role={role} />
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400 py-6">
            No transactions found
          </p>
        )}
      </div>
    </div>
  );
}

export default TransactionsSection;
