// components/HowItWorks.jsx
import React from "react";

const Works = () => {
  return (
    <section className="bg-[#0F5066] text-white py-16 px-4">
      <div className=" mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">How it works?</h2>

        {/* Description */}
        <p className="   mb-10">
          Twinly harnesses the power of advanced AI to seamlessly integrate into
          your legal practice. As potentail clients engage , Our 24/7 virtual
          assistant takes charge, actively converting leads <br /> with a sales
          cycle-trained chatbot. The intutive dashboard streamlines lead
          managment, providing real time insights. With the flexibility to
          disable AI for personalized engagement,
          <br />
          Twinly ensure a dynamic and efficient to client interactions,
          empowering your legal practice like never before.
        </p>
  
       <iframe
  className="w-2xl ml-100 md:h-96"
  src="https://drive.google.com/file/d/1dPyPTlr1BbAiKl8w9DDWxc5bNP-1mil8/preview"
  title="Partner Video"
  frameBorder=""
  allowFullScreen
></iframe>


      </div>
    </section>
  );
};

export default Works;
