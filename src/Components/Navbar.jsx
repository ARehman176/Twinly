import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#0F5265] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-around mr-133 gap-80">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Twinly</h1>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row sm:space-x-6 text-white font-medium text-base items-center gap-2 sm:gap-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/feature" className="hover:underline">Features</a>
          <a href="/blogs" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Partners</a>
        </nav>
      </div>
    </div>
  );
}
