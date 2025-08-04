import React, { useState } from 'react';
import partner1 from '../assets/partner1.png';
import ff from '../assets/ff.png';
import person from '../assets/person.jpg';
import women from '../assets/women.jpg';
import { Icon } from "@iconify/react";

// Partner data array
const partners = [
  {
    id: 1,
    name: 'Jimmy Anderson',
    title: 'CEO @ Twinty',
    quote: `"“Lorem ipsum dolor sit amet, consectet adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercitation ullamco laboris sint occaecat cupidatat ”"`,
    image: partner1
  },
  {
    id: 2,
    name: 'Sarah Williams',
    title: 'Partner @ LegalPro',
    quote: `"We’ve improved our client onboarding by 40%. Couldn’t be happier with the platform and the support team."`,
    image: ff
  },
  {
    id: 3,
    name: 'Michael Roberts',
    title: 'Managing Director @ CounselCorp',
    quote: `"A true game changer for legal firms looking to modernize. It's intuitive and helps us focus on what matters."`,
    image: person
  },
  {
    id: 4,
    name: 'Emily Davis',
    title: 'CTO @ LawBridge',
    quote: `"The analytics dashboard gives us complete clarity over our pipeline. It's sleek and easy to use."`,
    image: women
  }
];

const Partner = () => {
  const [selectedId, setSelectedId] = useState(1);

  const selectedPartner = partners.find(p => p.id === selectedId);

  return (
    <div className="bg-[#0b4d5e] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Hear from Our Partners</h2>
        <p className="mt-2 text-gray-300 text-sm">
          Success stories from leading law firms that have transformed their client<br className="hidden md:block" />
          interactions and lead management.
        </p>
      </div>

      <div className="flex  md:flex-row items-start md:items-center justify-between gap-10 mb-10">
        {/* Left Content - Dynamic */}
        <div className="md:w-1/2">
          <p className="text-white leading-relaxed mb-6 ml-20">
            {selectedPartner.quote.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}<br />
              </span>
            ))}
          </p>
          <div className="flex items-center gap-4 mb-6 ml-20">
            <img
              src={selectedPartner.image}
              alt={selectedPartner.name}
              className="w-10 h-10 rounded-full object-fill"
            />
            <div>
              <p className="font-semibold">{selectedPartner.name}</p>
              <p className="text-sm text-gray-400">{selectedPartner.title}</p>
            </div>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition ml-20 cursor-pointer">
            Speak to us
          </button>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 flex flex-wrap gap-4 justify-center  mt-10 ">
          {partners.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedId(partner.id)}
              className={`cursor-pointer transition-all duration-300 rounded overflow-hidden relative
                ${selectedId === partner.id ? 'w-64 h-84' : 'w-14 h-84'} 
              `}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-2 left-2 text-yellow-300 text-lg font-bold">
                <Icon icon="basil:arrow-right-solid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
