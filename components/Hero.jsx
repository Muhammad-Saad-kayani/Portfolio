"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col justify-center items-center 
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row"
    >
      <span
        className="mx-auto max-w-[1440px] absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full
      shadow-lg blur-[7rem] -z-10"
      ></span>
      {/* left */}
      <div className="relative z-20 flex flex-1 flex-col pt-16 gap-2">
        <h4 className="font-bold">Assalam U Alikum,</h4>
        <h1 className="text-5xl font-bold lg:font-extrabold relative">
          I'm Saad Kayani
        </h1>
        <h2 className="font-bold lg:font-bold text-[1.8rem] capitalize">
          A {""}
          <span>
            <Typewriter
              words={[
                "Student",
                "FrontEnd Devloper",
                "Software Engineer",
                "Programmer",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-[16px] font-[400] max-w-[555px] my-3">
          I am a motivated and detail-oriented Software Engineer with hands-on
          experience in front-end web development, specializing in the MERN
          stack. Currently focused on mastering modern front-end technologies,
          including HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS.
        </p>
        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {
              Array(5).fill(1).map(( _ , index )=>(
            <Image 
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
              className="w-auto"
            />
              ))
            } 
          </div>
          <p className="font-bold lg:font-bold">100+  
          <span className="text-[16px] font-[400] lg:text-[16px] lg:font-[600]"> Excellent Reviews</span> 
          </p>
        </div>
        <div className="flex gap-1 pt-6">
            <Button 
              type= "button"
              title= "Download CV"
              icon= "/download.svg"
              variant= "border-black bg-black px-6 py-3 text-white transition-all"
            />
            <Button 
              type= "button"
              title= "Contact me"
              icon= "/arrow-right.svg"
              variant= "border-black bg-white px-6 py-3 text-gray-900"
            />
        </div>
      </div>
      <div className="flex flex-1 xl:flex xl:items-center xl:justify-end">
            <Image 
              src='/bg.png'
              alt='bg'
              width={500}
              height={500}
            />
      </div>
    </section>
  );
};

export default Hero;
