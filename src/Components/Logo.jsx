import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";
import logo10 from "../assets/logo10.svg";
import logo11 from "../assets/logo11.svg";
import logo12 from "../assets/logo12.svg";
import logo13 from "../assets/logo13.svg";

import logo14 from "../assets/logo4.svg";
const logos = [
  { name: "HubSpot", src: logo1 },
  { name: "Zapier", src: logo2 },
  { name: "Slack", src: logo3 },
  { name: "Calendly", src: logo4 },
  { name: "Salesforce", src: logo5 },
  { name: "Clio", src: logo6 },
  { name: "Actionstep", src: logo7 },
  { name: "ActiveCampaign", src: logo8 },
  { name: "ServiceTitan", src: logo9 },
  { name: "MyCase", src: logo10 },
  { name: "Lawcus", src: logo11 },
  { name: "Microsoft Teams", src: logo12 },
  { name: "Salesforce", src: logo5 },
  { name: "Headnote", src: logo13 },
  { name: "Calendly", src: logo4 },
];

const Logo = () => {
  return (
    <section className="  text-md bg-[#D9D9D9] py-16 px-6 text-center">
      {/* Top Heading */}
      <p className=" text-[#0F5265]">Plug in and Go. No Fuss.</p>
      <h2 className="text-3xl font-bold text-[#051D23] mt-2 mb-4">
        We Work with Your Software
      </h2>
      <p className="text-[#051D23] mb-10">
        Automatically keep track of calls, chats, and appointments across your
        tools. Sync effortlessly with 100+ platforms you <br />
        already use. We make integration easy, so you can keep focusing on your
        law practice.
      </p>

      <div className="flex flex-wrap justify-center  mb-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className=" w-1/5 p-4 flex justify-center items-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8  object-contain"
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <p className=" text-[#0F5265]  mb-4">
        Don't see your software listed here?
      </p>
      <button className="bg-gradient-to-r from-[#0F5265] to-[#0F5265] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 mt-4 cursor-pointer">
        Request an Integration
      </button>
    </section>
  );
};

export default Logo;
