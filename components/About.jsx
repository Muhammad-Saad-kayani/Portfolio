import React from "react";
import Button from "./Button";
import Image from "next/image";

const About = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center text-2xl font-bold uppercase tracking-[1rem] text-blue-500 pb-20">
        about
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flex items-center justify-center flex-col m-auto">
          <p className="mb-8">
            <span className="font-extrabold">I am a motivated</span> and detail-oriented Software Engineer
            with hands-on experience in front-end web development, specializing
            in the MERN stack. Currently focused on mastering modern front-end
            technologies, including HTML, CSS, JavaScript, React.js, Next.js,
            and Tailwind CSS. Passionate about building responsive,
            user-friendly web applications with clean and maintainable code.
          </p>
          <Button 
              type= "button"
              title= "Read more"
              icon= "/more.svg"
              variant= "border-black bg-black px-6 py-3 text-white hover:bg-black"
            />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image 
            src='/about.png'
            alt="about"
            height={333}
            width={333}
            className="w-auto rounded-full shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
