import { navLinks } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-6 py-2 lg:px-20 3xl:px-0 relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="font-extrabold uppercase relative text-xl">
          <span className="text-black">Sa</span>
          <span className="text-blue-700">ad</span>
          <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-blue-700 rounded-full"></span>
        </Link>
        <div className='hidden lg:flex gap-6'>
            {navLinks.map((link)=>{
              return <Link href={link.url} key={link.id} className="flex items-center justify-center text-[15px] 
              font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer
              transition-all duration-300">
                {link.label}
              </Link>
            })}
          </div>
          <Image 
            src="menu.svg"
            alt="menu"
            width={28}
            height={28}
            className="inline-block cursor-pointer lg:hidden"
          />
      </div>
    </nav>
  );
};

export default Navbar;
