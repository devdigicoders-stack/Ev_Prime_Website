import React from 'react';

const Stats = () => {
  return (
    <div className="mt-auto mb-2 w-full flex justify-center pb-2 z-20 relative">
      <div className="bg-white w-full shadow-2xl rounded-3xl py-4 px-4 md:py-5 md:px-8 flex flex-wrap justify-between items-center gap-6 border border-gray-100">
        
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <div className="text-green-500 mb-2">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
          </div>
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800">1200+</h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Charging Stations</p>
        </div>

        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <div className="text-green-500 mb-2">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
          </div>
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800">50K+</h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Happy Users</p>
        </div>

        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <div className="text-green-500 mb-2">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
          </div>
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800">25+</h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Cities Covered</p>
        </div>

        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <div className="text-green-500 mb-2">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path></svg>
          </div>
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800">100%</h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Green Energy</p>
        </div>
        
      </div>
    </div>
  );
};

export default Stats;
