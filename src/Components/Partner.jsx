import React from 'react';
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import { Icon } from "@iconify/react";
const Partner = () => {
  return (
    <div className="bg-[#0b4d5e] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Hear from Our Partners</h2>
        <p className="mt-2 text-gray-300 text-sm">
          Success stories from leading law firms that have transformed their client<br className="hidden md:block" />
          interactions and lead management.
        </p>
      </div>

      <div className="flex  flex-row items-center  justify-between gap-10 mb-10">
        {/* Left Side*/}
        <div className="md:w-1/2">
          <p className="text-white  leading-relaxed mb-6 ml-20">
            "Lorem ipsum dolor sit amet, consectetur adipis cing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/>
             dolore magna aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation ullamco laboris sint occaecat<br/>
              cupidatat"
          </p>
          <div className="flex items-center gap-4 mb-6 ml-20">
            <img
              src={partner1}
              alt="Jimmy Anderson"
              className="w-10 h-10 rounded-full object-fill"
            />
            <div>
              <p className="font-semibold">Jimmy Anderson</p>
              <p className="text-sm text-gray-400">CEO @ Twinty</p>
            </div>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition ml-20 cursor-pointer">
            Speak to us
          </button>
        </div>

        {/* Right Side: Images */}
        <div className="md:w-1/2 flex gap-4 mt-10">
          {/* Large Image */}
          <div className="w-1/2 h-84 relative rounded overflow-hidden group">
            <img
              src={partner1}
              alt="Main Partner"
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            {/* <div className="absolute bottom-2 left-2 text-yellow-300 text-xl font-bold"> <Icon icon="basil:arrow-right-solid" /></div> */}
          </div>

          {/* Smaller stacked images */}
        <div className="flex flex-row gap-4 w-1/2">
            {/* Image 2 */}
            <div className="h-84 relative rounded overflow-hidden group">
              <img
                src={partner2}
                alt="Partner 2"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-1 left-10  text-yellow-300 text-lg font-bold"><Icon icon="basil:arrow-right-solid"/></div>
            </div>

            {/* Image 3 */}
            <div className="h-84 relative rounded overflow-hidden group">
              <img
                src={partner3}
                alt="Partner 3"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-1 left-10 text-yellow-300 text-lg font-bold"><Icon icon="basil:arrow-right-solid"/></div>
            </div>

            {/* Image 4 */}
            <div className="h-84 relative rounded overflow-hidden group">
              <img
                src={partner4}
                alt="Partner 4"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-1 left-10 text-yellow-300 text-lg font-bold"><Icon icon="basil:arrow-right-solid"/></div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Partner;
