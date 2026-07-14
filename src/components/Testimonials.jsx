import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "E-Bharat EV makes charging so easy and convenient. Great network!",
      author: "Rohan Mehta",
      rating: 5
    },
    {
      quote: "The app is super user-friendly and the support is excellent.",
      author: "Priya Sharma",
      rating: 5
    },
    {
      quote: "Fast charging and reliable stations across India. Highly recommended!",
      author: "Amit Verma",
      rating: 5
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Real stories from real EV drivers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Quote Icon */}
              <div className="text-green-600 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 17H3V11C3 7.686 5.686 5 9 5V8C7.343 8 6 9.343 6 11V17ZM18 17H15V11C15 7.686 17.686 5 21 5V8C19.343 8 18 9.343 18 11V17Z" />
                </svg>
              </div>
              
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8 min-h-[60px] md:min-h-[80px]">
                {item.quote}
              </p>
              
              <div className="font-bold text-gray-900 text-sm mb-3">
                - {item.author}
              </div>
              
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
