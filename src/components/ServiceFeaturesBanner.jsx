import React from 'react';

const ServiceFeaturesBanner = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-white stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          {/* Small leaf inside shield */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-2-3l2-2 2 2" />
        </svg>
      ),
      title: "Safe & Secure",
      description: "100% secure payments and reliable service."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3l2 2m0 0l-2 2m2-2H4" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12h2m-2-4.5l1.5-1.5m-15 0L5 4.5M2 12h2m1.5 4.5L4 18M12 20v2m4.5-1.5L18 20" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer assistance."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5-2V4l5 2 6-2 5 2v14l-5-2-6 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v16m6-18v16" />
          {/* Location Pin overlay */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.5 0-2.5-1-2.5-2.5S10.5 6 12 6s2.5 1 2.5 2.5S13.5 11 12 11z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 2-2.5 4.5-2.5 4.5S12 13 12 11z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11l-2.5 4.5S12 18 12 11" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16c0 0-3.5-4-3.5-7.5a3.5 3.5 0 017 0C15.5 12 12 16 12 16z" fill="currentColor"/>
          <circle cx="12" cy="8.5" r="1.5" fill="none" stroke="#126b34" strokeWidth="2" />
        </svg>
      ),
      title: "Pan India Network",
      description: "Extensive network across 25+ cities."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5C11 5 3 5 3 13C3 21 11 21 11 21L12.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5C13 5 21 5 21 13C21 21 13 21 13 21L11.5 19.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12" />
        </svg>
      ),
      title: "Eco Friendly",
      description: "Committed to a cleaner and greener India."
    }
  ];

  return (
    <section className="pb-16 md:pb-24 pt-4 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="bg-[#126b34] rounded-[2rem] shadow-xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-5 p-8 lg:p-10 transition-colors hover:bg-white/5
                  ${index === 0 ? 'lg:pl-12' : ''}
                  ${index === 3 ? 'lg:pr-12' : ''}
                `}
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                
                <div className="flex flex-col text-left">
                  <h4 className="text-white font-bold text-base md:text-lg mb-1 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-green-100 text-xs md:text-sm leading-snug font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ServiceFeaturesBanner;
