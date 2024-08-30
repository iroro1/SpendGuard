import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full min-h-[80px]  z-50 flex items-center ">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <h1 className="text-3xl font-bold tracking-wide ">
          <Logo />
        </h1>
      </div>
    </header>
  );
};

export default Header;
