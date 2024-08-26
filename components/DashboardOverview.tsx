"use client";
import React, { useEffect, useState } from "react";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaPiggyBank,
  FaRegCalendarAlt,
} from "react-icons/fa";

const DashboardOverview = ({ budget, appData, date }: any) => {
  const [data, setData] = useState<any>(appData);
  const [overviewData, setOverviewData] = useState<any>(null);

  useEffect(() => {
    loadOverview(budget, appData);
  }, [appData, budget]);

  const loadOverview = (budget: any, data: any) => {
    let totalIncome = data?.income || 0,
      totalExpenses = 0,
      totalSavings = 0;

    const savingsCategory = budget.find((b: any) => b.name === "Savings");
    if (savingsCategory) {
      savingsCategory.subcategories.forEach((sub: any) => {
        totalSavings += sub.amount;
      });
    }
    totalExpenses = totalIncome - totalSavings;
    setOverviewData({ totalIncome, totalExpenses, totalSavings });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mt-4 md:mt-0 text-gray-700 flex items-center">
        <FaRegCalendarAlt className="mr-2 text-gray-500" />
        <p>{date}</p>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Income Card */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center">
          <FaMoneyBillWave className="text-blue-600 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-medium text-gray-700">Total Income</h3>
            <p className="text-xl font-bold text-gray-900">
              {data?.currency}{" "}
              {Intl.NumberFormat().format(overviewData?.totalIncome)}
            </p>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center">
          <FaChartLine className="text-red-600 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-medium text-gray-700">
              Total Expenses
            </h3>
            <p className="text-xl font-bold text-gray-900">
              {data?.currency}{" "}
              {Intl.NumberFormat().format(overviewData?.totalExpenses)}
            </p>
          </div>
        </div>

        {/* Net Savings Card */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center">
          <FaPiggyBank className="text-green-600 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-medium text-gray-700">Net Savings</h3>
            <p className="text-xl font-bold text-gray-900">
              {data?.currency}{" "}
              {Intl.NumberFormat().format(overviewData?.totalSavings)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
