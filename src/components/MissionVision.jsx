import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-10 md:py-16 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          {/* Leaf Icon */}
          <div className="text-green-600 mb-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.53 2.47a1.002 1.002 0 00-.77-.23C13.23 2.75 6 4.7 6 12a1 1 0 001 1h.77a8.55 8.55 0 00.93 3.65l-3.4 3.4a1 1 0 101.4 1.42l3.42-3.41A8.47 8.47 0 0013.9 19c6.62 0 9.07-6.28 9.32-9.66.07-1.12.06-2.25-.01-3.37a1 1 0 00-.54-.87c-1.39-.77-3.46-1.74-5.14-2.63zm-4.3 14.4c-3.15 0-5.83-2.12-6.52-5.07a8.7 8.7 0 011.66-1.12l4.8 4.81c.2.2.46.3.71.3a1 1 0 00.71-1.7l-4.75-4.77c3.96-1.8 8.16-2.58 10.37-2.9-1.25 4.54-3.64 10.45-6.98 10.45z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Mission & Vision
          </h2>
          
          <div className="w-12 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Mission Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100/60 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="bg-green-100/60 p-5 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Target Icon */}
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.092 2.022-.273 3m-1.514 1.14A14.02 14.02 0 0112 21c-3.866 0-7-3.134-7-7a7 7 0 1114 0" />
                <circle cx="12" cy="11" r="2" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                To accelerate the adoption of electric vehicles by providing accessible, reliable, and affordable charging solutions for everyone, everywhere.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100/60 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="bg-green-100/60 p-5 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Eye Icon */}
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                To build India's most trusted EV charging network and create a cleaner, greener and sustainable future for generations to come.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
