import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Reliable",
      description: "Quick charging with high uptime network."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safe & Secure",
      description: "Advanced safety measures for worry-free charging."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Wide Network",
      description: "Expanding our network across cities and highways."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5C11 5 3 5 3 13C3 21 11 21 11 21L12.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5C13 5 21 5 21 13C21 21 13 21 13 21L11.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12" />
        </svg>
      ),
      title: "Eco Friendly",
      description: "100% green energy for a sustainable tomorrow."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-gray-50/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Choose Bharat EV Prime?
          </h2>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-green-100/70 p-4 rounded-full flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
