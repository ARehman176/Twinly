import React from "react";

const Works = () => {
  return (
    <section className="bg-[#0F5066] text-white py-16 px-4">
      <div className=" mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">How it works?</h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-md leading-relaxed mb-10  ">
          Twinly harnesses the power of advanced AI to seamlessly integrate into your legal practice. 
          As potential clients engage, our 24/7 virtual assistant takes charge, actively converting 
          leads<br/> with a sales cycle-trained chatbot. The intuitive dashboard streamlines lead 
          management, providing real-time insights. With the flexibility to disable AI for personalized 
          engagement,<br/> Twinly ensures a dynamic and efficient approach to client interactions, 
          empowering your legal practice like never before.
        </p>

        {/* Responsive Video */}
        <div className="w-full aspect-video max-w-5xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg mt-10"
            src="https://drive.google.com/file/d/1dPyPTlr1BbAiKl8w9DDWxc5bNP-1mil8/preview"
            title="Partner Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Works;
