import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-[#0b4d5e] min-h-screen text-white px-4 sm:px-6 md:px-20 py-12">
      
      {/* Header: Logo + Navigation Links + Demo Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 flex-wrap gap-4">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold">Twinly</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center gap-4 sm:gap-8 flex-wrap">
          <a href="/" className="hover:underline">Home</a>
          <a href="/feature" className="hover:underline">Features</a>
          <a href="/blogs" className="hover:underline">Blog</a>
        </div>

        {/* Right: Book Demo Button */}
        <div className="flex-shrink-0">
          <a href="/Demo">
            <button className="bg-white rounded-2xl text-black px-6 py-3 cursor-pointer">
              Book Demo
            </button>
          </a>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy & Policy</h1>
        <p className="text-gray-300 text-sm sm:text-base">
          Id sagittis bibendum tortor praesent. Sit viverra.
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-8 text-sm sm:text-base text-gray-100 max-w-5xl mx-auto">

        <div>
          <h2 className="font-semibold text-2xl mb-2">1.1 Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by Twinly.ai, you agree to comply with and be bound by 
            these Terms and Conditions. If you do not agree with any part of these terms, you may not use our 
            services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.2 User Accounts</h2>
          <p><strong>1.2.1 Registration:</strong> To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information.</p>
          <p><strong>1.2.2 Accurate Information:</strong> You agree to provide accurate and complete information during the registration process and to update such information to keep it current.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.3 Use of Services</h2>
          <p><strong>1.3.1 Lawful Use:</strong> Users must use Twinly.ai services for lawful purposes only and in compliance with all applicable laws and regulations.</p>
          <p><strong>1.3.2 Prohibited Activities:</strong> Users are prohibited from engaging in any activities that may disrupt or interfere with the functionality of the platform.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.4 Intellectual Property</h2>
          <p><strong>1.4.1 Ownership:</strong> All content and materials on Twinly.ai, including but not limited to text, graphics, logos, and software, are the property of Twinly.ai and are protected by intellectual property laws.</p>
          <p><strong>1.4.2 License:</strong> Users are granted a limited, non-exclusive, and revocable license to access and use the services for their intended purposes.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.5 Termination</h2>
          <p>Twinly.ai reserves the right to terminate or suspend access to its services at any time for any reason without notice.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.6 Disclaimer of Warranties</h2>
          <p>Twinly.ai services are provided on an “as-is” and “as-available” basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or suitability of the services.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 mt-6">1.7 Governing Law</h2>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the [appropriate courts].</p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
