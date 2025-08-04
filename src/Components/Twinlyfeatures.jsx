// components/TwinlyFeatures.jsx
import React from 'react';
import { FaRobot } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img from '../assets/img.svg';
import Frame from '../assets/Frame.png';
import mobileui from '../assets/mobileui.png';
import table from '../assets/table.png'
const TwinlyFeatures = () => {
  return (
    <section className="bg-[#0F5066] text-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Why you need Twinly.ai?</h2>

      {/* === Feature Cards === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-50 text-black ml-12">
        {/* Card 1 */}
        <div className="bg-[#E8E8E8] rounded-xl shadow-md p-3 flex flex-col items-center w-[430px]">
          <h3 className="text-xl font-bold text-center mb-2">Unmatched Affordability</h3>
          <p className="text-center text-sm text-gray-600">
            Experience the power of advanced<br /> technology without breaking the bank.<br />
            Twinly.ai offers a remarkable four-fold<br /> reduction in costs compared to competitors,<br />
            ensuring cutting-edge legal support without <br />the hefty price tag.
          </p>
          <img src={img} alt='' className='w-[326px] h-[341px]' />
        </div>

        {/* Card 2 */}
        <div className="bg-[#F5D794] rounded-xl shadow-md p-4 flex flex-col items-center  w-[430px]">
          <h3 className="text-xl font-bold text-center mb-2">Intelligent Multitasking with Twinly’s chatbot</h3>
          <p className="text-center text-sm mb-6">
            While you’re focused on your legal expertise, Twinly’s chatbot is tirelessly working to convert leads.
            No more missed opportunities – your virtual assistant engages potential clients seamlessly.
          </p>
          <button className="bg-gradient-to-r from-[#0F5265] to-[#457b8a] text-white font-semibold py-2 px-4 rounded-md mb-4">
            Try scheduling
          </button>
          <img src={Frame} alt="Chatbot" className="w-[205px] mt-10 ml-35" />
        </div>

        {/* Card 3 */}
        <div className="bg-[#E8E8E8] rounded-xl shadow-md p-4 flex flex-col items-center  w-[430px]">
          <h3 className="text-xl font-bold text-center mb-4">Streamlined Lead Management</h3>
          <p className="text-center text-sm mb-6">
            Bid farewell to chaos. Twinly.ai keeps your leads organized, allowing you to prioritize and address
            inquiries efficiently. A structured approach to lead management that enhances productivity.
          </p>
          <img src={mobileui} alt="Mobile UI" className="w-62 mt-8 ml-4 rounded-lg" />
        </div>
      </div>

      {/* === Insightful Lead Analysis Section === */}
      <div className="mt-10 bg-[#E8E8E8] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-8 text-black w-335 ml-11 ">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 ml-10">Insightful Lead Analysis:</h2>
          <p className="text-sm md:text-base mb-6 max-w-xl leading-relaxed ml-10">
            Gain a competitive edge with Twinly’s lead analysis tools. Understand client behavior,
            preferences, and trends to make informed decisions. Elevate your legal practice by
            harnessing the true potential of data-driven insights.
          </p>
          <button className="bg-gradient-to-r from-[#0F5265] to-[#658f9b] text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition ml-10">
            Book Demo
          </button>
        </div>

        {/* Right Chart Box */}
        <div className=" p-6 rounded-lg ">
          <img src={table} alt=''  className='w-[400px]'/>
        </div>
      </div>
    </section>
  );
};

export default TwinlyFeatures;
