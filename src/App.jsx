import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import Navbar from "./components/Navbar";
import AddTransactionForm from "./components/AddTransactionForm";
import EditTransactionForm from "./components/EditTransactionForm";

function App() {
  return (
    <div className=" w-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route
          path="/transactions"
          element={
            <div className="px-6 h-screen w-screen pt-20">
              <Transactions />
            </div>
          }
        ></Route>
        <Route
          path="/insights"
          element={
            <div className="px-6 h-screen w-screen pt-20">
              <Insights />
            </div>
          }
        ></Route>
        <Route path="/addTransaction" element={<AddTransactionForm />}></Route>
        <Route
          path="/editTransaction/:id"
          element={<EditTransactionForm />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
