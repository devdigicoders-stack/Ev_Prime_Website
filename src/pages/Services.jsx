import React from 'react';
import Footer from '../components/Footer';
import ServiceCards from '../components/ServiceCards';
import ServiceFeaturesBanner from '../components/ServiceFeaturesBanner';
import ServicesDetail from '../components/ServicesDetail';
import HowItWorks from '../components/HowItWorks';
import ServicesCTA from '../components/ServicesCTA';

const ServicesHero = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-between py-1 lg:py-2 gap-4">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-0">
        
        <div className="bg-green-100/80 text-green-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wider shadow-sm">
          OUR SERVICES
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-[1.15] mb-4">
          Smart Solutions <br className="hidden md:block" />
          For Your <span className="text-green-600">EV Journey</span>
        </h1>
        
        <p className="text-gray-600 text-sm lg:text-base mb-8 max-w-lg md:max-w-md lg:max-w-lg leading-relaxed font-medium">
          Bharat EV Prime offers a complete range of services to make your electric mobility experience seamless, reliable, and future-ready.
        </p>
        
        <div className="hidden md:flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
            Explore Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-8 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md text-sm">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 relative">
        <img 
          src="/hero.png" 
          alt="Smart EV Solutions" 
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[60vh] object-contain drop-shadow-2xl z-10 scale-110 lg:scale-[1.15] xl:scale-[1.2] origin-right"
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
        />
      </div>

      <div className="flex md:hidden flex-col gap-3 w-full mt-2 z-20 px-2 sm:px-0">
        <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg text-sm w-full">
          Explore Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-6 py-3 rounded-full font-bold transition-all shadow-sm text-sm w-full">
          Contact Us
        </button>
      </div>
    </main>
  );
};

const Services = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <div className="min-h-[85vh] bg-green-50/30 relative flex flex-col">
        {/* Wave backgrounds matching the Home & About page */}
        <div className="absolute bottom-0 left-0 w-full z-0 h-[400px] pointer-events-none hidden lg:block overflow-hidden">
           <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full object-cover object-bottom" preserveAspectRatio="none">
              <path fill="#22c55e" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,149.3C672,139,768,149,864,181.3C960,213,1056,267,1152,272C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-0 h-48 lg:h-[400px] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="#4ade80" fillOpacity="0.4" d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,192C672,181,768,203,864,229.3C960,256,1056,288,1152,288C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-0 h-48 lg:h-[400px] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="#16a34a" fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col flex-1 pb-20 pt-20 lg:pt-24">
          <ServicesHero />
        </div>
      </div>
      
      <ServiceCards />
      <ServiceFeaturesBanner />
      <ServicesDetail />
      <HowItWorks />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
