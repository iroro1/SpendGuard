"use client";
import React, { useEffect, useState } from "react";
import { FaDollarSign, FaTag, FaMoneyCheck } from "react-icons/fa";
import { capitalize, randomColor } from "@/lib/functions";

interface BudgetBreakdownProps {
  budget: any;
  appData: {
    focus: string | null;
    income: string | null;
    currency: string | null;
    country: string | null;
  };
}
const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({
  budget,
  appData,
}: any) => {
  const [generatedBudget, setGeneratedBudget] = useState<any>(budget);
  const [data, setData] = useState<any>(appData);

  useEffect(() => {
    setGeneratedBudget(budget);
    setData(appData);
  }, [budget, appData]);

  return (
    generatedBudget.length > 0 && (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Budget Breakdown
          </h2>
          <h4 className="text-gray-600 text-lg font-medium">
            {capitalize(data?.focus)} Plan
          </h4>
        </div>
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {generatedBudget?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col border-b border-gray-300 pb-4"
            >
              <div className="flex items-center mb-2">
                <div
                  className="w-6 h-6 rounded-full mr-3 flex items-center justify-center"
                  style={{
                    backgroundColor: randomColor(index),
                    color: "#fff",
                  }}
                >
                  <FaDollarSign className="text-xl" />
                </div>
                <div
                  className="text-lg font-semibold"
                  style={{ color: randomColor(index) }}
                >
                  {item.name}
                </div>
              </div>
              <div className="text-gray-700 text-sm flex flex-col gap-2">
                {item?.subcategories?.map((subItem: any, subIndex: number) => (
                  <div
                    key={subIndex}
                    className="flex justify-between items-center w-full pr-4"
                  >
                    <span className="text-gray-900 font-semibold flex items-center gap-2">
                      <FaTag className="text-gray-600" />
                      {subItem.name}
                    </span>
                    <span className="text-gray-800">
                      {data?.currency}{" "}
                      {Intl.NumberFormat().format(subItem.amount.toFixed(2))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default BudgetBreakdown;
