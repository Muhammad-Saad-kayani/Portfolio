import { SKILLS } from "@/Constant/Index";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="Skills"
      className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row"
    >
      <div className="text-center text-2xl font-bold uppercase tracking-[1rem] text-blue-500 pb-20">
        skills
      </div>
      <ul className="flex flex-col gap-10 md:grid md:grid-cols-2 xl:flex xl:flex-row xl:gap-12 cursor-pointer">
        {SKILLS.map((skill) => (
          <SkillItem
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;

const SkillItem = ({ title, icon, description }) => {
  return (
    <li
      className="relative flex w-full flex-1 flex-col items-center shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)]
      rounded-2xl p-10 hover:bg-blue-500 group duration-[1200ms] transition"
    >
      <div className="rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:bg-black">
        <Image 
        src={icon} 
        alt="map" 
        width={28} 
        height={28} 
        />
        </div>
        <h3 className="text-[20px] font-[500] lg:text-[22px] lg:font-[600] mt-6 capitalize group-hover:text-white
        ">{title}</h3>
        <p className="text-gray-400 mt-4 group-hover:text-white ">{description}</p>
      
    </li>
  );
};
