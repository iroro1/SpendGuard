import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      title="cta"
      className="relative bg-black py-16 px-4 text-center text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-900 opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
          Ready to Transform Your Finances?
        </h2>
        <p className="mb-8 text-lg font-medium">
          Join thousands of users who are taking control of their financial
          future.
        </p>
        <Link href={"/onboarding"}>
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full shadow-lg transform transition-transform hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
