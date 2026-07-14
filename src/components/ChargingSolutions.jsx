
const ChargingSolutions = () => {
  const solutions = [
    {
      title: "Home Charging",
      description: "Convenient and reliable charging solutions for your home.",
      image: "/card1.png",
      link: "#"
    },
    {
      title: "Commercial Charging",
      description: "Scalable charging infrastructure for businesses.",
      image: "/card3.png",
      link: "#"
    },
    {
      title: "Public Charging",
      description: "Access our wide network of public charging stations.",
      image: "/card2.png",
      link: "#"
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Charging Solutions
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Solutions designed for homes, businesses and on-the-go needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="h-44 md:h-48 lg:h-56 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
                >
                  Learn More 
                  <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChargingSolutions;
