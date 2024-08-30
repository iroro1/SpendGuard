import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src="/logo.png" alt="logo" width={50} height={39} />
      <h1 className="text-[24px] text-[#101928] font-[800]">Spend Guard</h1>
    </div>
  );
};

export default Logo;
