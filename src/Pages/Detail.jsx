import React from 'react';
import bag from '../assets/bag.png'
import figma from '../assets/figma.png'
import { Icon } from '@iconify/react';
import twinly from '../assets/twinly.svg'
const Detail = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-16">
        {/* <div className="text-2xl font-semibold text-[#083344]">Twinly</div> */}
        <img src={twinly} alt='' />
        <nav className="hidden md:flex space-x-10 text-sm text-gray-700">
          <a href="/" className="text-[#083344] text-lg">Home</a>
          <a href="/feature" className="text-lg text-[#083344]">Features</a>
          <a href="blogs" className="text-lg text-[#083344]">Blog</a>
          <a href="#" className="text-lg text-[#083344]">Partners</a>
        </nav>
        <button className="bg-[#0F5265] text-white px-5 py-2 rounded-lg text-sm">Book Demo</button>
      </div>

      <div>
         <h1 className='text-2xl font-semibold ml-120 text-[#2D3748]'>
            Pellentesque a consectetur velit, ac molestie <br/> ipsum. Donec sodales, massa et auctor.
         </h1>
         <p className='text-[#0F5265] ml-120 mt-2'>Cryptocurrency</p>
         <img src={bag} alt='' className=' ml-120 mt-8 w-[720px]' />

         <p className='ml-120 mt-5 text-[#4A5568]'>
            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice.<br/> Six draw 
            you him full not mean evil. Prepare garrets it expense windows shewing do an. She<br/> projection advantages resolution 
            son indulgence. Part sure on no long life amat ever.
         </p>

         <p className='ml-120 mt-5 text-[#4A5568]'>
            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as <br/> thoroughly 
            partiality considered on in estimating. Middletons acceptance discovered projecting<br/>
           is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous<br/> stimulated 
          am me discretion expression. But truth being state can she china widow. Occasional<br/> preference fat remarkably now projecting uncommonly dissimilar.
         </p>

           <p className='ml-120 mt-5 text-[#4A5568]'>
            Adieus except say barton put feebly favor him. Entreaties unpleasant sufficient few pianoforte<br/> discovered
             uncommonly ask. Morning cousins amongst in mr weather do
             neither. Warmth object<br/> matter course active law spring six. Pursuit showing tedious unknown winding see had man add.<br/>
              And park eyes too more him. Simple excuse active.
           </p>

           <p className='ml-120 mt-5 text-[#4A5568] border-l-4 pl-4 border-[#E3D26F]'>
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages
             nor <br/>expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing <br/>latter he 
             should thirty whence. Steepest speaking up attended it as.
           </p>

           <p className='ml-120 mt-5 text-[#4A5568]'>
            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as<br/> thoroughly 
            partiality considered on inestimating. Middletons acceptance discovered projecting so is so<br/> or. In or
             attachment inquietude remarkably comparison at an. Is surrounded prosperous<br/>
             stimulated am me discretion expression. But truth being state can she china widow. Occasional <br/>preference
             fat remarkably now projecting uncommonly dissimilar.
           </p>

           <p className='ml-120 mt-5 text-[#4A5568]'>
            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice.<br/> Six draw you him full not mean evil.
             Prepare garrets it expense windows shewing do an. She<br/> projection advantages resolution son indulgence. Part sure on no long life amat ever.
           </p>

           <h2 className='ml-120 mt-5 text-[#051D23] text-xl font-semibold'>
            Uneasy barton seeing remark happen his has
           </h2>

           <p className='ml-120 mt-5 text-[#4A5568] '>
            Adieus except say barton put feebly favor him. Entreaties unpleasant sufficient few pianoforte<br/> discovered uncommonly ask.
             Morning cousins amongst in mr weather do neither. Warmth object<br/> matter course 
            active law spring six. Pursuit showing tedious unknown winding see had man add.<br/> And park eyes too more him. Simple excuse
             active had son wholly coming number add.
           </p>

           <p className='ml-120 mt-5 text-[#4A5568] border-l-4 pl-4 border-[#E3D26F]'>
            Sportsman do offending supported extremity breakfast by listening. Decisively advantages
             nor <br/>expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing <br/>latter he 
             should thirty whence. Steepest speaking up attended it as.
           </p>

            <p className='ml-120 mt-5 text-[#4A5568]'>
            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as<br/> thoroughly 
            partiality considered on inestimating. Middletons acceptance discovered projecting so is so<br/> or. In or
             attachment inquietude remarkably comparison at an. Is surrounded prosperous<br/>
             stimulated am me discretion expression. But truth being state can she china widow. Occasional <br/>preference
             fat remarkably now projecting uncommonly dissimilar.
           </p>
           <p className='ml-120 mt-5 text-[#4A5568]'>
            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice.<br/> Six draw you him full not mean evil.
             Prepare garrets it expense windows shewing do an. She<br/> projection advantages resolution son indulgence. Part sure on no long life amat ever.
           </p>

<div className="border border-[#0F5265] p-4 w-2xl ml-120  mt-18 bg-white rounded">
  <div className="flex items-center gap-3">
    <img src={figma} alt="" className="w-6 h-6 rounded-full" />
    <div>
      <h1 className="text-sm font-semibold text-gray-800">Mike Sullivan</h1>
      <p className="text-xs text-gray-500">Editor</p>
    </div>
  </div>

  <p className="mt-4 text-sm text-[#4A5568]">
    Mike writes about technology Yourself required no at thoughts delicate landlord it be. <br />
    Branched dash-wood do is whatever it. ac molestie ipsum.
  </p>
</div>
      <div className="flex gap-2 mt-6 ml-270">
        <button className="w-8 h-8 bg-white border border-gray-300 flex items-center justify-center">
          <Icon icon="mdi:chevron-left" className="text-gray-700 text-lg" />
        </button>
        <button className="w-8 h-8 bg-[#0F5265] flex items-center justify-center">
          <Icon icon="mdi:chevron-right" className="text-white text-lg" />
        </button>
      </div>
       
      </div>
       
    </div>
  );
};

export default Detail;
