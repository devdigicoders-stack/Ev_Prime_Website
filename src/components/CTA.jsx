import React from 'react';

const CTA = () => {
  return (
    <section className="py-10 md:py-16 relative z-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#126b34] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">
          
          {/* Subtle Background Watermark */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 opacity-20 pointer-events-none">
            {/* Hands holding globe/leaf SVG approximation */}
            <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <circle cx="50" cy="40" r="25" />
              <path d="M50 15v50" />
              <path d="M25 40h50" />
              <path d="M35 25c10 10 10 20 15 30" />
              <path d="M65 25c-10 10-10 20-15 30" />
              {/* Hands */}
              <path d="M20 70c10-10 20-5 30 5 10-10 20-15 30-5M15 80c10-5 25 0 35 10 10-10 25-15 35-10" />
            </svg>
          </div>

          {/* Left Content */}
          <div className="text-center md:text-left z-10 mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              Be A Part Of The Green Revolution
            </h2>
            <p className="text-green-100 text-sm md:text-base font-medium">
              Together, let's build a sustainable future with clean energy.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 flex-shrink-0">
            <button className="flex items-center gap-4 bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group">
              <span className="text-sm md:text-base">Get Started Today</span>
              <div className="bg-[#66b379] rounded-full p-2 text-white group-hover:bg-[#126b34] transition-colors">
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

export default CTA;
