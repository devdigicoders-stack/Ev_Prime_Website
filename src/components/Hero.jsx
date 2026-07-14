
const Hero = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-between py-1 lg:py-2 gap-4">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-[1.15] mb-3">
          Powering <br className="hidden md:block" />
          India's Future <br className="hidden md:block" />
          With <span className="text-green-600">Clean Energy</span>
        </h1>
        
        <p className="text-gray-600 text-sm lg:text-base mb-4 max-w-lg md:max-w-md lg:max-w-lg leading-relaxed font-medium">
          Bharat EV <span style={{color: '#EA851A'}}>Prime</span> is committed to building a sustainable ecosystem for electric vehicles with smart charging solutions across the nation.
        </p>
        
        <div className="hidden md:flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
            Explore More
          </button>
          <button className="bg-white hover:bg-green-50 text-green-600 border border-green-500 px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md text-sm">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 relative">
        <img 
          src="/hero.png" 
          alt="Electric Vehicle Charging Station" 
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[60vh] object-contain drop-shadow-2xl z-10 scale-110 lg:scale-[1.15] xl:scale-[1.2] origin-right"
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
        />
      </div>

      <div className="flex md:hidden flex-col gap-3 w-full mt-2 z-20 px-2 sm:px-0">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg text-sm w-full">
          Explore More
        </button>
        <button className="bg-white hover:bg-green-50 text-green-600 border border-green-500 px-6 py-3 rounded-full font-bold transition-all shadow-sm text-sm w-full">
          Contact Us
        </button>
      </div>
    </main>
  );
};

export default Hero;
