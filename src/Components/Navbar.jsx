
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#0F5265] text-white font-sans ">
      {/* Header */}
      <div className="flex items-center  ">
        <h1 className="text-2xl font-bold mt-5 ml-18 ">Twinly</h1>
        <nav className=" space-x-10 text-white font-medium mt-5 ml-112 ">
          <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/blogs">Blog</a>
          <a href="#">Partners</a>
        </nav>
      </div>

     
    </div>
  );
}
