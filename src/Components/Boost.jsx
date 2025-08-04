import React from "react";
import lawyer from "../assets/lawyer.png";
const Boost = () => {
  return (
    <section className="bg-[#D9D9D9]  -mt-40">
      <div className=" mx-auto flex justify-center  items-center gap-55">
        {/* Left Text Section */}
        <div className="">
          <h1 className="text-5xl font-semibold text-gray-800 mb-6 leading-snug mt-10">
            We boost your <br /> growth as a <br /> successful Lawyer.
          </h1>
          <button className="mt-6 bg-gradient-to-r from-[#0F5265] to-[#0F5265] text-white px-6 py-3 rounded-xl cursor-pointer shadow hover:opacity-90">
            Get Twinly now
          </button>
        </div>

        {/* Right Lawyer Cards */}
        <div className=" flex flex-col items-center gap-6 mt-40">
          <img src={lawyer} alt="" className="w-[700px] mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Boost;
