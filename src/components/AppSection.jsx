import React from 'react';

const AppSection = () => {
  const appFeatures = [
    {
      title: "Real-time Availability",
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Easy Navigation",
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Multiple Payment Options",
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-8">

          {/* Left — Mobile Phone Image */}
          <div className="w-full lg:w-[28%] xl:w-[30%] flex justify-center lg:justify-start flex-shrink-0">
            <img
              src="/mobile.png"
              alt="Bharat EV Prime App - Find Charging Stations"
              className="w-64 sm:w-72 md:w-80 lg:w-full object-contain drop-shadow-2xl lg:scale-110 origin-center"
              style={{ maxHeight: '520px' }}
            />
          </div>

          {/* Center Content */}
          <div className="w-full lg:w-[44%] xl:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left py-4 z-20">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Find. Charge. <span className="text-green-600">Go.</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Locate nearby charging stations, check availability and navigate with ease using our smart app.
            </p>

            {/* Feature Icons Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10 w-full max-w-sm mx-auto lg:mx-0">
              {appFeatures.map((feat, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-green-50/80 border border-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {feat.icon}
                  </div>
                  <p className="text-[13px] md:text-sm font-medium text-slate-700 text-center leading-tight">{feat.title}</p>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 justify-center lg:justify-start">
              {/* Google Play */}
              <a href="#" className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.33.18.7.24 1.07.18L14.9 12 11.1 8.2 3.18 23.76zM20.7 10.37l-2.56-1.47-3.48 3.1 3.48 3.1 2.6-1.49c.74-.43.74-1.51-.04-1.74zM1.42.9C1.16 1.18 1 1.6 1 2.14v19.72c0 .54.16.96.42 1.24l.07.07L11.1 13.5v-.24L1.49.83l-.07.07zM14.9 12L4.25.24c-.37-.06-.74 0-1.07.18L14.9 12z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-medium leading-none mb-1">GET IT ON</p>
                  <p className="text-sm font-bold leading-none">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.99 2.63 3.99 2.66 4l-.08.27zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-medium leading-none mb-1">Download on the</p>
                  <p className="text-sm font-bold leading-none">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Charging Station Illustration */}
          <div className="w-full lg:w-[28%] xl:w-[30%] flex justify-center lg:justify-end flex-shrink-0 relative">
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Soft green circle background */}
              <div className="absolute inset-0 bg-green-50 rounded-full scale-[1.2] -z-10 blur-md opacity-60"></div>
              <img
                src="/play.png"
                alt="EV Charging Station Illustration"
                className="w-64 sm:w-72 md:w-80 lg:w-full object-contain relative z-10 lg:scale-110 origin-center lg:origin-right"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppSection;
