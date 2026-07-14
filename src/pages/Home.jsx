import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import AppSection from '../components/AppSection';
import ChargingSolutions from '../components/ChargingSolutions';
import Sustainability from '../components/Sustainability';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <div className="min-h-screen bg-green-50/30 relative flex flex-col">
      {/* Wave Background behind the hero stats */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col min-h-screen pt-20 lg:pt-24">
        <Hero />
        <Stats />
      </div>
      </div>
      <Features />
      <AppSection />
      <ChargingSolutions />
      <Sustainability />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
