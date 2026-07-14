import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm0 4h1v1H9v-1zm0 4h1v1H9v-1zm4-8h1v1h-1V7zm0 4h1v1h-1v-1zm0 4h1v1h-1v-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a2 2 0 012-2h1a2 2 0 012 2v2a2 2 0 01-2 2h-3z" />
        </svg>
      ),
      title: "EV Charging Solutions",
      description: "Access to the largest network of fast and reliable charging stations across India.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4" className="hidden"/>
          {/* Small plug addition */}
          <circle cx="12" cy="15" r="2" />
          <path d="M12 17v2" />
        </svg>
      ),
      title: "Home Charging Solutions",
      description: "Convenient and safe home charging setups with professional installation.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm0 4h1v1H9v-1zm0 4h1v1H9v-1zm4-8h1v1h-1V7zm0 4h1v1h-1v-1zm0 4h1v1h-1v-1z" className="hidden"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21v-8a2 2 0 012-2h4a2 2 0 012 2v8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V9a2 2 0 012-2h12a2 2 0 012 2v12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 11h4M10 15h4" />
        </svg>
      ),
      title: "Corporate Charging Solutions",
      description: "Scalable charging infrastructure for businesses, offices and commercial spaces.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Expert maintenance, 24/7 support and service to keep your EV running perfectly.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 11h16M4 15h16M4 19h16" className="hidden"/>
          <rect x="3" y="7" width="18" height="12" rx="2" ry="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
          <circle cx="12" cy="13" r="2" />
        </svg>
      ),
      title: "Battery Health Check",
      description: "Advanced diagnostics and battery health analysis for long-lasting performance.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Grid Layout - using xl:grid-cols-5 for the 5-column layout on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <a href="#" className="flex items-center gap-2 text-green-600 font-bold text-sm mt-auto group-hover:text-green-700 transition-colors">
                Learn More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;
