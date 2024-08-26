import CallToAction from "@/components/CallToAction";
import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;
