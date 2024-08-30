import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Smart Budgeting",
    description:
      "Leverage AI-driven insights to create a budget that aligns with your lifestyle and financial goals.",
    icon: (
      <Image
        src={"/feature1.png"}
        alt={"smart-budgeting"}
        className="w-[80px] h-[80px] text-yellow-500"
        width={0}
        height={0}
        sizes="100vw"
      />
    ),
    bgColor: "bg-yellow-50/10",
    borderColor: "border-yellow-400",
  },
  {
    title: "Customizable Plans",
    description:
      "Choose from savings-heavy, investment-heavy, or balanced plans to tailor your financial strategy.",
    icon: (
      <Image
        src={"/feature2.png"}
        alt={"customizable-plans"}
        className="w-[80px] h-[80px] text-blue-500"
        width={0}
        height={0}
        sizes="100vw"
      />
    ),
    bgColor: "bg-blue-50/10",
    borderColor: "border-blue-400",
  },
  {
    title: "Real-Time Insights",
    description:
      "Track your spending and savings with real-time updates and analytics.",
    icon: (
      <Image
        src={"/feature3.png"}
        alt={"real-time-insights"}
        className="w-[80px] h-[80px] text-green-500"
        width={0}
        height={0}
        sizes="100vw"
      />
    ),
    bgColor: "bg-green-50/10",
    borderColor: "border-green-400",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section
      title="feature-section"
      className="py-24 px-8 min-h-[698px] bg-[#f6faff] text-black"
    >
      <h2 className="text-3xl font-bold mb-8 text-center max-w-[690px] mx-auto md:text-[48px] md:leading-[64px]">
        Spend Guard is your all-in-one Financial Tool
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row gap-[24px] mt-[60px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full md:w-[341px] flex flex-col items-start text-center p-8 rounded-[12px] shadow-sm transition-transform transform hover:scale-105 border bg-[#F1F7FE] border-[#E4E7EC]`}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-[24px] mt-[19px] font-semibold text-[#111827]">
              {feature.title}
            </h3>
            <p className="text-[#4B5563] text-[16px] text-md mt-[12px] text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[100px] py-[80px] max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-center">
        <div className="max-w-[484px]">
          <h4 className="text-[#667185] text-[16px] font-[600]">
            FOR YOUR FUTURE
          </h4>
          <h2 className="mt-[12px] text-[#101928] text-[36px] leading-9 md:leading-[62px] font-[700] md:text-[48px]">
            Better financial management
          </h2>
          <p className="mt-[16px] text-[#101928] text-[18px]">
            Manage effectively your finances with spend guard budgeting while
            exploring other features to give you inform decisions on your
            finances
          </p>
        </div>
        <div className="w-[478px] h-[419px] overflow-hidden bg-[#f0edfc] flex items-center justify-center mt-[50px]">
          <Image
            src={"/feature4.png"}
            alt={"hero-image"}
            width={0}
            height={0}
            sizes="100vw"
            className="min-h-[419px] min-w-full  md:mt-0 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
