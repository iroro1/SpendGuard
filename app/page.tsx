"use client";
import CallToAction from "@/components/CallToAction";
import FeatureSection from "@/components/FeatureSection";
import StepsSection from "@/components/StepsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [scroll, setScroll] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-radial pt-[80px] from-[#E3EFFC] to-[#E3EFFC]/40 min-h-screen text-white">
      <Header scroll={scroll} />
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
