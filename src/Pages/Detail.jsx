import React, { useState } from 'react';
import bag from '../assets/bag.png';
import figma from '../assets/figma.png';
import figma1 from '../assets/figma1.jpeg';
import figma2 from '../assets/figma2.jpg';
import { Icon } from '@iconify/react';
import twinly from '../assets/twinly.svg';

const Detail = () => {
  // ✅ Data for the bottom card section only
  const editors = [
    {
      name: "Mike Sullivan",
      role: "Editor",
      image: figma,
      description:
        "Mike writes about technology. Yourself required no at thoughts delicate landlord it be. Branched dash-wood do is whatever it. ac molestie ipsum.",
    },
    {
      name: "Sarah Johnson",
      role: "Writer",
      image: figma1,
      description:
        "Sarah covers design trends and user experiences. She loves to explore how technology and creativity intersect in everyday life.",
    },
    {
      name: "David Chen",
      role: "Researcher",
      image: figma2,
      description:
        "David focuses on emerging technologies and their social impact. He believes research should always connect back to real-world solutions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? editors.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === editors.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-16 xl:px-24 py-10">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-12">
        <img src={twinly} alt="Twinly Logo" className="w-24 sm:w-28 md:w-32" />
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700">
          <a href="/" className="text-[#083344] text-base lg:text-lg">Home</a>
          <a href="/feature" className="text-[#083344] text-base lg:text-lg">Features</a>
          <a href="/blogs" className="text-[#083344] text-base lg:text-lg">Blog</a>
          <a href="#" className="text-[#083344] text-base lg:text-lg">Partners</a>
        </nav>
        <button className="bg-[#0F5265] text-white px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base">
          Book Demo
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2D3748] leading-snug">
          Pellentesque a consectetur velit, ac molestie<br/> ipsum. Donec sodales, massa et auctor.
        </h1>
        <p className="text-[#0F5265] mt-2 text-sm sm:text-base">Cryptocurrency</p>

        <img
          src={bag}
          alt="Bag"
          className="mt-6 w-full max-w-2xl h-auto object-contain"
        />

        {/* (keeping all your paragraphs untouched) */}
        <div className="mt-6 space-y-5 text-sm sm:text-base text-[#4A5568] leading-relaxed">
          <p>
            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice.
            Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection
            advantages resolution son indulgence. Part sure on no long life amat ever.
          </p>

          <p>
            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly
            partiality considered on in estimating. Middletons acceptance discovered projecting is so or. In or
            attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
            expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
            uncommonly dissimilar.
          </p>

          <p>
            Adieus except say barton put feebly favor him. Entreaties unpleasant sufficient few pianoforte discovered
            uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
            spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse active.
          </p>

          <p className="border-l-4 pl-4 border-[#E3D26F]">
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression
            unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty
            whence. Steepest speaking up attended it as.
          </p>

          <p>
            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six
            draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection
            advantages resolution son indulgence. Part sure on no long life amat ever.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-[#051D23] mt-6">
            Uneasy barton seeing remark happen his has
          </h2>

          <p>
            Adieus except say barton put feebly favor him. Entreaties unpleasant sufficient few pianoforte discovered
            uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
            spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
            active had son wholly coming number add.
          </p>

          <p className="border-l-4 pl-4 border-[#E3D26F]">
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression
            unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty
            whence. Steepest speaking up attended it as.
          </p>
           <p>
            Adieus except say barton put feebly favor him. Entreaties unpleasant sufficient few pianoforte discovered
            uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
            spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
            active had son wholly coming number add.
          </p>
        </div>

        {/* ✅ Bottom Card Section (changes with buttons) */}
        <div className="border border-[#0F5265] p-4 mt-10 bg-white rounded max-w-4xl">
          <div className="flex items-center gap-3">
            <img src={editors[currentIndex].image} alt={editors[currentIndex].name} className="w-8 h-8 rounded-full" />
            <div>
              <h1 className="text-sm sm:text-base font-semibold text-gray-800">
                {editors[currentIndex].name}
              </h1>
              <p className="text-xs text-gray-500">{editors[currentIndex].role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {editors[currentIndex].description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-end gap-2 mt-6">
          <button
            onClick={handlePrev}
            className="w-8 h-8 bg-white border border-gray-300 flex items-center justify-center cursor-pointer"
          >
            <Icon icon="mdi:chevron-left" className="text-gray-700 text-lg" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 bg-[#0F5265] flex items-center justify-center cursor-pointer"
          >
            <Icon icon="mdi:chevron-right" className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
