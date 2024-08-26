"use client";
import CallToAction from "@/components/CallToAction";
import FeatureSection from "@/components/FeatureSection";
import StepsSection from "@/components/StepsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 min-h-screen text-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <StepsSection />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
