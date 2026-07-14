import Footer from '../components/Footer';
import ContactCards from '../components/ContactCards';
import ContactFormMap from '../components/ContactFormMap';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

const ContactHero = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-between py-1 lg:py-2 gap-4">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-0 order-2 md:order-1 mt-8 md:mt-0">
        
        <div className="bg-green-100/80 text-green-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wider shadow-sm w-max">
          CONTACT US
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-[1.15] mb-4">
          We're Here <br className="hidden md:block" />
          To <span className="text-green-600">Help You</span>
        </h1>
        
        <p className="text-gray-600 text-sm lg:text-base mb-10 max-w-lg leading-relaxed font-medium">
          Have a question, suggestion, or need support? <br className="hidden md:block" />
          Our team is ready to assist you.
        </p>
        
        {/* Support Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center md:items-start bg-white/80 backdrop-blur-md rounded-2xl p-4 lg:p-5 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243-2.829a4 4 0 115.656 5.656L6.343 21H3v-3.343l8.485-8.486z" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" className="hidden"/>
                
                {/* Headset Icon */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h1m-4-4v-4m0 4v3m16-3a4 4 0 01-4 4h-1m4-4v-4m0 4v3m-8-5v-5a7 7 0 00-14 0v5" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 11a8 8 0 0116 0v2m-16-2v2m16-2v4a2 2 0 01-2 2h-1M4 11v4a2 2 0 002 2h1" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 19h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2M4 15v4a2 2 0 002 2h2m-2-6h2m10 0v6" className="hidden" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-2 0-3-1-3-3" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-sm mb-1">24/7 Support</h4>
            <p className="text-gray-600 text-xs font-medium">We're always here<br className="hidden md:block"/> for you</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center md:items-start bg-white/80 backdrop-blur-md rounded-2xl p-4 lg:p-5 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-sm mb-1">Quick Response</h4>
            <p className="text-gray-600 text-xs font-medium">Get answers<br className="hidden md:block"/> instantly</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center md:items-start bg-white/80 backdrop-blur-md rounded-2xl p-4 lg:p-5 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-2-3l2-2 2 2" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-sm mb-1">Reliable Service</h4>
            <p className="text-gray-600 text-xs font-medium">Your satisfaction is<br className="hidden md:block"/> our priority</p>
          </div>

        </div>

      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0 relative order-1 md:order-2">
        <img 
          src="/hero.png" 
          alt="Contact Support" 
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[60vh] object-contain drop-shadow-2xl z-10 scale-110 lg:scale-[1.15] xl:scale-[1.2] origin-right"
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
        />
      </div>
    </main>
  );
};

const Contact = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <div className="min-h-[85vh] bg-green-50/30 relative flex flex-col">
        {/* Wave backgrounds matching the other pages */}
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
          <ContactHero />
        </div>
      </div>
      
      <ContactCards />
      <ContactFormMap />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Contact;
