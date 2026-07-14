
const OurStory = () => {
  return (
    <section className="py-10 md:py-16 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="text-green-600 font-bold text-xs tracking-widest uppercase mb-4">
              Our Story
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Driving Change, <br className="hidden md:block" />
              One Charge At A Time
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-medium">
              Bharat EV Prime was born out of a simple idea - to make EV charging convenient, reliable, and accessible for all. We started our journey with a small network and a big dream. Today, we are proud to be one of India's fastest-growing EV charging networks.
            </p>
            
            <button className="flex items-center gap-3 bg-white text-gray-900 border border-green-600 px-6 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md text-sm group hover:bg-green-50">
              Our Journey
              <div className="border border-green-600 rounded-full p-1 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </button>
          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl drop-shadow-md group">
              <img 
                src="/card3.png" 
                alt="Bharat EV Prime Charging Station" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional subtle overlay for better image depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
