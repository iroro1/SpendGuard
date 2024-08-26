import React from "react";

const StepsSection = () => {
  const steps = [
    "Visit the link",
    "Get started",
    "Fill out the form",
    "See your proposed budget",
    "Download to your device and plan your expenses",
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-16">
          Get Started in 5 Easy Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold rounded-full mb-6">
                {index + 1}
              </div>
              <p className="text-lg font-semibold text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
