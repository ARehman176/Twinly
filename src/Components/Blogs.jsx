import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";

const Blogs = () => {
  return (
    <section className="bg-[#D9D9D9] py-10 px-0 sm:px-0 md:px-0 lg:px-0">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Left Side Content */}
        <div className="flex-1 px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-[#2E2D2D]">
            Blog & News
          </h2>
          <p className="text-[#2E2D2D] mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Are you looking for ways to increase conversions but <br /> having a
            hard time turning visits into sales?
          </p>

        <div className="flex flex-col items-start gap-4 mt-5">
  <button className="text-sm sm:text-base text-[#2E2D2D] underline hover:text-gray-900 whitespace-nowrap">
    Explore more →
  </button>

  <button className="bg-gradient-to-r from-[#0F5265] to-[#0F5265] text-white px-4 sm:px-6 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer ">
    Schedule a call
  </button>
</div>

        </div>

        {/* Right Side Images */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-auto mt-6 md:mt-0">
          <img
            src={img1}
            alt="Blog 1"
            className="w-1/2 md:w-auto md:flex-1 object-cover"
          />
          <img
            src={img2}
            alt="Blog 2"
            className="w-1/2 md:w-auto md:flex-1 object-cover"
          />
        </div>
      </div>

      {/* Bottom Row Images */}
      <div className="flex flex-wrap ">
        {[img3, img4, img5, img6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Blog ${index + 3}`}
            className="w-1/2 sm:w-1/2 md:w-1/4 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
