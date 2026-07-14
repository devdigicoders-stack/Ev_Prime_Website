
const ContactCards = () => {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      primaryText: "+91 98765 43210",
      secondaryText: "Mon - Sun: 24/7"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      primaryText: "hello@ebharatev.com",
      secondaryText: "We reply within 24 hrs"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      primaryText: "New Delhi, India",
      secondaryText: "110001"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      primaryText: "Chat with our team",
      secondaryText: "Available 24/7"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-8 h-1 bg-green-600 rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex items-center gap-4 hover:-translate-y-1 transition-transform border border-gray-50"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                <h4 className="text-gray-900 font-bold text-base mb-1">
                  {card.title}
                </h4>
                <p className="text-green-700 font-medium text-sm mb-1 truncate">
                  {card.primaryText}
                </p>
                <p className="text-gray-500 text-xs font-medium">
                  {card.secondaryText}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactCards;
