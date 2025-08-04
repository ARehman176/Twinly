import React from "react";
import men from "../assets/men.png"; // ← replace with actual image path
import twinly from '../assets/twinly.svg'
import { Icon } from "@iconify/react";

const PricingSection = () => {
  return (
    <div className="bg-[#0b4d5e] text-white py-16 px-6 md:px-20">
      <div className="flex ml-200 gap-50 -mt-5">
         <div className='flex justify-center gap-8 mb-10'>
             <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/blogs">Blog</a>
        </div>
         <div>
           <a href="/Demo">
                <button className='bg-white rounded-2xl text-black px-6 py-3 mb-4 -mt-4'>
      Book Demo
    </button>
    </a>
            </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center -mt-13">
        {/* Left - Image and Quote */}
        <div className="bg-white text-black rounded-lg p-6 w-full md:w-1/4 flex flex-col  shadow-lg">
          <img
            src={twinly}// Replace with your logo if needed
            alt="Twinly Logo"
            className="mb-6 w-24 mr-70"
          />
          <h2 className="text-5xl  leading-snug mb-4">
            Unlock the <br/> potential<br/> within you
          </h2>
          <img
            src={men}
            alt="Business Person"
            className="mt-auto w-full  "
          />
        </div>

        {/* Right - Text and Pricing */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 mt-10">The Perfect Plan for Your Needs</h2>
          <p className="text-gray-200 mb-8 max-w-2xl">
            Embark on a transformative legal journey with Twinly.ai – sign up now for our
            30-day free trial. Experience the power of an always-on virtual assistant,
            streamlined lead management, and cost-efficient AI innovation. Unleash the
            potential of your legal practice risk-free – your future awaits with Twinly.ai
          </p>

          <div className="bg-white text-black rounded-lg  flex flex-col md:flex-row items-start justify-between gap-8 shadow-xl">
            {/* Pricing Box */}
            <div className="bg-[#F5D794]  p-10 w-full md:w-1/3 text-center rounded-l-md">
              <h3 className="text-lg font-semibold mb-2">Premium PRO</h3>
              <p className="text-4xl font-bold text-[#0b4d5e] mb-1">$8</p>
              <p className="text-sm text-gray-700 mb-4">Per SQL (sales-qualified lead)</p>
              <button className="bg-[#0b4d5e] text-white px-6 py-2 rounded-md font-medium hover:bg-[#083c49] transition">
                Get Started
              </button>
            </div>

            {/* Features List */}
            <div className="w-full md:w-2/3 space-y-3">
              <p className="font-medium text-gray-800 mt-8">
                Access these features when you get this pricing package for your business.
              </p>
             <div className="text-gray-700 space-y-3 mb-8">
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

export default PricingSection;
