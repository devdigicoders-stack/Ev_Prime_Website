import React from 'react';

const OurTeam = () => {
  const team = [
    {
      name: "Rajeev Sharma",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/150?img=11",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Priya Verma",
      role: "COO",
      image: "https://i.pravatar.cc/150?img=5",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Amit Malhotra",
      role: "CTO",
      image: "https://i.pravatar.cc/150?img=12",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Neha Patel",
      role: "Head of Operations",
      image: "https://i.pravatar.cc/150?img=9",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Team
          </h2>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-green-100 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm font-medium mb-6">
                {member.role}
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-auto">
                {/* LinkedIn */}
                <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" fill="currentColor" className="stroke-none" />
                  </svg>
                </a>
                
                {/* Twitter */}
                <a href={member.socials.twitter} className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                
                {/* Email */}
                <a href={member.socials.email} className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default OurTeam;
