import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-12 md:py-20 relative z-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#126b34] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">
          
          {/* Subtle Background Watermark (Car and charger) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 100" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              {/* Charger */}
              <rect x="30" y="20" width="25" height="60" rx="3" />
              <rect x="35" y="30" width="15" height="15" rx="1" />
              <circle cx="42.5" cy="65" r="4" />
              <path d="M 55 50 Q 80 50 80 70" />
              
              {/* Car */}
              <path d="M 90 70 L 170 70 L 170 50 L 155 40 L 105 40 L 90 50 Z" />
              <rect x="100" y="42" width="60" height="8" rx="2" />
              {/* Headlights */}
              <circle cx="100" cy="55" r="4" />
              <circle cx="160" cy="55" r="4" />
              {/* Grille */}
              <path d="M 115 55 L 145 55" />
              <path d="M 115 60 L 145 60" />
              {/* Wheels */}
              <rect x="95" y="65" width="10" height="10" rx="3" />
              <rect x="155" y="65" width="10" height="10" rx="3" />
            </svg>
          </div>

          {/* Left Content */}
          <div className="text-center md:text-left z-10 mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              Let's Build A Greener Tomorrow Together
            </h2>
            <p className="text-green-100 text-sm md:text-base font-medium">
              Join hands with E-Bharat EV and be a part of India's clean energy revolution.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 flex-shrink-0">
            <button className="flex items-center gap-4 bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group">
              <span className="text-sm md:text-base">Get Started Today</span>
              <div className="bg-green-100/50 rounded-full p-2 text-green-700 group-hover:bg-[#126b34] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
