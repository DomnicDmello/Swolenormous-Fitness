import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen gap-10 flex flex-col justify-center items-center text-center max-w-[800px] w-full mx-auto p-4">
      <div>
        <p>IT'S TIME TO GET</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          SWOLE<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <button className="px-8 py-4 rounded-md border-2 border-blue-400 border-solid bg-slate-950 blueShadow duration-200">Accept & Begin</button>
    </div>
  );
};

export default Hero;
