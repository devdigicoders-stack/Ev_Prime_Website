import React, { useState } from 'react';

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const categories = [
    {
      name: 'All Posts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      name: 'EV Technology',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Charging Guide',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <rect x="7" y="4" width="10" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 16h4M12 11V7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9v2a2 2 0 002 2h0a2 2 0 002-2V7" />
        </svg>
      )
    },
    {
      name: 'Sustainability',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.033A18.91 18.91 0 0119.536 12C20.803 9.4 20.254 6.136 17.5 3.382c-2.754-2.754-6.018-3.303-8.618-2.036C3.96 4.316 3 8.358 3 12c0 2.946.852 5.923 2.967 8.033" />
        </svg>
      )
    },
    {
      name: 'Industry News',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Tips & Tricks',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'Events',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="pt-8 pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Categories Bar */}
        <div className="bg-gray-50 border border-gray-100 rounded-full p-2.5 overflow-x-auto custom-scrollbar shadow-sm">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.name;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? 'bg-[#126b34] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-200/60 hover:text-gray-900'
                    }
                  `}
                >
                  <span className={`${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogCategories;
