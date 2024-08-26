// components/HeroSection.tsx
import Link from "next/link";
// import { Button } from 'shadcn';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-hero-image min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Spend Guard
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Your path to smarter budgeting and investing.
        </p>
        <Link href={"/onboarding"}>
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
