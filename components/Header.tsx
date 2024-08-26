import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full min-h-[80px] bg-black z-50 text-white flex items-center shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Spend Guard
        </h1>
      </div>
    </header>
  );
};

export default Header;
