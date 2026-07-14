import React from 'react';

const ContactFormMap = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Us A Message</h3>
              <div className="w-10 h-1 bg-green-600 rounded-full"></div>
            </div>
            
            <form className="flex-grow flex flex-col gap-5">
              {/* Grid for Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-gray-700 text-sm" />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input type="email" placeholder="Your Email" className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-gray-700 text-sm" />
                </div>
              </div>

              {/* Grid for Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-gray-700 text-sm" />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Subject" className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-gray-700 text-sm" />
                </div>
              </div>

              {/* Message */}
              <div className="relative flex-grow">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full pl-12 pr-4 py-3.5 h-full min-h-[140px] bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-gray-700 text-sm resize-none"
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center mt-2">
                <input type="checkbox" id="privacy" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer" />
                <label htmlFor="privacy" className="ml-2 text-sm font-medium text-gray-600 cursor-pointer select-none">
                  I agree to the <span className="text-green-700 font-bold hover:underline">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button type="button" className="flex items-center gap-3 bg-[#126b34] hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg w-max group">
                  Send Message
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map & Address */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Location</h3>
              <div className="w-10 h-1 bg-green-600 rounded-full"></div>
            </div>
            
            {/* Real Embedded Google Map (Iframe pointing to Noida Sector 62 for demonstration) */}
            <div className="w-full flex-grow rounded-2xl overflow-hidden shadow-inner min-h-[250px] mb-6 border border-gray-100 bg-gray-100 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.318855018617!2d77.35147492987114!3d28.62736166297072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b128613608!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="E-Bharat EV Headquarters Location"
              ></iframe>
            </div>

            {/* Address Box */}
            <div className="bg-green-50/70 rounded-2xl p-5 flex items-start gap-4 border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-200/50 flex items-center justify-center flex-shrink-0 text-[#126b34]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <div className="flex flex-col mt-1">
                <h4 className="text-[#126b34] font-bold text-base mb-1">
                  E-Bharat EV Headquarters
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  123 Green Energy Park, Sector 62<br/>
                  Noida, Uttar Pradesh 201301, India
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
