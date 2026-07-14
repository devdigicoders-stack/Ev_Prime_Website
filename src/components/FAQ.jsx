import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is E-Bharat EV?",
      answer: "E-Bharat EV is India's leading EV charging network providing reliable, fast, and accessible charging solutions for electric vehicle owners across the country."
    },
    {
      question: "How can I find charging stations near me?",
      answer: "You can use our mobile app or website's 'Find a Charger' feature to locate the nearest available charging stations, view their real-time availability, and navigate to them."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept multiple payment methods including credit/debit cards, UPI, net banking, and our proprietary E-Bharat Wallet for a seamless checkout experience."
    },
    {
      question: "Do you offer home charging solutions?",
      answer: "Yes, we provide end-to-end home charging solutions including smart charger installation, app integration for scheduling, and energy consumption tracking."
    },
    {
      question: "How can I partner with E-Bharat EV?",
      answer: "We offer various partnership models for businesses, property owners, and fleet operators. You can reach out to our corporate team through the contact form to discuss partnership opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-green-100 bg-green-50/50 shadow-sm' : 'border-gray-200 bg-white hover:border-green-200'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 transition-colors ${isOpen ? 'bg-[#126b34] text-white' : 'border-2 border-gray-400 text-gray-500'}`}>
                      <span className="text-xs font-bold font-serif">?</span>
                    </div>
                    {/* Question Text */}
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-[#126b34]' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'text-[#126b34]' : 'text-gray-400'}`}>
                    {isOpen ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 ml-10">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
