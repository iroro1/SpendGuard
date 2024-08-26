import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-hero-image min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to Spend Guard
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Your ultimate tool for smarter budgeting, saving, and investing.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Whether you&apos;re looking to save more, invest wisely, or simply
          manage your expenses better, Spend Guard has you covered. Customize
          your financial plan to match your goals and take control of your
          future.
        </p>
        <Link href={"/onboarding"}>
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition duration-300 transform">
            Get Started
          </button>
        </Link>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row mt-16 space-y-8 md:space-y-0 md:space-x-8 max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-white flex-1">
          <h3 className="text-2xl font-semibold mb-4">Smart Budgeting</h3>
          <p>
            Leverage AI-driven insights to create a budget that aligns with your
            lifestyle and financial goals.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-white flex-1">
          <h3 className="text-2xl font-semibold mb-4">Customizable Plans</h3>
          <p>
            Choose from savings-heavy, investment-heavy, or balanced plans to
            tailor your financial strategy.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-white flex-1">
          <h3 className="text-2xl font-semibold mb-4">Real-Time Insights</h3>
          <p>
            Track your spending, savings, and investments with up-to-the-minute
            data and analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
