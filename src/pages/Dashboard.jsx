import React from "react";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ChartsSection from "../components/CardSection";

function Dashboard() {
  return (
    <div className="w-full h-full flex">
      <Navbar />
      <div className="flex flex-col gap-3 p-6 w-full mt-16">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
        <div className="w-full flex flex-col gap-5">
          <SummaryCard />
          <ChartsSection />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
