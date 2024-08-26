import React from "react";
import { DollarSign, Layout, BarChart } from "lucide-react";

const features = [
  {
    title: "Smart Budgeting",
    description:
      "Optimize your spending and saving with AI-driven recommendations.",
    icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
    bgColor: "bg-yellow-50/10",
    borderColor: "border-yellow-400",
  },
  {
    title: "Intuitive Design",
    description:
      "Enjoy a sleek, user-friendly interface that makes budgeting a breeze.",
    icon: <Layout className="w-10 h-10 text-blue-500" />,
    bgColor: "bg-blue-50/10",
    borderColor: "border-blue-400",
  },
  {
    title: "Real-Time Insights",
    description:
      "Track your spending and savings with real-time updates and analytics.",
    icon: <BarChart className="w-10 h-10 text-green-500" />,
    bgColor: "bg-green-50/10",
    borderColor: "border-green-400",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 rounded-3xl shadow-lg transition-transform transform hover:scale-105 border-t-4 ${feature.bgColor} ${feature.borderColor}`}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-md">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
