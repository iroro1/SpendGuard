"use client";
import React, { useEffect, useState } from "react";

const DashboardOverview = ({ budget, appData }: any) => {
  const [data, setData] = useState<any>(appData);
  const [overviewData, setOverviewData] = useState<any>(null);
  useEffect(() => {
    loadOverview(budget, appData);
  }, [appData, budget]);

  const loadOverview = (budget: any, data: any) => {
    let totalIncome = data?.income || 0,
      totalExpenses = 0,
      totalSavings = 0;

    // totalSavings =
    const bgtFilter = budget.filter((b: any) => {
      if (b.name === "Savings") {
        return b;
      }
    });
    bgtFilter[0]?.subcategories.map((sub: any) => {
      totalSavings += sub.amount;
    });
    totalExpenses = totalIncome - totalSavings;
    setOverviewData({ totalIncome, totalExpenses, totalSavings });
  };
  console.log(overviewData);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example of financial summary cards */}
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Total Income</h3>
          <p className="text-xl font-bold text-gray-900">
            {data?.currency}{" "}
            {Intl.NumberFormat().format(overviewData?.totalIncome)}{" "}
          </p>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Total Expenses</h3>
          <p className="text-xl font-bold text-gray-900">
            {data?.currency}{" "}
            {Intl.NumberFormat().format(overviewData?.totalExpenses)}{" "}
          </p>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Net Savings</h3>
          <p className="text-xl font-bold text-gray-900">
            {data?.currency}{" "}
            {Intl.NumberFormat().format(overviewData?.totalSavings)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
