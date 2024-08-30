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
    <div className="bg-gradient-radial pt-[80px] from-[#c3f0fb] to-[#c3f0fb]/40 min-h-screen text-white">
      <Header />
      <main className="min-h-full">
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
