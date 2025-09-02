import React from "react";
import mobile from '../assets/mobile.png'
import light from '../assets/light.png'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="bg-[#0F5265] text-white px-6 sm:px-10 md:px-16 lg:px-20 py-12 lg:py-16 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side */}
        <div className="max-w-full lg:max-w-xl space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your AI-Powered Legal Assistant
          </h2>
          <p className="text-base sm:text-lg">
            Unlock Seamless Client Engagement
          </p>
          <p className="text-gray-200 text-sm sm:text-base">
            Welcome to Twinly.ai, where innovation meets legal excellence.
            Supercharge your online presence and client interactions with our
            cutting-edge AI bot designed exclusively for legal professionals.
          </p>
          <div className="flex ">

          
          <div>
              <img src={light} alt="" className="w-20" />
          </div>
         
          {/* Replace "Sales Cycle Trained" section with Slider */}
          <div className="-ml-4 sm:ml-6 w-72 sm:w-96 mt-5">
            <Slider {...settings}>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Sales Cycle Trained
                </h3>
                <p className="text-sm sm:text-base mt-1">
                  Streamline your client journey with AI-powered workflows. 
                  Ensure every interaction is efficient and personalized.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Client Conversion
                </h3>
                <p className="text-sm sm:text-base mt-1">
                  Convert leads into loyal clients with guided, seamless sales 
                  experiences tailored to your firm.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  End-to-End Experience
                </h3>
                <p className="text-sm sm:text-base mt-1">
                  From first contact to case closure, deliver a consistent and 
                  professional client experience every time.
                </p>
              </div>
            </Slider>
          </div>
</div>
          <button
            className="mt-4 sm:mt-6 bg-gradient-to-r from-[#F5D794] via-white to-[#F5D794] 
            hover:from-yellow-200 hover:to-yellow-200 text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-md 
            font-semibold shadow-md cursor-pointer text-sm sm:text-base"
          >
            Try scheduling
          </button>
        </div>

        {/* Right Side */}
        <div
          className="flex flex-col lg:flex-row bg-[#E8E8E8] w-full sm:w-[480px] md:w-[520px] lg:w-[560px] 
          h-auto sm:h-[500px] md:h-[560px] lg:h-[600px] gap-6 lg:gap-8 -mt-12 sm:-mt-16 lg:-mt-24 
          -mr-0 lg:-mr-10 rounded-3xl items-center justify-center px-4 py-6"
        >
          <img
            src={mobile}
            className="drop-shadow-2xl w-[280px] sm:w-[340px] md:w-[380px] h-auto sm:h-[500px] md:h-[564px] -ml-0 sm:-ml-4 md:-ml-8"
            alt="Mobile Illustration"
          />

          {/* Buttons Section */}
          <div className="flex flex-col justify-between items-center w-full lg:w-1/3 h-auto lg:h-full mt-4 lg:mt-0">
            <a href="/Demo">
              <button className="bg-[#0F5265] rounded-2xl text-white px-5 sm:px-6 py-2 sm:py-3 mb-4 cursor-pointer text-sm sm:text-base">
                Book Demo
              </button>
            </a>
            <div className="flex flex-col gap-3 sm:gap-4 whitespace-nowrap mb-4 lg:mb-10 mr-0 lg:mr-20 text-center lg:text-left">
              <p className="text-sm sm:text-base font-bold text-[#4D4D4D]">
                Explore the Latest Features
              </p>

              <button className="rounded-full bg-white shadow-xl text-[#0F5265] px-4 sm:px-6 py-2 sm:py-3 capitalize text-sm sm:text-base">
                🚀 elevate your practice
              </button>
              <button className="rounded-full bg-white shadow-xl text-[#0F5265] px-4 sm:px-6 py-2 sm:py-3 capitalize text-sm sm:text-base">
                🌐 Integration Made Easy
              </button>
              <button className="rounded-full bg-white shadow-xl text-[#0F5265] px-4 sm:px-6 py-2 sm:py-3 capitalize text-sm sm:text-base">
                🔒 secure and compliant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
