import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Find",
      description: "Search for charging stations or services near you.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Book",
      description: "Book your slot or service in just a few clicks.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Pay",
      description: "Make secure payments using multiple options.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Charge / Service",
      description: "Enjoy seamless charging or get your service done.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Drive Green",
      description: "Power your journey with clean and sustainable energy.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="bg-green-50/70 rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-sm border border-green-100">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              How It Works
            </h2>
            <div className="w-10 h-1 bg-green-500 rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="relative">
            
            {/* Dashed Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-green-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#126b34] flex items-center justify-center shadow-lg mb-4 ring-4 ring-white">
                    {step.icon}
                  </div>
                  
                  {/* Number */}
                  <span className="text-green-500 font-bold text-sm mb-2">
                    {step.number}
                  </span>
                  
                  {/* Title & Description */}
                  <h4 className="text-gray-900 font-bold text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                  
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
