import React from 'react';

const AboutStats = () => {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8 mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm0 4h1v1H9v-1zm0 4h1v1H9v-1zm4-8h1v1h-1V7zm0 4h1v1h-1v-1zm0 4h1v1h-1v-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a2 2 0 012-2h1a2 2 0 012 2v2a2 2 0 01-2 2h-3z" />
        </svg>
      ),
      number: "1200+",
      label: "Charging Stations"
    },
    {
      icon: (
        <svg className="w-8 h-8 mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: "50K+",
      label: "Happy Users"
    },
    {
      icon: (
        <svg className="w-8 h-8 mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          {/* Leaf outline instead of heart */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8 3-8-3v7c0 6 8 10 8 10z" className="hidden" /> 
        </svg>
      ),
      // Real leaf icon
      customIcon: (
        <svg className="w-8 h-8 mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5C11 5 3 5 3 13C3 21 11 21 11 21L12.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5C13 5 21 5 21 13C21 21 13 21 13 21L11.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12" />
        </svg>
      ),
      number: "25+",
      label: "Cities Covered"
    },
    {
      icon: (
        <svg className="w-8 h-8 mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      number: "100%",
      label: "Green Energy"
    }
  ];

  return (
    <section className="pb-16 md:pb-24 pt-4 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="bg-[#126b34] rounded-3xl relative overflow-hidden shadow-lg border border-green-800">
          
          {/* Subtle Background Watermark */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none opacity-[0.07]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white transform translate-x-12 scale-150">
              <path d="M17.53 2.47a1.002 1.002 0 00-.77-.23C13.23 2.75 6 4.7 6 12a1 1 0 001 1h.77a8.55 8.55 0 00.93 3.65l-3.4 3.4a1 1 0 101.4 1.42l3.42-3.41A8.47 8.47 0 0013.9 19c6.62 0 9.07-6.28 9.32-9.66.07-1.12.06-2.25-.01-3.37a1 1 0 00-.54-.87c-1.39-.77-3.46-1.74-5.14-2.63zm-4.3 14.4c-3.15 0-5.83-2.12-6.52-5.07a8.7 8.7 0 011.66-1.12l4.8 4.81c.2.2.46.3.71.3a1 1 0 00.71-1.7l-4.75-4.77c3.96-1.8 8.16-2.58 10.37-2.9-1.25 4.54-3.64 10.45-6.98 10.45z" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 relative z-10 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-white/20 py-8 md:py-12 px-6">
            
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center text-white text-center 
                  ${index === 0 || index === 1 ? 'pb-8 md:pb-0' : ''} 
                  ${index === 2 || index === 3 ? 'pt-8 md:pt-0' : ''} 
                  px-4`}
              >
                {stat.customIcon || stat.icon}
                <h3 className="text-3xl md:text-4xl font-extrabold mb-1 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-green-100 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutStats;
