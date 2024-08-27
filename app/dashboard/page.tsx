"use client";
import DashComp from "@/components/DashComp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-[100px] bg-gray-100 py-10 px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <DashComp />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
