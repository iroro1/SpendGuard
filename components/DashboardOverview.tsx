"use client";
import React from "react";

const DashboardOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example of financial summary cards */}
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Total Income</h3>
          <p className="text-xl font-bold text-gray-900">₦300,000</p>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Total Expenses</h3>
          <p className="text-xl font-bold text-gray-900">₦150,000</p>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">Net Savings</h3>
          <p className="text-xl font-bold text-gray-900">₦50,000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
