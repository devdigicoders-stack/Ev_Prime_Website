
const Features = () => {
  const features = [
    {
      title: "Fast Charging",
      description: "High speed charging for every EV.",
      icon: (
        <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: "Wide Network",
      description: "Pan India network of charging stations.",
      icon: (
        <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      )
    },
    {
      title: "Safe & Secure",
      description: "100% safe, secure and reliable.",
      icon: (
        <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Eco Friendly",
      description: "Driving towards a cleaner tomorrow.",
      icon: (
        <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose Bharat EV <span style={{color: '#EA851A'}}>Prime?</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            We provide seamless and eco-friendly charging experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start shadow-sm"
            >
              <div className="mb-6 relative flex items-center justify-center w-14 h-14">
                 {/* Blob shape behind icon */}
                 <div className="absolute inset-0 bg-green-100 rounded-tl-2xl rounded-br-2xl rounded-tr-xl rounded-bl-xl transform -rotate-6"></div>
                 <div className="absolute inset-0 bg-green-50 rounded-xl transform rotate-3"></div>
                 <div className="relative z-10">
                    {feature.icon}
                 </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
