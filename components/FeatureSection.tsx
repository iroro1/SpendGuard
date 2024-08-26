import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-yellow-100 p-4 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1 0v-4h1m-6 0v4H4m6 4v4H8m0-4h1v4h1v-4h-1m0 0v4h-1v-4m6-4v-4h-1v4h-1m6-4h-1v4h-1v-4h1m0 0v4h1v-4m0 4h1v4h-1v-4zm-6-4V8h-1v4h1zm6 4v4h-1v-4h-1m-6-4v4h-1v-4h1zm6 4v4h-1v-4h-1v4h1v-4zM4 8h16V4H4v4z"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Smart Budgeting</h3>
          <p className="mb-4 text-gray-600">
            Optimize your spending and saving with AI-driven recommendations.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.5v.25A1.25 1.25 0 0013.25 22h3.5A1.25 1.25 0 0018 20.75V20.5a8 8 0 10-6 0zm0 0v.25A1.25 1.25 0 0010.75 22h-3.5A1.25 1.25 0 006 20.75V20.5"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Intuitive Design</h3>
          <p className="mb-4 text-gray-600">
            Enjoy a sleek, user-friendly interface that makes budgeting a
            breeze.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 p-4 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3H7v4m-1 1l-1 5v5a2 2 0 002 2h10a2 2 0 002-2v-5l-1-5m-6 1v10m0-10h4m-4 0H9m0 0h-.01"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Real-Time Insights</h3>
          <p className="mb-4 text-gray-600">
            Track your spending and savings with real-time updates and
            analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
