import React from "react";
import men from "../assets/men.png"; // replace with actual image path
import twinly from "../assets/twinly.svg";
import { Icon } from "@iconify/react";

const feature = () => {
  return (
    <div className="bg-[#0b4d5e] text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Navigation & Demo Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
          <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/blogs">Blog</a>
        </div>
        <div>
          <a href="/Demo">
            <button className="bg-white rounded-2xl text-black px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-200 transition">
              Book Demo
            </button>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
        {/* Left - Image and Quote */}
        <div className="bg-white text-black rounded-lg p-6 w-full md:w-1/3 flex flex-col shadow-lg">
          <img
            src={twinly} // Logo
            alt="Twinly Logo"
            className="mb-4 sm:mb-6 w-24 sm:w-28"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
            Unlock the <br /> potential<br /> within you
          </h2>
          <img
            src={men}
            alt="Business Person"
            className="mt-auto w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right - Text and Pricing */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            The Perfect Plan for Your Needs
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-full md:max-w-2xl leading-relaxed">
            Embark on a transformative legal journey with Twinly.ai – sign up now for our
            30-day free trial. Experience the power of an always-on virtual assistant,
            streamlined lead management, and cost-efficient AI innovation. Unleash the
            potential of your legal practice risk-free – your future awaits with Twinly.ai
          </p>

          <div className="bg-white text-black rounded-lg flex flex-col md:flex-row items-start md:items-stretch justify-between gap-6 shadow-xl p-4 md:p-6">
            {/* Pricing Box */}
            <div className="bg-[#F5D794] p-6 md:p-10 w-full md:w-1/3 text-center rounded-md flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Premium PRO</h3>
              <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#0b4d5e] mb-1">$8</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-700 mb-4">Per SQL (sales-qualified lead)</p>
              <button className="bg-[#0b4d5e] text-white px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-[#083c49] transition">
                Get Started
              </button>
            </div>

            {/* Features List */}
            <div className="w-full md:w-2/3 space-y-3">
              <p className="font-medium text-gray-800 mt-4 md:mt-8 text-sm sm:text-base">
                Access these features when you get this pricing package for your business.
              </p>
              <div className="text-gray-700 space-y-3 mb-4 md:mb-8 text-sm sm:text-base">
                <p className="flex items-start gap-3">
                  <Icon icon="charm:tick" className="text-[#0b4d5e] mt-1" />
                  <span>Unlimited parallel chat conversations.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon icon="charm:tick" className="text-[#0b4d5e] mt-1" />
                  <span>24/7 customer support for all your needs.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon icon="charm:tick" className="text-[#0b4d5e] mt-1" />
                  <span>Conversation intelligence.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon icon="charm:tick" className="text-[#0b4d5e] mt-1" />
                  <span>Customizable qualifying questions.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feature;
