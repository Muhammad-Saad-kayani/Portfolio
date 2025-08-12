import React from "react";
import { PORTFOLIO } from "@/Constant/Index";
import Image from "next/image";
import Button from "./Button";

const Portfolio = () => {
  return (
    <section id="Portfolio"
      className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row bg-[#f7f7f7]"
    >
      <div className="text-center text-2xl font-bold uppercase tracking-[1rem] text-blue-500 pb-20">
        portfolio
      </div>
      <ul className="mt-12 grid gap-14 w-[100%] m-auto md:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO.map((portfolio) => (
          <PortfolioItem
            key={portfolio.title}
            imgURL={portfolio.imgURL}
            title={portfolio.title}
            description={portfolio.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;

const PortfolioItem = ({ title, imgURL, description }) => {
  return (
    <li>
    <div className="relative flex w-[100%] flex-col rounded-2xl border overflow-hidden group" >
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={imgURL} alt={title} width={444} height={444} />
      </div>
    
      <div className="px-6 py-4">
        <h3 className="text-[20px] font-[500] lg:font-bold my-4 capitalize">{title}</h3>
        <p className="text-gray-30 mb-4">{description}</p>
        <div className="flex gap-1">
          <Button 
              type= "button"
              title= "Read more"
              icon= "/more.svg"
              variant= "border-black bg-black px-6 py-3 text-white hover:bg-black"
            />
            <Button 
              type= "button"
              title= "View Code"
              icon= "/github.svg"
              variant= "border-black bg-white px-6 py-3 text-black"
            />
        </div>
      </div>
      </div>
    </li>
  );
};
