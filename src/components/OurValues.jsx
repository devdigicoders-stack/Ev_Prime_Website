
const OurValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 21H9a4 4 0 01-4-4v-1a2 2 0 012-2h10a2 2 0 012 2v1a4 4 0 01-4 4z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2-1.5-3-3-3s-3 1-3 3 1.5 3 3 3 3-1 3-3zM18 11c0-2-1.5-3-3-3s-3 1-3 3 1.5 3 3 3 3-1 3-3z" className="hidden"/>
          {/* Custom Customer First Icon: Heart above two people */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-1.5-1.5-4-1.5-5.5 0a3.8 3.8 0 000 5.4l5.5 5.5 5.5-5.5a3.8 3.8 0 000-5.4c-1.5-1.5-4-1.5-5.5 0z" className="hidden" />
          <g transform="scale(0.8) translate(3, -2)">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.5-1.5-4-1.5-5.5 0a3.8 3.8 0 000 5.4l5.5 5.5 5.5-5.5a3.8 3.8 0 000-5.4c-1.5-1.5-4-1.5-5.5 0z" fill="none"/>
             <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
             <circle cx="8.5" cy="11" r="3" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M16 8.13a4 4 0 010 5.74" />
          </g>
        </svg>
      ),
      title: "Customer First",
      description: "We put our customers at the heart of everything we do."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" className="hidden" />
          {/* Handshake approximation */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.07-2.14-1-4-1-4s-2 1.86-1 4c-.5 1-1 1.62-1 3a2.5 2.5 0 001.5 2.5z" className="hidden"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 2m-2-2l2 2" className="hidden"/>
          <g transform="scale(1.1) translate(-1, -1)">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 13.5l1.5-1.5c1-1 2.5-1 3.5 0l1 1c1 1 1 2.5 0 3.5l-3.5 3.5c-1 1-2.5 1-3.5 0l-4-4c-1-1-1-2.5 0-3.5l1-1c1-1 2.5-1 3.5 0l1.5 1.5"/>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 13.5L9 17l-3-3 3.5-3.5"/>
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11l-3 3" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-3 3" />
          </g>
        </svg>
      ),
      title: "Integrity",
      description: "We believe in honesty, transparency and strong ethics."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace new technologies to build smarter solutions."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-2 0-3 1.5-3 3 0 1 1 2 2 2s2-1 2-2-1-3-1-3z" className="hidden"/>
          {/* Leaf overlay */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-3 0-5 2.5-5 5.5 0 2 1.5 3.5 3 3.5s3.5-1.5 3.5-3.5c0-3-1.5-5.5-1.5-5.5z" />
        </svg>
      ),
      title: "Sustainability",
      description: "We are committed to protecting our planet for a better future."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="bg-[#f2faf5] rounded-[2.5rem] py-12 md:py-16 px-6 lg:px-10 border border-green-50/50">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Values
            </h2>
            <div className="w-10 h-1 bg-green-500 rounded-full"></div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/60">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 md:px-8 
                  ${index === 0 || index === 1 ? 'pb-8 sm:pb-0' : ''} 
                  ${index === 2 || index === 3 ? 'pt-8 lg:pt-0' : ''}
                  ${index === 2 ? 'sm:pt-8' : ''}`}
              >
                {value.icon}
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default OurValues;
