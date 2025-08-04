import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
const Blogs = () => {
  return (
    <section className="bg-[#D9D9D9] py-10 ">
      <div className=" flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Content */}
        <div className="flex-1  -mt-35 ml-26">
          <h2 className="text-3xl font-semibold text-[#2E2D2D]">Blog & News</h2>
          <p className="text-[#2E2D2D] mt-4">
            Are you looking for ways to increase conversions but <br /> having a
            hard time turning visits into sales?
          </p>

          <div className="flex flex-col items-start space-y-4">
            <button className="text-sm text-[#2E2D2D] underline hover:text-gray-900 mt-5">
              Explore more →
            </button>

            <button className="bg-gradient-to-r from-[#0F5265] to-[#0F5265] text-white px-6 py-2 rounded-lg shadow hover:opacity-90 mt-5 cursor-pointer -ml-2">
              Schedule a call
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="flex  ">
          <img
            src={img1}
            alt="Person 1"
            className=" w-[370px] h-94 object-cover ml-12 "
          />
          <img
            src={img2}
            alt="Person 2"
            className="w-[370px] h-94 object-cover "
          />
        </div>
      </div>
      <div className="flex ">
        <img src={img3} alt="" className="w-[400px]" />
        <img src={img4} alt="" className="w-[400px]" />
        <img src={img5} alt="" className="w-[400px]" />
        <img src={img6} alt="" className="w-[400px]" />
      </div>
    </section>
  );
};

export default Blogs;
