import React from 'react';

const BlogShareCTA = () => {
  return (
    <section className="pb-16 md:pb-24 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-green-50 border border-green-100 rounded-3xl overflow-hidden relative shadow-sm">
          
          {/* Background Decorations (Leaves) */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-60">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 80 100 Q 80 60 100 50 Q 85 45 70 65 Q 60 70 80 100" fill="#a7f3d0" />
              <path d="M 90 100 Q 85 75 100 70 Q 95 65 85 80 Q 80 85 90 100" fill="#86efac" />
              <path d="M 60 100 Q 55 60 30 70 Q 40 60 55 75 Q 60 85 60 100" fill="#a7f3d0" />
            </svg>
          </div>
          <div className="absolute left-0 bottom-0 pointer-events-none opacity-60">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 100 Q 20 60 0 50 Q 15 45 30 65 Q 40 70 20 100" fill="#a7f3d0" />
              <path d="M 10 100 Q 15 75 0 70 Q 5 65 15 80 Q 20 85 10 100" fill="#86efac" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 lg:px-16 relative z-10 gap-8">
            
            {/* Left Image (Charger representation) */}
            <div className="hidden lg:block w-32 flex-shrink-0 relative">
               <div className="absolute -bottom-16 -left-8 w-40 h-40">
                 {/* Reusing hero image and masking just the charger side approximately */}
                 <img src="/hero.png" alt="EV Charger" className="w-[300%] max-w-none object-cover object-left" style={{ clipPath: 'inset(0 60% 0 0)' }} />
               </div>
            </div>

            {/* Middle Content */}
            <div className="flex-grow text-center md:text-left flex flex-col justify-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Share Your Story With Us
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                Have an EV experience or insight to share? We'd love to feature it on our blog and inspire others.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button className="flex items-center gap-3 bg-transparent border-2 border-green-600 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md">
                Submit Your Article
                <div className="w-6 h-6 rounded-full border border-green-600 text-green-600 flex items-center justify-center group-hover:border-white group-hover:text-white transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogShareCTA;
