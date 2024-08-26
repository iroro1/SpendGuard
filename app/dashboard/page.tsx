"use client";
import DashComp from "@/components/DashComp";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <DashComp />
      </Suspense>
    </div>
  );
};

export default Dashboard;
