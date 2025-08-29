import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../Components/Navbar";
import laptop from "../assets/laptop.png";
import rectangle from "../assets/rectangle.png";
import rectangle1 from "../assets/rectangle1.png";
import rectangle2 from "../assets/rectangle2.png";
import rectangle3 from "../assets/rectangle3.png";
import rectangle4 from "../assets/rectangle4.png";
import rectangle5 from "../assets/rectangle5.png";
import rectangle6 from "../assets/rectangle6.png";
import rectangle7 from "../assets/rectangle7.png";
import rectangle8 from "../assets/rectangle8.png";
import rectangle9 from "../assets/rectangle9.png";

const BlogPage = () => {
  return (
    <div className="bg-[#0F5265]">
      <Navbar />

      {/* Top Button */}
      <div className="flex justify-center md:justify-end px-4 md:px-20 -mt-3">
        <button className="bg-white rounded-2xl text-black px-6 py-3 mb-4 mt-2 ">
          Book Demo
        </button>
      </div>

      
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white pb-5 mt-10">
        Blog & News
      </h2>

      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 mt-10 px-4">
        <div className="transition-transform duration-300 hover:scale-105">
          <img
            src={laptop}
            alt=""
            className="w-140 h-100 mb-10 object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white -mt-4 lg:-mt-10">
            Lorem ipsum dolar sit ametae <br /> consectetur adipiscing elit sed{" "}
            <br />
            do eiusmod tempor
          </h2>
          <p className="text-white mt-4 text-sm sm:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit volupta tem{" "}
            <br className="hidden sm:block" /> accusantium doloremque
            laudantium totam rem aperin eaque
            <br className="hidden sm:block" /> ipsa quae ab quia dolor sit amet.
          </p>
          <a href="/Detail">
            <button className="bg-[#E3D26F] px-2 py-1 rounded-full mt-6 sm:mt-9 cursor-pointer">
              Read More
            </button>
          </a>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-center gap-15 mt-10 bg-white px-4">
        <div className="flex flex-col sm:flex-row gap-15 items-center mt-10 sm:mt-20 mb-10 sm:mb-20">
          <img
            src={rectangle1}
            alt=""
            className="w-[190px] h-[162px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div>
            <p className="text-[#0F5265] mb-2">November 22, 2023</p>
            <h2 className="text-black text-xl font-semibold">
              Lorem ipsum dolor sit ametae cone <br />
              adipiscing slit sed do eiusmod.
            </h2>
            <a href="/Detail">
              <button className="bg-[#E3D26F] px-2 py-1 rounded-full mt-6 sm:mt-9 cursor-pointer">
                Read More
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-15 items-center mt-10 sm:mt-20 mb-10 sm:mb-20">
          <img
            src={rectangle}
            alt=""
            className="w-[190px] h-[162px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div>
            <p className="text-[#0F5265] mb-2">November 22, 2023</p>
            <h2 className="text-black text-xl font-semibold">
              Lorem ipsum dolor sit ametae cone <br />
              adipiscing slit sed do eiusmod.
            </h2>
            <a href="/Detail">
              <button className="bg-[#E3D26F] px-2 py-1 rounded-full mt-6 sm:mt-9 cursor-pointer">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>

      
      <div className="bg-[#0F5265] text-white py-10 px-4 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-bold">
          Subscribe to our newsletter
        </h3>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-2xl mx-auto border rounded-xl px-4 py-1">
          <input
            type="email"
            placeholder="Your Email Address"
            className="rounded w-full px-3 py-2 text-black"
          />
          <button className="bg-white text-black px-4 py-2 rounded">
            Subscribe
          </button>
        </form>
      </div>

      
      
          <section className="px-4 py-4 flex flex-wrap gap-4 justify-center bg-[#E8E8E8] ">
                <div className='max-w-5xl space-x-4 mr-32'>
        {['AI', 'Business Education', 'Business Solutions', 'Chat', 'Client Spotlight', 'Compmay News', 'Integrations', 'Partnerships',
        'Outreach Campaigns','Product Updates', 'Prmotions & Offers','Virtual Recetionists', 'Voice Assistant'].map(tag => (
          <button key={tag} className="bg-white border border-[#0F5265] px-4 py-1 rounded-full text-sm hover:bg-[#0F5265] mt-10
          hover:text-white">{tag}</button>
        ))}
        </div>
      </section>

      
      <div className="flex flex-wrap justify-center gap-4 bg-[#E8E8E8] px-4">
        {[ rectangle1,rectangle2, rectangle3, rectangle4, rectangle5, rectangle6, rectangle7, rectangle8, rectangle9].map(
          (img, idx) => (
            <div
              key={idx}
              className="bg-[#E8E8E8] flex flex-col w-[360px] mr-0 lg:mr-5"
            >
              <img
                src={img}
                alt=""
                className="w-[360px] mt-10 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div>
                <p className="text-[#0F5265] mb-2 mt-4">November 22, 2023</p>
                <h2 className="text-black text-xl font-semibold">
                  Lorem ipsum dolor sit ametae <br /> consectetur adipiscing
                  elit sed <br /> do eiusmod tempor
                </h2>
                <p className="text-[#051D23] mt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
                  volupta tem accusantium doloremque laudantium <br /> totam rem
                  aperin eaque ipsa quae ab quia dolor <br /> amet velit, sed
                  quia non numquam
                </p>
                <a href="/Detail">
                  <button className="bg-[#E3D26F] px-2 py-1 rounded-full mt-6 sm:mt-9 cursor-pointer">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          )
        )}
      </div>

      
      <div className="py-10 text-center bg-[#E8E8E8]">
        <div className="flex flex-wrap justify-center items-center gap-98 mt-10">
          <p className="flex items-center gap-1 cursor-pointer text-[#0F5265] hover:underline">
            <Icon icon="grommet-icons:form-previous" /> Previous
          </p>
          <div className="inline-flex items-center gap-2 mr-19 ">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className="w-8 h-8 rounded-full border text-sm text-gray-600 hover:bg-[#0F5265] hover:text-white"
              >
                {n}
              </button>
            ))}
          </div>
          <p className="flex items-center gap-1 cursor-pointer text-[#0F5265] hover:underline">
            Next <Icon icon="ooui:next-ltr" />
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default BlogPage;
