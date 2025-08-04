import React from 'react';

const Client = () => {
  return (
    <div className="bg-[#F5D794] py-10 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 ml-19">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-[#3F3E3C]">
            Upgrade your client conversations with Twinly.
          </h2>
          <p className=" text-[#3F3E3C] mt-1">
            Affordable plans. Made for law firms.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mr-20">
          <button className="bg-white text-[#051D23] font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </button>
          <button className="bg-[#0F5265] text-white font-medium px-5 py-2 rounded-lg hover:bg-[#063b49] transition">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
