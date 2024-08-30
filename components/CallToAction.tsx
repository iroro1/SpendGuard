import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      title="cta"
      className="relative min-h-[350px]  py-16 px-4 text-center text-[#F9FAFB]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#101928]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1080px] mx-auto">
        <h2 className="text-[28px] md:text-[56px] font-[700] w-[343px] mx-auto  mb-4 leading-[35px]">
          Ready to Transform Your Finances?
        </h2>
        {/* <p className="mb-8 text-lg font-medium">
          Join thousands of users who are taking control of their financial
          future.
        </p> */}
        <Link href={"/onboarding"}>
          <button
            title="get-started"
            className="bg-[#1671D9] text-[#fff] rounded-[8px] mx-auto text-[16px] mt-[32px] font-[600] w-[241px] h-[46px] flex justify-center items-center  hover:bg-[#1671D9]/80 hover:scale-105 transition duration-300 transform"
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
