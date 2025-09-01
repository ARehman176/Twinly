import React from "react";
import lawyer from "../assets/lawyer.png";

const Boost = () => {
  return (
    <section className="bg-[#D9D9D9] -mt-40">
      <div className=" mx-auto flex flex-col lg:flex-row justify-around  gap-50 px-4 sm:px-6 lg:px-8">
        
        {/* Left Text Section */}
        <div className="text-center lg:text-left mt-10 lg:mt-30 -ml-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
            We boost your <br className="hidden sm:block" /> 
            growth as a <br className="hidden sm:block" /> 
            successful Lawyer.
          </h1>
          <button className="mt-6 bg-gradient-to-r from-[#0F5265] to-[#0F5265] text-white px-6 sm:px-4 py-3 sm:py-2 rounded-xl cursor-pointer shadow hover:opacity-90 text-sm sm:text-base md:text-lg">
            Get Twinly now
          </button>
        </div>

        {/* Right Lawyer Image */}
        <div className="flex justify-center items-center mt-10 lg:mt-0">
          <img 
            src={lawyer} 
            alt="Lawyer" 
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain mt-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Boost;
