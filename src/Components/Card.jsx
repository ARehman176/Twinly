import Hours from "../assets/Card124Hours.png";
import graph from "../assets/graph.png";
import CardImage from "../assets/CardImage.png";
import { Icon } from "@iconify/react";
import LineChart from "../Components/LineGraph.jsx";
import { CardHeading, CardPara } from "../Constants/constants.js";

export default function Card() {
  return (
    <div className=" bg-[#0F5265] ">
      <h1 className=" flex text-[48px] justify-center items-center font-semibold tracking-wider leading-snug text-3xl text-white">
        What is Twinly
      </h1>
      <div className="flex gap-8 justify-center -ml-55 mt-10  ">
        {/* Column 1: Card 1 & 4 */}
        <div className="flex flex-col gap-8 ml-5">
          <div className="w-[362px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl flex flex-col p-6">
            <h1 className="font-semibold text-2xl">
              Your Always-On Virtual <br />
              Assistant
            </h1>
            <p className="mt-2">
              Twinly.ai serves as your 24/7 virtual assistant, actively
              converting leads and ensuring no opportunity is missed.
            </p>
            <div className="flex justify-end items-center mt-4">
              <img src={Hours} alt="" className="w-20 h-20" />
            </div>
          </div>
          <div className="w-[493px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl">
            {" "}
            <LineChart />{" "}
          </div>
        </div>

        {/* Column 2: Card 2 & 5 */}
        <div className="flex flex-col gap-8">
          <div className="w-[456px] h-[295px] bg-[#E8E8E8] rounded-xl -ml-34 shadow-2xl flex flex-col p-6">
            <div>
              <h1 className="font-semibold text-2xl">
                Organized Lead Management Hub
              </h1>
              <p className="mt-2">
                Twinly.ai provides an intuitive dashboard for streamlined lead
                management, keeping your leads organized and insights at your
                fingertips
              </p>
            </div>
            <div className="flex justify-center items-center mt-2 p-2 ">
              <img src={graph} alt="" className="rounded-md" />
            </div>
          </div>
          <div className="w-[325px] h-[295px] bg-[#E8E8E8] rounded-xl shadow-2xl p-6">
            <div>
              <h2 className="font-semibold text-2xl">Ai in your control</h2>
              <p className=" mt-2">
                Disable Ai anytime to personally <br /> engage, providing a
                seamless blend <br />
                of automation and customization
              </p>
            </div>
            <div className="gap-2 flex justify-center items-center mt-8 mr-9">
              <button className="bg-[#0F5265] text-white font-light rounded-lg px-4 py-2 text-xs ">
                Disable AI
              </button>
              <button className="flex gap-2 items-center bg-[#0F5265] text-white font-light rounded-lg px-4 py-2 text-xs whitespace-nowrap">
                <span>
                  <Icon icon="ri:eye-line" />
                </span>
                Preview AI Chatbot
              </button>
            </div>
          </div>
        </div>

        {/* : Card 3  */}
        <div className="w-[456px] h-[623px] bg-[#E8E8E8] rounded-xl shadow-2xl flex flex-col p-6">
          <h1 className="font-semibold text-2xl">
            Flexible & Personalized Engagement
          </h1>
          <p className="mt-2">
            Take control with Twinly.ai – disable AI anytime to engage
            personally, striking the perfect balance between automation and
            customization.
          </p>
          <div className="flex flex-col justify-between bg-[#0F5265] w-[300px] h-[375px] rounded-2xl p-4 self-center mt-12">
            <div className="flex flex-col items-center">
              <div className="relative w-[100px] h-[100px] mb-2 mt-6">
                <img
                  src={CardImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />

                <span className="absolute top-2 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
              </div>

              <h1 className="text-white font-medium tracking-widest leading-tight text-center">
                Cameron Williamson
              </h1>
              <p className="text-white font-extralight tracking-wide text-sm text-center">
                Criminal Lawyer
              </p>
            </div>

            <div className="flex justify-center gap-4 text-white text-2xl mb-8">
              <Icon icon="cil:calendar" />
              <Icon icon="mdi-light:email" />
              <Icon icon="weui:video-call-outlined" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
