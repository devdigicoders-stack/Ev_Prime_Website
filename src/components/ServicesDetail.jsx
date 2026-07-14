
const ServicesDetail = () => {
  const details = [
    {
      title: "EV Charging Solutions",
      description: "Find, book and pay for charging at thousands of stations across India. Real-time availability, multiple payment options and seamless experience.",
      img: "/images/ev_charging.png"
    },
    {
      title: "Home Charging Solutions",
      description: "Install smart home chargers with easy scheduling, energy tracking and wallet integration for a hassle-free charging experience at home.",
      img: "/images/home_charger.png"
    },
    {
      title: "Corporate Charging Solutions",
      description: "We help businesses set up charging infrastructure for employees, customers and fleets with end-to-end support.",
      img: "/images/corporate_charging.png"
    },
    {
      title: "Maintenance & Support",
      description: "Regular maintenance, on-demand service, roadside assistance and expert support to ensure your EV is always road-ready.",
      img: "/images/ev_maintenance.png"
    },
    {
      title: "Battery Health Check",
      description: "Advanced battery diagnostics, performance analysis and health reports to maximize battery life and efficiency.",
      img: "/images/battery_health.png"
    },
    {
      title: "Smart Monitoring",
      description: "Track your charging, energy consumption and spending through our smart dashboard and mobile app.",
      img: "/images/smart_monitoring.png"
    },
    {
      title: "Roadside Assistance",
      description: "Stuck somewhere? Our 24/7 roadside assistance will get you back on track, anytime, anywhere.",
      img: "/images/roadside_assistance.png"
    },
    {
      title: "Consultation Services",
      description: "Get expert advice on EV selection, charging solutions and government incentives available for EV owners.",
      img: "/images/ev_consultation.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Services In Detail
          </h2>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* 2-Column Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="sm:w-[45%] relative h-48 sm:h-auto overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Small Green Chevron overlapping border */}
                <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-8 h-8 items-center justify-center shadow-sm z-10 text-green-600">
                  <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="sm:w-[55%] p-6 sm:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6 flex-grow">
                  {item.description}
                </p>
                
                {/* Explore Link */}
                <a href="#" className="flex items-center gap-2 text-green-600 font-bold text-sm mt-auto group-hover:text-green-700 transition-colors w-max">
                  Explore
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default ServicesDetail;
