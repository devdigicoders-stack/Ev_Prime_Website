import React from 'react';
import Footer from '../components/Footer';
import BlogCategories from '../components/BlogCategories';
import BlogPosts from '../components/BlogPosts';
import BlogShareCTA from '../components/BlogShareCTA';

const BlogHero = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-between py-1 lg:py-2 gap-4">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-0 order-2 md:order-1 mt-8 md:mt-0">
        
        <div className="bg-green-100/80 text-green-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wider shadow-sm w-max">
          OUR BLOG
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-[1.15] mb-4">
          Insights That <br className="hidden md:block" />
          Drive The <span className="text-green-600">Future</span>
        </h1>
        
        <p className="text-gray-600 text-sm lg:text-base mb-10 max-w-lg leading-relaxed font-medium">
          Stay updated with the latest trends, tips, news and <br className="hidden md:block" />
          stories from the world of electric mobility.
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 lg:p-4 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-900 font-extrabold text-base md:text-lg">120+</span>
              <span className="text-gray-600 text-xs font-medium">Articles</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 lg:p-4 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-900 font-extrabold text-base md:text-lg">25K+</span>
              <span className="text-gray-600 text-xs font-medium">Readers</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 lg:p-4 shadow-sm border border-white/50">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" className="hidden"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" className="hidden"/>
                
                {/* Leaf Icon */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.033A18.91 18.91 0 0119.536 12C20.803 9.4 20.254 6.136 17.5 3.382c-2.754-2.754-6.018-3.303-8.618-2.036C3.96 4.316 3 8.358 3 12c0 2.946.852 5.923 2.967 8.033" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.946 0-5.923-.852-8.033-2.967C1.852 15.923 1 12.946 1 10c0-3.642.96-7.684 5.882-5.654" className="hidden" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l9-9" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-900 font-extrabold text-base md:text-lg">10+</span>
              <span className="text-gray-600 text-xs font-medium">Categories</span>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0 relative order-1 md:order-2">
        <img 
          src="/hero.png" 
          alt="Blog Insights" 
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[60vh] object-contain drop-shadow-2xl z-10 scale-110 lg:scale-[1.15] xl:scale-[1.2] origin-right"
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
        />
      </div>
    </main>
  );
};

const Blog = () => {
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
          <BlogHero />
        </div>
      </div>
      
      <BlogCategories />
      <BlogPosts />
      <BlogShareCTA />
      <Footer />
    </div>
  );
};

export default Blog;
