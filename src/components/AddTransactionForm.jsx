import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../redux/slice/transaction.slice";

function AddTransactionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "income",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) {
      alert("Please fill all fields");
      return;
    }

    console.log("Submitted:", form);

    setForm({
      amount: "",
      category: "",
      type: "income",
      date: "",
    });
    const newTransaction = {
      ...form,
      amount: Number(form.amount),
      id: Date.now(),
    };
    dispatch(addTransaction(newTransaction));
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex p-3 items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-gray-800">Add Transaction</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:ring-2 ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Food, Travel..."
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:ring-2 ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Type</label>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, type: "income" })}
                className={`flex-1 py-2 rounded-lg ${
                  form.type === "income"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Income
              </button>

              <button
                type="button"
                onClick={() => setForm({ ...form, type: "expense" })}
                className={`flex-1 py-2 rounded-lg ${
                  form.type === "expense"
                    ? "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Expense
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:ring-2 ring-blue-400 outline-none"
            />
          </div>

          <div className="flex gap-3 pt-3">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Add Transaction
            </button>

            <button
              type="button"
              className="flex-1 bg-gray-200 py-3 rounded-lg"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionForm;
