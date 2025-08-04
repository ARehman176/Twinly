import React from "react";
import mobile from '../assets/mobile.png'
import light from '../assets/light.png'
import scroll from '../assets/scroll.png'
// import { Icon } from '@iconify/react';

export default function HeroSection() {
  return (
    <div className="bg-[#0F5265] text-white  lg:px-20 py-16 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <div className="max-w-xl space-y-6 ">
          <h2 className="text-4xl  font-bold text-white">
            Your AI-Powered Legal Assistant
          </h2>
          <p className="text-lg">
            Unlock Seamless Client Engagement
          </p>
          <p className="text-gray-200 ">
            Welcome to Twinly.ai, where innovation meets legal excellence.
            Supercharge your online presence and client interactions with our
            cutting-edge AI bot designed exclusively for legal professionals.
          </p>

          <div className=" text-white    flex items-start gap-4 ">
            <div className="text-yellow-500 text-2xl">
                <img src={light} alt=""className=" w-28  -ml-5 -mt-2"/>
            </div>
            <div >
              <h3 className="font-semibold text-lg -ml-6 mt-2">Sales Cycle Trained </h3>
              <p className=" -ml-6">
              Never miss a potential client, and convert leads into loyal clintele with a 
              seamlessly guided sales journey.
              </p>
              <img src={scroll} alt="" className="mt-4 -ml-6"/>
            </div>
          </div>

         <button className="mt-6 bg-gradient-to-r from-[#F5D794] via-white to-[#F5D794] hover:from-yellow-200 hover:to-yellow-200
          text-black px-5 py-2 rounded-md font-semibold shadow-md cursor-pointer">
  Try scheduling
</button>

        </div>

        {/* Right Side */}
       <div className='flex bg-[#E8E8E8] w-[560px] h-[600px] gap-8 -mt-24 -mr-10 rounded-3xl items-center justify-center px-4 py-6 '>
  <img
    src={mobile}
    className='drop-shadow-2xl w-[380px] h-[564px] -ml-8'
    alt="Mobile Illustration"
  />

  {/* Buttons Section */}
  <div className='flex flex-col justify-between items-center w-1/3 h-full mt-0'>
  <a href="/Demo">
    <button className='bg-[#0F5265] rounded-2xl text-white px-6 py-3 mb-4 -mt-4 cursor-pointer'>
      Book Demo
    </button>
</a>
    <div className='flex flex-col gap-4 whitespace-nowrap mb-10 mr-20'>
      <p className='text-sm font-bold text-[#4D4D4D] text-center'>
        Explore the Latest Features
      </p>

      <button className='rounded-full bg-white shadow-xl text-[#0F5265] px-6 py-3 capitalize'>
        🚀 elevate your practice
      </button>
      <button className='rounded-full bg-white shadow-xl text-[#0F5265] px-6 py-3 capitalize'>
        🌐 Integration Made Easy
      </button>
      <button className='rounded-full bg-white shadow-xl text-[#0F5265] px-6 py-3 capitalize'>
        🔒 secure and compliant
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
