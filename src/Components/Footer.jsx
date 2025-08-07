import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b4d5e] text-white py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Left: Logo and Newsletter */}
        <div className="w-full md:w-1/2 md:mr-10 sm:ml-5">
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
            <form className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 border border-white/30 rounded-md p-1 sm:w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none text-white placeholder:text-white bg-transparent"
              />
              <button
                type="submit"
                className="bg-white text-[#0b4d5e] px-4 py-2 rounded-md  font-semibold border border-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right: Links */}
        <div className="w-full md:w-1/4 flex flex-col sm:flex-row justify-between gap-10">
          {/* Top Links */}
          <div>
            <h3 className="font-semibold mb-3">Top Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="sm:mr-8">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="/Terms">Terms & Conditions</a></li>
              <li><a href="/Privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-start text-sm text-gray-400 sm:ml-5">
        © 2023 Twinly AI, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
