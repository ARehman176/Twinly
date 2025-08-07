import React from 'react'
import { Icon } from '@iconify/react';
import Navbar from '../Components/Navbar'
import laptop from '../assets/laptop.png'
import rectangle from '../assets/rectangle.png'
import rectangle1 from '../assets/rectangle1.png'
import rectangle2 from '../assets/rectangle2.png'
import rectangle3 from '../assets/rectangle3.png'
import rectangle4 from '../assets/rectangle4.png'
import rectangle5 from '../assets/rectangle5.png'
import rectangle6 from '../assets/rectangle6.png'
import rectangle7 from '../assets/rectangle7.png'
import rectangle8 from '../assets/rectangle8.png'
import rectangle9 from '../assets/rectangle9.png'
const BlogPage = () => {
    return (
        <div className="bg-[#0F5265]">
            <Navbar />
             <div className='-mt-3'>
                <button className='bg-white rounded-2xl text-black px-6 py-3  mb-4 -mt-4 ml-320'>
      Book Demo
    </button>
            </div>
            <h2 className='text-center text-4xl font-semibold text-white pb-5 mt-10'>Blog & News</h2>
            <div className='flex justify-center gap-14 items-center mt-10  '>
                <div className='hover: transition-transform duration-300 hover:scale-105'>
                    <img src={laptop} alt='' className='w-140 h-100  mb-10 ' />
                </div>
                <div>
                    <h2 className='text-4xl font-semibold text-white -mt-10 mr-20'>
                        Lorem ipsum dolar sit ametae <br/> consectetur adipiscing elit sed <br/>
                        do eiusmod tempor
                    </h2>
                    <p className='text-white mt-4 '>
                        Sed ut perspiciatis unde omnis iste natus error sit volupta tem <br/> accusantium doloremque laudantium totam rem aperin eaque<br/>
                         ipsa quae ab quia dolor sit amet.
                    </p>
                    <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                </div>
               
            </div>
            <div  className='flex justify-center gap-15 mt-10 bg-white'>
                <div className='flex gap-15 items-center mt-20 mb-20'>
                    <div>
                        <img src={rectangle1} alt='' className='w-[190px] h-[162px] hover: transition-transform duration-300 hover:scale-105' />
                    </div>
                    <div>
                        <p className='text-[#0F5265] mb-2'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae cone <br/>
                        adipiscing slit sed do eiusmod.</h2>
                       <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
                </div>


                <div className='flex gap-15 items-center'>
                    <div>
                        <img src={rectangle} alt='' className='w-[190px] h-[162px] hover: transition-transform duration-300 hover:scale-105' />
                    </div>
                    <div>
                        <p className='text-[#0F5265] mb-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae cone <br/>
                        adipiscing slit sed do eiusmod.</h2>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
                </div>
            </div>
            <div className='bg-[#0F5265] text-white py-10 px-4 text-center flex justify-center gap-50'>
                  <h3 className="text-4xl mb-4 mt-2 font-bold">Subscribe to our newsletter</h3>
        <form className="flex  justify-center items-center gap-44 border-1 rounded-xl px-7  ">
          <input type="email" placeholder="Your Email Address" className=" rounded w-full " />
          <button className="bg-yellow-400 text-black px-3 py-1 rounded">Subscribe</button>
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
      <div className='flex bg-[#E8E8E8] justify-center gap-4 '>
      <div className='bg-[#E8E8E8] flex flex-col mr-5 '>
        <div>
            <img src={rectangle2} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle3} alt='' className='w-[360px] mt-10 mr-5 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle4} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                         <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>
      </div>
        <div className='flex bg-[#E8E8E8] justify-center gap-4 '>
      <div className='bg-[#E8E8E8] flex flex-col mr-5 '>
        <div>
            <img src={rectangle4} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105 ' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle5} alt='' className='w-[360px] mt-10 mr-5 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
 <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle6} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>
      </div>

        <div className='flex bg-[#E8E8E8] justify-center gap-4 '>
      <div className='bg-[#E8E8E8] flex flex-col mr-5 '>
        <div>
            <img src={rectangle7} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105 ' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                       <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle8} alt='' className='w-[360px] mt-10 mr-5 hover: transition-transform duration-300 hover:scale-105' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                        <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>

       <div className='bg-[#E8E8E8] flex flex-col'>
        <div>
            <img src={rectangle9} alt='' className='w-[360px] mt-10 hover: transition-transform duration-300 hover:scale-105 ' />

        </div>
        <div>
              <div>
                        <p className='text-[#0F5265] mb-4 mt-4'>November 22, 2023</p>
                        <h2 className='text-black text-xl font-semibold'>Lorem ipsum dolor sit ametae<br/> conesectetur adipiscing elit sed <br/>
                     do eiusmod tempor  </h2>
                     <p className='text-[#051D23] mt-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit<br/> volupta tem accusantium doloremque
                         laudantium<br/> totam rem aperin eaque ipsa quae ab quia dolor<br/> amet
                         velit, sed quia non numquam
                     </p>
                         <a href="/Detail">
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9 cursor-pointer'> Read More</button>
                     </a>
                    </div>
        </div>
      </div>
      </div>
     <div className="py-10 text-center bg-[#E8E8E8]">
      {/* Flex row for Previous, pagination, and Next */}
      <div className="flex justify-center items-center gap-106">
        {/* Previous with icon */}
        <p className="flex items-center gap-1 cursor-pointer text-[#0F5265] hover:underline">
          <Icon icon="grommet-icons:form-previous" className='' />
          Previous
        </p>

        {/* Page numbers */}
        <div className="inline-flex items-center gap-2">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              className="w-8 h-8 rounded-full border text-sm text-gray-600 hover:bg-[#0F5265] hover:text-white"
            >
              {n}
            </button>
          ))}
        </div>

        {/* Next with icon */}
        <p className="flex items-center gap-1 cursor-pointer text-[#0F5265] hover:underline">
          Next
          <Icon icon="ooui:next-ltr" />
        </p>
      </div>

      {/* Footer text */}
      <p className="text-sm text-gray-400 mt-6">© 2025 Today. All rights reserved.</p>
    </div>

        </div>
    )
}
export default BlogPage;