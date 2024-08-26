"use client";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import DashboardOverview from "@/components/DashboardOverview";
import Modal from "@/components/Modal";
import { downloadReport } from "@/lib/downloadReport";
import { calculateBudget } from "@/lib/functions";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("data");
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    }
  }, []);

  const handleGenerateNewBudget = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGenerateBudget = (income: number, focus: string) => {
    const budget = calculateBudget(income, focus);
    console.log(budget);
    localStorage.setItem("generatedBudget", JSON.stringify(budget));
  };
  const todaysDateInFormat = () => {
    //  todays date in the format Wed, 17 Nov 2022
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${day}, ${dayOfMonth} ${month} ${year}`;
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <header className="max-w-6xl mx-auto mb-8 md:flex md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-700">{todaysDateInFormat()}</p>
        </div>
        <div className="flex justify-start md:justify-end gap-3 mt-3 md:mt-0">
          <button
            onClick={handleGenerateNewBudget}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Generate New Budget
          </button>
          <button
            onClick={downloadReport}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <main id="dashboard" className="max-w-6xl mx-auto space-y-8">
        {/* Download report button */}

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <DashboardOverview />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <BudgetBreakdown />
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onGenerate={handleGenerateBudget}
      />
    </div>
  );
};

export default Dashboard;
