import React from 'react';
import img from '../assets/img.svg';
import Frame from '../assets/Frame.png';
import mobileui from '../assets/mobileui.png';
import table from '../assets/table.png';

const TwinlyFeatures = () => {
  return (
    <section className="bg-[#0F5066] text-white py-16 px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why you need Twinly.ai?
      </h2>

      {/* === Flex Layout for Cards === */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8 max-w-7xl mx-auto text-black">
        {/* Card 1 */}
        <div className="bg-[#E8E8E8] rounded-xl shadow-md p-6 flex flex-col items-center sm:w-[45%] lg:w-[31%] ">
          <h3 className="text-xl font-bold text-center mb-4">Unmatched Affordability</h3>
          <p className="text-center text-sm text-gray-600 mb-4">
            Experience the power of advanced technology without breaking the bank.
            Twinly.ai offers a remarkable four-fold reduction in costs compared
            to competitors, ensuring cutting-edge legal support without the hefty price tag.
          </p>
          <img src={img} alt="Affordability" className="w-full max-w-xs" />
        </div>

        {/* Card 2 */}
        <div className="bg-[#F5D794] rounded-xl shadow-md p-6 flex flex-col items-center sm:w-[45%] lg:w-[31%]">
          <h3 className="text-xl font-bold text-center mb-4">
            Intelligent Multitasking with Twinly’s chatbotadd resposiveness in this code to sm screen to lg 
            
          </h3>
          <p className="text-center text-sm mb-6">
            While you’re focused on your legal expertise, Twinly’s chatbot is tirelessly
            working to convert leads. No more missed opportunities – your virtual assistant
            engages potential clients seamlessly.
          </p>
          <button className="bg-gradient-to-r from-[#0F5265] to-[#457b8a] text-white font-semibold py-2 px-4 rounded-md mt-7 ">
            Try scheduling
          </button>
          <img src={Frame} alt="Chatbot" className="w-full max-w-[200px] mt-25 ml-30" />
        </div>

        {/* Card 3 */}
        <div className="bg-[#E8E8E8] rounded-xl shadow-md p-6 flex flex-col items-center sm:w-[90%] lg:w-[31%]">
          <h3 className="text-xl font-bold text-center mb-4">Streamlined Lead Management</h3>
          <p className="text-center text-sm mb-6">
            Bid farewell to chaos. Twinly.ai keeps your leads organized, allowing you to
            prioritize and address inquiries efficiently. A structured approach to lead
            management that enhances productivity.
          </p>
          <img src={mobileui} alt="Mobile UI" className="w-full max-w-[250px] rounded-lg mt-20" />
        </div>
      </div>

      {/* === Analysis Section === */}
      <div className="mt-16 bg-[#E8E8E8] rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between gap-10 text-black max-w-7xl mx-auto">
        {/* Text Side */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Insightful Lead Analysis:
          </h2>
          <p className="text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
            Gain a competitive edge with Twinly’s lead analysis tools. Understand
            client behavior, preferences, and trends to make informed decisions.
            Elevate your legal practice by harnessing the true potential of
            data-driven insights.
          </p>
          <button className="bg-gradient-to-r from-[#0F5265] to-[#658f9b] text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition">
            Book Demo
          </button>
        </div>

        {/* Image Side */}
        <div className="flex-1 flex justify-center">
          <img src={table} alt="Analysis" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default TwinlyFeatures;
