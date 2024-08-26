import OnboardingForm from "@/components/OnboardingForm";
import React from "react";

const Onboarding = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Spend Guard</h1>
        <p className="text-lg mb-12">
          Let's get started by setting up your preferences.
        </p>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg">
          <OnboardingForm />
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
