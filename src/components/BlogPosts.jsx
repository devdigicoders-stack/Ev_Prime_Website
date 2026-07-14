import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      image: "/images/ev_charging.png",
      category: "EV Technology",
      title: "How Fast Charging Technology Is Shaping The EV Future",
      excerpt: "Explore how fast charging is revolutionizing EV travel and reducing range anxiety for drivers.",
      date: "May 20, 2024",
      readTime: "5 min read"
    },
    {
      image: "/images/corporate_charging.png",
      category: "Sustainability",
      title: "Electric Vehicles And A Greener, Cleaner Tomorrow",
      excerpt: "EVs are more than just a trend — they're a step toward a sustainable planet for future generations.",
      date: "May 18, 2024",
      readTime: "6 min read"
    },
    {
      image: "/images/smart_monitoring.png",
      category: "Charging Guide",
      title: "How To Find The Best EV Charging Stations Near You",
      excerpt: "A complete guide to finding reliable, fast, and affordable charging stations on the go.",
      date: "May 15, 2024",
      readTime: "4 min read"
    },
    {
      image: "/images/home_charger.png",
      category: "Tips & Tricks",
      title: "Top 7 Tips To Maximize Your EV Battery Life",
      excerpt: "Simple practices that help extend your battery lifespan and improve overall EV performance.",
      date: "May 12, 2024",
      readTime: "5 min read"
    },
    {
      image: "/images/ev_consultation.png",
      category: "Industry News",
      title: "Government Initiatives Boosting EV Adoption In India",
      excerpt: "From subsidies to infrastructure development, here's how India is accelerating EV growth.",
      date: "May 10, 2024",
      readTime: "4 min read"
    },
    {
      image: "/images/battery_health.png",
      category: "EV Technology",
      title: "What's Next For EVs? Upcoming Trends To Watch",
      excerpt: "A look at the future of electric mobility and the innovations that will change the game.",
      date: "May 08, 2024",
      readTime: "6 min read"
    }
  ];

  const trendingPosts = [
    {
      image: "/images/ev_charging.png",
      title: "Benefits Of Switching To Electric Vehicles",
      date: "May 22, 2024"
    },
    {
      image: "/images/home_charger.png",
      title: "Understanding EV Charging Connectors",
      date: "May 19, 2024"
    },
    {
      image: "/images/ev_maintenance.png",
      title: "Home Charging vs Public Charging",
      date: "May 17, 2024"
    },
    {
      image: "/images/corporate_charging.png",
      title: "EV Myths Busted!",
      date: "May 14, 2024"
    },
    {
      image: "/images/smart_monitoring.png",
      title: "The True Cost Of Owning An EV",
      date: "May 11, 2024"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Main Content (Left Column) */}
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col">
            
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-max mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight group-hover:text-[#126b34] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-gray-400 text-xs font-medium pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-auto">
              <button className="w-10 h-10 rounded-lg bg-[#126b34] text-white font-bold flex items-center justify-center shadow-md">1</button>
              <button className="w-10 h-10 rounded-lg bg-white text-gray-600 font-bold flex items-center justify-center border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg bg-white text-gray-600 font-bold flex items-center justify-center border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors">3</button>
              <div className="w-8 h-10 flex items-center justify-center text-gray-400">...</div>
              <button className="w-10 h-10 rounded-lg bg-white text-gray-600 font-bold flex items-center justify-center border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors">10</button>
              <button className="w-10 h-10 rounded-lg bg-white text-gray-600 font-bold flex items-center justify-center border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
          </div>

          {/* Sidebar (Right Column) */}
          <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-6">
            
            {/* Search */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-2 flex items-center gap-2">
              <input type="text" placeholder="Search articles..." className="flex-grow pl-3 py-2 bg-transparent outline-none text-gray-700 text-sm" />
              <button className="w-10 h-10 rounded-xl bg-[#126b34] text-white flex items-center justify-center flex-shrink-0 hover:bg-green-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Trending Posts */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Trending Posts</h3>
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              <div className="flex flex-col gap-5">
                {trendingPosts.map((post, index) => (
                  <div key={index} className="flex gap-4 group cursor-pointer">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#126b34] text-white flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-gray-900 font-bold text-sm leading-snug mb-1 group-hover:text-[#126b34] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-gray-400 text-xs font-medium">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe Newsletter */}
            <div className="bg-green-50 rounded-3xl border border-green-100 p-6 flex flex-col relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <svg className="w-24 h-24 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-200/50 text-[#126b34] flex items-center justify-center mb-4 relative z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 relative z-10 leading-snug">Subscribe To Our<br/>Newsletter</h3>
              <p className="text-gray-600 text-sm font-medium mb-5 relative z-10 leading-relaxed">
                Get the latest updates, articles and news delivered to your inbox.
              </p>
              
              <div className="flex flex-col gap-3 relative z-10 mt-auto">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-white rounded-xl outline-none border border-green-200 focus:border-[#126b34] text-sm text-gray-700 shadow-sm" />
                <button className="w-full bg-[#126b34] hover:bg-green-800 text-white font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 group">
                  Subscribe
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
