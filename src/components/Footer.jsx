import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  const services = [
    { name: "Home Charging", path: "/services" },
    { name: "Commercial Charging", path: "/services" },
    { name: "Public Charging", path: "/services" }
  ];

  return (
    <footer className="bg-[#05432d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">
            <div className="bg-white p-2 rounded-lg mb-6 inline-block">
              <img 
                src="/logo.png" 
                alt="Bharat EV Prime Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-green-100/80 text-sm md:text-[15px] leading-relaxed mb-6 max-w-xs">
              Powering India with clean and sustainable energy through smart EV charging solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                // Facebook
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
                // Instagram
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A4.5 4.5 0 0122 11v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 22V11A4.5 4.5 0 016.5 6.5z" />,
                // LinkedIn
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />,
                // Youtube
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />,
                // Link
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              ].map((path, index) => (
                <a key={index} href="#" className="w-9 h-9 rounded-full border border-green-400/50 flex items-center justify-center text-green-300 hover:text-white hover:border-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    {index === 2 && <circle cx="4" cy="4" r="2" />}
                    {index === 3 && <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />}
                    {typeof path === 'object' ? path : <path d={path.props.d} />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-green-100/70 hover:text-white text-[15px] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="flex flex-col gap-3.5">
              {services.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-green-100/70 hover:text-white text-[15px] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:pr-4">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-green-100/70 text-[15px]">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-green-100/70 text-[15px]">hello@bharatevprime.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-green-100/70 text-[15px]">New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-green-100/60 text-sm">
  © 2026 Bharat EV Prime. All Rights Reserved || Crafted with ❤️ by{" "}
  <span className="text-orange-400 font-bold">
    <a
      href="https://digicoders.in"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-orange-300 transition-colors duration-300"
    >
      Team Digicoders
    </a>
  </span>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
