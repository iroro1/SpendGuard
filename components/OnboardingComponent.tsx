import React from "react";
import OnboardingForm from "./OnboardingForm";

const OnboardingComponent = () => {
  return (
    <div className="max-w-lg w-full text-center">
      <h1 className="text-4xl font-extrabold mb-8">Welcome to Spend Guard</h1>
      <p className="text-lg mb-12">
        Let&apos;s get started by setting up your preferences to tailor your
        budgeting experience.
      </p>
      <div className="bg-white text-black p-10 rounded-xl shadow-2xl mx-4 md:mx-0">
        <OnboardingForm />
      </div>
    </div>
  );
};

export default OnboardingComponent;
