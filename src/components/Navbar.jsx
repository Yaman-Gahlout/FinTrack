import { useState } from "react";
import { SiCashapp } from "react-icons/si";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { tab: "Dashboard", icon: <FiHome />, link: "/" },
    {
      tab: "Transactions",
      icon: <MdOutlineLibraryBooks />,
      link: "/transactions",
    },
    { tab: "Insights", icon: <CgInsights />, link: "/insights" },
  ];

  const activeTab = location.pathname;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <SiCashapp size={28} className="text-blue-500" />
            <h1
              className="text-xl cursor-pointer font-bold text-blue-500"
              onClick={() => navigate("/")}
            >
              FinTrack
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className={`flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md transition ${
                  activeTab === item.link
                    ? "bg-blue-600 text-gray-200"
                    : "text-gray-900"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.tab}</span>
              </div>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-600 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-3.5 border-b border-gray-300">
          <div></div>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsOpen(false);
                navigate(item.link);
              }}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${
                activeTab === item.link
                  ? "bg-blue-600 text-gray-200"
                  : "text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.tab}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
