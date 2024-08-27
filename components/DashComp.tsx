"use client";
import { downloadReport } from "@/lib/downloadReport";
import { calculateBudget } from "@/lib/functions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileDownload, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import BudgetBreakdown from "./BudgetBreakdown";
import DashboardOverview from "./DashboardOverview";
import Modal from "./Modal";

const DashComp: React.FC = () => {
  const params = useSearchParams();

  useEffect(() => {
    const budgetParam = params.get("budget");
    if (budgetParam !== null) {
      setBudget(JSON.parse(budgetParam));
    }
  }, [params]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [budget, setBudget] = useState<any>([]);
  const router = useRouter();

  const handleGenerateNewBudget = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGenerateBudget = (income: number, focus: string) => {
    const budget = calculateBudget(income, focus);
    setBudget(budget);
  };

  const todaysDateInFormat = () => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${day}, ${dayOfMonth} ${month} ${year}`;
  };

  const logOut = () => {
    router.replace("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md rounded-b-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <button
            onClick={handleGenerateNewBudget}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaPlusCircle className="mr-2" />
            Generate New Budget
          </button>
          <button
            onClick={() => downloadReport(todaysDateInFormat().toString())}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaFileDownload className="mr-2" />
            Download Report
          </button>
          <button
            onClick={logOut}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-300 flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Log Out
          </button>
        </div>
      </header>

      <main id="dashboard" className="max-w-6xl mx-auto space-y-8 ">
        <section className="bg-white  rounded-lg shadow-lg">
          <DashboardOverview
            date={todaysDateInFormat()}
            budget={budget}
            appData={{
              focus: params.get("focus"),
              income: params.get("income"),
              currency: params.get("currency"),
              country: params.get("country"),
            }}
          />
        </section>

        <section className="bg-white  rounded-lg shadow-lg">
          <BudgetBreakdown
            budget={budget}
            appData={{
              focus: params.get("focus"),
              income: params.get("income"),
              currency: params.get("currency"),
              country: params.get("country"),
            }}
          />
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

export default DashComp;
