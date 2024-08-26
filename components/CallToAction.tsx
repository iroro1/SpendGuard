import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-black py-16 px-4 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Finances?
      </h2>
      <p className="mb-8 text-lg">
        Join thousands of users who are taking control of their financial
        future.
      </p>
      <Link href={"/onboarding"}>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
          Get started
        </button>
      </Link>
    </section>
  );
};

export default CallToAction;
