"use client";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import DashboardOverview from "@/components/DashboardOverview";
import Modal from "@/components/Modal";
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

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <header className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={handleGenerateNewBudget}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Generate New Budget
        </button>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
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
