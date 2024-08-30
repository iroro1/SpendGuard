import Link from "next/link";
import React from "react";

const StepsSection = () => {
  const steps = [
    "Visit the link",
    "Enter basic details of your finances to tailor your experience based on your focus.",
    "See Ai driven metrics and result based on the information you provided",
    "Get a copy of your result , for easy reference for future use.",
  ];

  return (
    <section
      title="steps-section"
      className="py-20 px-8 bg-[#ffffff] text-gray-900"
    >
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-4xl font-extrabold max-w-[697px] leading-9 md:leading-[62px] md:text-[48px] text-[#101928] mb-16">
          Get started with Spend Guard in 4 easy steps
        </h2>

        <div>
          <div className="hidden  lg:flex flex-col lg:flex-row justify-between ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col w-[280px] h-[80px]  bg-white overflow-visible   transition-transform transform hover:scale-105"
              >
                {index === 0 ? (
                  <div className="min-w-[130%] h-[8px] bg-[#1671D9]" />
                ) : (
                  <div className="min-w-[130%] h-[8px] bg-[#E4E7EC]" />
                )}
                {index === 0 ? (
                  <div className="flex justify-center w-[60px] h-[60px] border-[3px] bg-white border-[#0D5EBA] rounded-full items-center absolute -top-[28px]">
                    <h3 className="text-[24px] font-[700] text-[#0D5EBA]">
                      {index + 1}
                    </h3>
                  </div>
                ) : (
                  <div className="flex justify-center w-[60px] h-[60px] border-[3px] bg-white border-[#D0D5DD] rounded-full items-center absolute -top-[28px]">
                    <h3 className="text-[24px] font-[700] text-[#475367]">
                      {index + 1}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-[24px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex relative flex-col pl-[40px] lg:pl-0 w-[280px] p-2 bg-white   transition-transform transform hover:scale-105"
              >
                {index === 0 ? (
                  <div className=" lg:hidden absolute left-[5px]   min-w-[8px] min-h-[115%] bg-[#1671D9]" />
                ) : (
                  <div className="lg:hidden absolute left-[5px]   min-w-[8px] min-h-[115%] bg-[#E4E7EC]" />
                )}
                {index === 0 ? (
                  <div className="flex lg:hidden justify-center w-[48px] h-[48px] border-[3px] bg-white border-[#0D5EBA] rounded-full items-center absolute -top-[0px] left-[-18px]">
                    <h3 className="text-[24px] font-[700] text-[#0D5EBA]">
                      {index + 1}
                    </h3>
                  </div>
                ) : (
                  <div className="flex lg:hidden justify-center w-[48px] h-[48px] border-[3px] bg-white border-[#D0D5DD] rounded-full items-center absolute -top-[0px] left-[-18px]">
                    <h3 className="text-[24px] font-[700] text-[#475367]">
                      {index + 1}
                    </h3>
                  </div>
                )}
                {index === 3 && (
                  <div className="flex  lg:hidden justify-center w-[32px] h-[32px] border-[3px] bg-white border-[#D0D5DD] rounded-full items-center absolute top-[115%] left-[-8px]">
                    <h3 className="text-[24px] font-[700] text-[#475367]"></h3>
                  </div>
                )}

                {index === 0 && (
                  <div>
                    <h3 className="text-[24px] font-[700] text-[#101928]">
                      Select Get Started
                    </h3>
                    <Link href={"/onboarding"}>
                      <button
                        title="get-started"
                        className="bg-[#1671D9] mt-[20px] text-[#fff] rounded-[8px]  text-[16px] font-[600] w-[241px] h-[56px] flex justify-center items-center  hover:bg-[#1671D9]/80 hover:scale-105 transition duration-300 transform"
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                )}
                {index === 1 && (
                  <div>
                    <h3 className="text-[24px] font-[700] text-[#101928]">
                      Fill out the form
                    </h3>
                    <p>{step}</p>
                  </div>
                )}
                {index === 2 && (
                  <div>
                    <h3 className="text-[24px] font-[700] text-[#101928]">
                      See your budget
                    </h3>
                    <p>{step}</p>
                  </div>
                )}
                {index === 3 && (
                  <div>
                    <h3 className="text-[24px] font-[700] text-[#101928]">
                      Download the budget plan
                    </h3>
                    <p>{step}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
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
        </div> */}
      </div>
    </section>
  );
};

export default StepsSection;
