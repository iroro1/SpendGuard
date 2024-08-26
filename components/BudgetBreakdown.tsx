"use client";
import { capitalize, randomColor } from "@/lib/functions";
import React, { useEffect, useState } from "react";

const BudgetBreakdown = () => {
  // Example data for demonstration purposes
  const [generatedBudget, setGeneratedBudget] = useState<any>(null);
  const [data, setData] = useState<any>({});
  useEffect(() => {
    if (window !== undefined) {
      const storedData = localStorage.getItem("generatedBudget");
      const data = localStorage.getItem("data");
      if (storedData !== null) {
        setGeneratedBudget(JSON.parse(storedData));
        setData(JSON.parse(data || "{}"));
      }
    }
  }, [localStorage.getItem("generatedBudget")]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 border-b">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Budget Breakdown
        </h2>
        <h4 className="text-gray-800 -mt-4 bold">
          {capitalize(data?.focus)} Plan
        </h4>
      </div>
      <div className="space-y-4 mt-6">
        {generatedBudget?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start border-b border-gray-300 pb-2"
          >
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{
                  backgroundColor: randomColor(),
                }}
              ></div>
              <div className={`text-[${randomColor()}] font-semibold`}>
                {item.name}
              </div>
            </div>
            <div className="text-gray-700 ml-6 text-sm w-full flex flex-col gap-2">
              {item?.subcategories?.map((subItem: any, subIndex: number) => (
                <div
                  key={subIndex}
                  className="text-gray-700 flex justify-between gap-4  pr-8 items-center w-full"
                >
                  <span className="text-gray-900 font-semibold">
                    {subItem.name}
                  </span>
                  <span className="text-gray-800">
                    {data?.currency}{" "}
                    {Intl.NumberFormat().format(subItem.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetBreakdown;
