import SummaryCard from "../components/SummaryCard";
import ChartsSection from "../components/CardSection";
import TransactionsSection from "./Transactions";
import Insights from "./Insights";

function Dashboard() {
  return (
    <div className="w-full h-full flex bg-gray-100">
      <div className="flex flex-col gap-3 p-6 w-full mt-16">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
        <div className="w-full flex flex-col gap-5">
          <SummaryCard />
          <ChartsSection />
          <TransactionsSection />
          <Insights />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
