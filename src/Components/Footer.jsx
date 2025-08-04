import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b4d5e] text-white py-12 px-6 md:px-20  ">
      <div className="flex flex-col md:flex-row justify-center gap-29 mb-10 ">
        {/* Left: Logo and Newsletter */}
        <div className="w-1/2 mr-30 ">
          {/* Logo and Tagline */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Twinly</h2>
            <p className="text-sm text-gray-300 mt-1">
              Every conversation can be a client
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-2 font-medium text-sm">Subscribe to newsletter</p>
            <form className="flex w-sm border-1 rounded-md p-1 ">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-l-full outline-none text-white"
              />
              <button
                type="submit"
                className="bg-white text-[#0b4d5e] px-4   rounded-xl font-semibold border border-l-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex gap-26 ">
          {/* Top Links */}
          <div >
            <h3 className="font-semibold mb-3">Top Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="/Terms">Terms & Conditions</a></li>
              <li><a href="/Privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-start -mt-2 text-sm text-gray-400 ml-30">
        © 2023 Twinly AI, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
