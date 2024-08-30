import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative  bg-cover bg-center bg-hero-image max-h-[903px] flex flex-col items-center justify-center text-center">
      <div className="relative z-10 px-4 text-[#101928]  pt-[40px] w-[90%] mx-auto">
        <h1
          title="main-heading"
          className="text-[34px] md:text-[60px] md:text-6xl font-[700]  mb-6 max-w-[909px] mx-auto"
        >
          A smarter way to budgeting, saving, and investing.
        </h1>
        <p
          role="sub-heading"
          className="text-[18px] md:text-[24px] text-[#344054] mb-8 font-[400]"
        >
          Simplify budgeting, saving, and investing to help you reach your
          financial goals.
        </p>
        {/* <p
          role="description"
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          Whether you&apos;re looking to save more, invest wisely, or simply
          manage your expenses better, Spend Guard has you covered. Customize
          your financial plan to match your goals and take control of your
          future.
        </p> */}
        <Link href={"/onboarding"}>
          <button
            title="get-started"
            className="bg-[#1671D9] text-[#fff] rounded-[8px] mx-auto text-[16px] font-[600] w-[241px] h-[56px] flex justify-center items-center  hover:bg-[#1671D9]/80 hover:scale-105 transition duration-300 transform"
          >
            Get Started
          </button>
        </Link>
      </div>

      <div
        id="hero-boxes"
        className="relative w-[90%]  mx-auto mt-[80px] max-w-[1280px] min-h-[159px] md:h-[399px]"
      >
        {/* <Image
          src={"/heroFull.png"}
          sizes="100vw"
          alt="hero image"
          width={0}
          height={0}
          className="min-w-[140%] md:block left-[-20%] block min-h-[174px] md:w-full md:h-full absolute"
        /> */}
        <Image
          src={"/hero.png"}
          sizes="100vw"
          alt="hero image"
          width={0}
          height={0}
          className="min-h-[150px]  min-w-full absolute"
        />
        {/* <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md  flex-1">
          <h3 className="text-2xl font-semibold mb-4">Smart Budgeting</h3>
          <p>
            Leverage AI-driven insights to create a budget that aligns with your
            lifestyle and financial goals.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md  flex-1">
          <h3 className="text-2xl font-semibold mb-4">Customizable Plans</h3>
          <p>
            Choose from savings-heavy, investment-heavy, or balanced plans to
            tailor your financial strategy.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md  flex-1">
          <h3 className="text-2xl font-semibold mb-4">Real-Time Insights</h3>
          <p>
            Track your spending, savings, and investments with up-to-the-minute
            data and analytics.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
