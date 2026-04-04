import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaPlane, FaShoppingBag } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/slice/transaction.slice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function TransactionCard({ item, role }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getIcon = (category) => {
    switch (category) {
      case "Food":
        return <MdFastfood />;
      case "Travel":
        return <FaPlane />;
      case "Shopping":
        return <FaShoppingBag />;
      default:
        return <MdOutlineLibraryBooks />;
    }
  };

  const deleteHandler = () => {
    console.log("Deleting transaction:", item.id);
    dispatch(deleteTransaction(item.id));
    toast.success("Transaction deleted successfully");
    setOpenMenu(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          {getIcon(item.category)}
        </div>

        <div>
          <p className="font-semibold text-gray-800">{item.category}</p>
          <p className="text-xs text-gray-400">
            {new Date(item.date).toDateString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right flex flex-col gap-1 items-center">
          <p
            className={`font-bold ${
              item.type === "income" ? "text-green-600" : "text-red-500"
            }`}
          >
            ₹ {item.amount}
          </p>

          <span
            className={`text-xs px-2 py-1 rounded-lg ${
              item.type === "income"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }`}
          >
            {item.type}
          </span>
        </div>

        {role === "admin" && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiMoreVertical />
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-32 px-3 py-4 bg-white border border-gray-100 rounded-lg shadow-lg z-10 flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/editTransaction/${item.id}`)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm  bg-blue-500 rounded-lg text-white"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={deleteHandler}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm  bg-red-500 rounded-lg text-white"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
