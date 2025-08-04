import React from 'react';

const Terms = () => {
  return (
    <div className="bg-[#0b4d5e] min-h-screen text-white px-6 py-12 md:px-20">
        <div className='flex justify-between'>
            <div>
                <h1 className='text-3xl'>Twinly</h1>
                </div>
            <div>
              <a href="/Demo">
                <button className='bg-white rounded-2xl text-black px-6 py-3 mb-4 -mt-4'>
      Book Demo
    </button>
    </a>
            </div>
        </div>
        <div className='flex justify-center gap-8 mb-10'>
             <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/blogs">Blog</a>
        </div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-gray-300 text-sm md:text-base">
          Id sagittis bibendum tortor praesent. Sit viverra.
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-8 text-sm md:text-base text-gray-100">
        <div >
          <h2 className="font-semibold text-2xl mb-1 ml-62 ">1.1 Acceptance of Terms</h2>
          <p className='ml-62 text-xl '>
            By accessing and using the services provided by Twinly.ai, you agree to comply with and be bound by <br/>
            these Terms and Conditions. If you do not agree with any part of these terms, you may not use our<br/>
            services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl ml-62 mb-2 mt-10 ">1.2 User Accounts</h2>
          <p className='ml-62 text-xl mb-2'><strong>1.2.1 Registration:</strong> To access certain features, you may need to create an account. You are responsible for <br/>
           maintaining the confidentiality of your account information.</p>
          <p className='ml-62 text-xl'><strong>1.2.2 Accurate Information:</strong> You agree to provide accurate and complete information during the <br/> 
          registration process and to update such information to keep it current.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl ml-62 mb-2 mt-10">1.3 Use of Services</h2>
          <p className='ml-62 text-xl mb-2'><strong>1.3.1 Lawful Use:</strong> Users must use Twinly.ai services for lawful purposes only and in compliance with all<br/>
           applicable laws and regulations.</p>
          <p className=' ml-62 text-xl '><strong>1.3.2 Prohibited Activities:</strong> Users are prohibited from engaging in any activities that may disrupt or <br/>
           interfere with the functionality of the platform.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl ml-62 mb-2 mt-10">1.4 Intellectual Property</h2>
          <p className='ml-62 text-xl mb-2'><strong>1.4.1 Ownership:</strong> All content and materials on Twinly.ai, including but not limited to text, graphics, logos,<br/> 
          and software, are the property of Twinly.ai and are protected by intellectual property laws.</p>
          <p className='ml-62 text-xl mb-2'><strong>1.4.2 License:</strong> Users are granted a limited, non-exclusive, and revocable license to access and use the <br/>
           services for their intended purposes.</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 ml-62 mt-10">1.5 Termination</h2>
          <p className='ml-62 text-xl mb-2'>
            Twinly.ai reserves the right to terminate or suspend access to its services at any time for any reason <br/> without notice.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 ml-62 mt-10">1.6 Disclaimer of Warranties</h2>
          <p className='ml-62 text-xl mb-2'>
            Twinly.ai services are provided on an “as-is” and “as-available” basis. We make no warranties, expressed ,<br/>
             or implied, regarding the accuracy, reliability, or suitability of the services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-2 ml-62 mt-10">1.7 Governing Law</h2>
          <p className='text-xl ml-62 '>
            These Terms and Conditions are governed by and construed in accordance with the laws of [Jurisdiction].<br/>
            Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction<br/>
            of the [appropriate courts].
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;