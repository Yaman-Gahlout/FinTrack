import BalanceTrend from "./BalanceTrend";
import SpendingBreakdown from "./SpendingBreakdown";

function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
      <BalanceTrend />
      <SpendingBreakdown />
    </div>
  );
}

export default ChartsSection;
