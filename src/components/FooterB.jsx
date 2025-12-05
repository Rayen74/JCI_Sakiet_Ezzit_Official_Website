import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import Facebook from '../assets/Facebook.png';
import Youtube from '../assets/Youtube.png';
import Instagram from '../assets/Instagram.png';

const socialLinks = [
  {
    href: "https://www.instagram.com/jci_sakiet_ezzit?igsh=bWFmankzeGp5ZDR2",
    icon: FaInstagram,
    image: Instagram,
    label: "Instagram",
    color: "hover:text-pink-400"
  },
  {
    href: "https://www.youtube.com/@jcisakietezzit9206",
    icon: FaYoutube,
    image: Youtube,
    label: "YouTube",
    color: "hover:text-red-500"
  },
  {
    href: "https://www.facebook.com/JCI.Sakiet.Ezzit",
    icon: FaFacebook,
    image: Facebook,
    label: "Facebook",
    color: "hover:text-blue-400"
  }
];

const quickLinks = [
  { label: 'Home', path: '/home' },
  { label: 'Our Board', path: '/our-board' },
  { label: 'Projects', path: '/projects' },
  { label: 'Activities', path: '/activities' },
  { label: 'Contact', path: '/contact' },
];

const FooterB = () => {
  // Scroll to top when link is clicked
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-gradient-to-r from-[#066CBA] to-[#003C67] text-white shadow-lg">
      <div className="px-4 py-8 mx-auto sm:py-10 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          
          {/* Left Section */}
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              <img 
                src={Logo} 
                alt="Logo" 
                className="object-contain w-16 h-16 p-1 bg-white border border-yellow-400 rounded-lg shadow-md sm:w-20 sm:h-20" 
              />
              <span className="text-lg font-black tracking-tight text-yellow-400 sm:text-xl drop-shadow">
                JCI Sakiet Ezzit
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed sm:text-base opacity-90">
              Empowering young leaders in Sakiet Ezzit since 1994 through impactful community development, entrepreneurship, and global cooperation.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all group"
                  aria-label={social.label}
                >
                  <div className={`flex items-center justify-center transition bg-yellow-400 rounded-full shadow w-9 h-9 sm:w-10 sm:h-10 group-hover:bg-yellow-300 group-hover:animate-pulse`}>
                    <img
                      src={social.image}
                      alt={social.label}
                      className="object-contain w-5 h-5 transition group-hover:scale-110"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex flex-col items-start gap-1 md:items-center">
            <p className="mb-3 text-base font-bold tracking-wide sm:text-lg">Quick Links</p>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `text-sm sm:text-base text-left transition hover:text-yellow-300 hover:translate-x-1 focus:outline-none focus:text-yellow-300 ${
                      isActive ? 'text-yellow-300 font-semibold' : ''
                    }`
                  }
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col items-start gap-2 md:items-end">
            <p className="mb-3 text-base font-bold tracking-wide sm:text-lg">Contact</p>
            <div className="flex items-center gap-2">
              <MdLocationOn className="flex-shrink-0 w-5 h-5 text-yellow-400" />
              <span className="text-sm opacity-90 sm:text-base">Sakiet Ezzit, Tunisia</span>
            </div>
            <div className="flex items-start gap-2">
              <MdEmail className="flex-shrink-0 w-5 h-5 mt-1 text-yellow-400" />
              <a 
                href="mailto:jci.olm.sakiet.ezzit@gmail.com"
                className="text-sm break-all transition sm:text-base hover:text-yellow-300"
              >
                jci.olm.sakiet.ezzit@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="flex-shrink-0 w-5 h-5 text-yellow-400" />
              <a 
                href="tel:+21656601880"
                className="text-sm opacity-90 sm:text-base hover:text-yellow-300"
              >
                +216 56 601 880
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-6 border-t border-blue-100 sm:my-8 opacity-30" />
        
        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row sm:text-sm text-white/70">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} JCI Sakiet Ezzit. All rights reserved.
          </span>
          <span className="text-center sm:text-right">
            Powered by Chaaben Rayen
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;