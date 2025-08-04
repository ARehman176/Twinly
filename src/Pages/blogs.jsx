import React from 'react'
import Navbar from '../Components/Navbar'
import laptop from '../assets/laptop.png'
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
            <div className='flex justify-center gap-10 items-center mt-10  '>
                <div >
                    <img src={laptop} alt='' className='w-100 h-80  mb-10' />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white -mt-10'>
                        Lorem ipsum dolar sit ametae <br/> consectetur adipiscing elit sed <br/>
                        do eiusmod tempor
                    </h2>
                    <p className='text-white mt-4 '>
                        Sed ut perspiciatis unde omnis iste natus error sit volupta tem <br/> accusantium doloremque laudantium totam rem aperin eaque<br/>
                         ipsa quae ab quia dolor sit amet.
                    </p>
                     <button className='bg-[#E3D26F] px-2 py-1 rounded-full mt-9'> Read More</button>
                </div>
               
            </div>
        </div>
    )
}
export default BlogPage;