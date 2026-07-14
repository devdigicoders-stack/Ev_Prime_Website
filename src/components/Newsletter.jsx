
const Newsletter = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative bg-gradient-to-r from-green-50 via-green-50 to-green-100 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-green-100/50 shadow-sm">
          
          {/* Left Image Area */}
          <div className="w-full md:w-5/12 flex justify-center items-end pt-8 md:pt-12 px-6">
            <img 
              src="/card1.png" 
              alt="EV Charging" 
              className="w-full h-auto object-contain drop-shadow-md rounded-xl"
              style={{ maxHeight: '220px', objectPosition: 'bottom' }}
            />
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:pr-16 lg:py-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Stay Updated With <span style={{ color: '#EA851A' }}>Bharat EV Prime</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Subscribe to our newsletter for the latest updates, offers and news.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-sm text-gray-700 bg-white"
                required
              />
              <button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-green-400 opacity-10 blur-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
