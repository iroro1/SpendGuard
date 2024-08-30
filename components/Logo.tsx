import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ color = "101928" }) => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 items-center">
        <Image src="/logo.png" alt="logo" width={50} height={39} />
        <h1 className={`text-[24px] text-[#${color}] font-[800]`}>
          Spend Guard
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
