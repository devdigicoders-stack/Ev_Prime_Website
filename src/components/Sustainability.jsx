
const Sustainability = () => {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M4 11h16M4 15h16M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4M8 15v2M16 15v2" />
        </svg>
      ),
      value: "10M+",
      label: "Green Kilometers Driven"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V14M12 14C10 14 8 13 8 11C8 9.5 9 8 10.5 8C11 8 11.5 8.1 12 8.3C12.5 8.1 13 8 13.5 8C15 8 16 9.5 16 11C16 13 14 14 12 14Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8C10 8 8 7 8 5C8 3.5 9 2 10.5 2C11 2 11.5 2.1 12 2.3C12.5 2.1 13 2 13.5 2C15 2 16 3.5 16 5C16 7 14 8 12 8Z" />
        </svg>
      ),
      value: "5K+",
      label: "Tons CO₂ Saved"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      value: "2M+",
      label: "Successful Charges"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V14M12 14C10 14 8 13 8 11C8 9.5 9 8 10.5 8C11 8 11.5 8.1 12 8.3C12.5 8.1 13 8 13.5 8C15 8 16 9.5 16 11C16 13 14 14 12 14Z" />
        </svg>
      ),
      value: "5K+",
      label: "Trees Planted"
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#F4FCF6] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] z-10 lg:pr-8 xl:pr-12 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Driving a <span className="text-green-600">Greener India</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 lg:mb-16 font-medium">
              Together we are creating a sustainable tomorrow.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-y-8 w-full max-w-3xl">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col items-center sm:items-start bg-white sm:bg-transparent rounded-2xl sm:rounded-none p-5 sm:p-0 shadow-sm sm:shadow-none border border-green-100 sm:border-none sm:px-4 lg:px-6 ${
                    i !== 0 ? 'sm:border-l sm:border-gray-200' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-green-50 sm:bg-transparent flex items-center justify-center text-green-600 mb-3 sm:w-auto sm:h-auto sm:block">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-green-700 mb-1">{stat.value}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-semibold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img 
              src="/earth.png" 
              alt="Green Earth" 
              className="w-full h-auto object-contain max-h-[350px] md:max-h-[450px] lg:max-h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;
