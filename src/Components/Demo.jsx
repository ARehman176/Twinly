import React from 'react';
import arrow from '../assets/arrow.png'
import circle from '../assets/circle.png'
import twinly from '../assets/twinly.svg'
const BookDemo = () => {
  return (
    <div className="min-h-screen bg-[#0F5265] text-white px-6 py-12">
           <div className='flex justify-between'>
            <div>
              <img src={twinly} alt='' className='w-38' />
                </div>
            <div>
                <button className='bg-white rounded-2xl text-black px-6 py-3 mb-4 -mt-4'>
      Book Demo
    </button>
            </div>
        </div>
        <div className='flex justify-center gap-8 -mt-12 ml-210'>
             <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/blogs">Blog</a>
        </div>
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12 mt-5">
        <h1 className="text-4xl font-bold mb-2">Book Demo</h1>
        <p className="text-lg text-gray-200">Any question or remarks? Just write us a message!</p>
      </div>

      {/* Form Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row text-black overflow-hidden ">
        {/* Left Column */}
        <div className="bg-[#011C2B] text-white p-10 flex flex-col justify-between m-2 rounded-xl w-110 h-142">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="mb-10">Say something to start a live chat!</p>
            <ul className="space-y-12 text-sm">
              <li className="flex items-center">
                📞 <span className="ml-3">+1012 3456 789</span>
              </li>
              <li className="flex items-center">
                ✉️ <span className="ml-3">demo@gmail.com</span>
              </li>
              <li className="flex items-start">
                📍 <span className="ml-3">132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States</span>
              </li>
            </ul>
          </div>
          {/* Social Icons */}
          <div className='flex mt-20'>
          <div className="flex space-x-4  mt-28">
            <a href="#" className="text-yellow-400 hover:opacity-75 ">🐤</a>
            <a href="#" className="hover:opacity-75">📷</a>
            <a href="#" className="text-orange-400 hover:opacity-75">💬</a>
          </div>
          <div> <img src={circle} alt='' className='w-50 ml-25 -mt-8 ' /></div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="p-10 flex-1">
          <form className="space-y-6">
            {/* Name Row */}
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <div className="flex-1">
                <label className="block text-sm mb-1">First Name</label>
                <input type="text" defaultValue='John' className="w-full border-b border-gray-300 focus:outline-none" />
              </div>
              <div className="flex-1 mt-6 lg:mt-0">
                <label className="block text-sm mb-1">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full border-b border-gray-300 focus:outline-none" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <div className="flex-1">
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full border-b border-gray-300 focus:outline-none" />
              </div>
              <div className="flex-1 mt-6 lg:mt-0">
                <label className="block text-sm mb-1">Phone Number</label>
                <input type="text" defaultValue="+1 012 3456 789" className="w-full border-b border-gray-300 focus:outline-none" />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-2">Select Subject?</label>
              <div className="flex flex-wrap gap-4 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="subject" />
                  <span>General Inquiry</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="subject" />
                  <span>General Inquiry</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="subject" />
                  <span>General Inquiry</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="subject" />
                  <span>General Inquiry</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full border-b border-gray-300 focus:outline-none" placeholder="Write your message..." rows="3" />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="bg-[#0F5164]  text-white py-2 px-6 cursor-pointer rounded shadow-md ml-130">
                Book Demo
              </button>
              <img src={arrow} alt='' className='w-38 ml-110' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
