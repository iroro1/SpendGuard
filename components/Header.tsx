import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-[80px] bg-black z-50 text-white flex items-center">
      <div className="w-[90%] max-w-[1440px] mx-auto py-2">
        <h2 className="text-2xl font-bold text-left text-[#fff]">
          Spend Guard
        </h2>
      </div>
    </div>
  );
};

export default Header;
