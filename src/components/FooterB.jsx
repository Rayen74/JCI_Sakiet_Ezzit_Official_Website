import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/newLogo.png';
import Facebook from '../assets/Facebook.png';
import Youtube from '../assets/Youtube.png';
import Instagram from '../assets/Instagram.png';

const socialLinks = [
  {
    href: "https://www.instagram.com/jci_sakiet_ezzit?igsh=bWFmankzeGp5ZDR2",
    icon: FaInstagram,
    image: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@jcisakietezzit9206",
    icon: FaYoutube,
    image: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/JCI.Sakiet.Ezzit",
    icon: FaFacebook,
    image: Facebook,
    label: "Facebook",
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
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#0a1128] text-white border-t-8 border-[#4db7e8]">
      <div className="px-4 py-8 mx-auto sm:py-12 max-w-7xl md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Left Section - Brand & Socials */}
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-10">
              {/* ── Logo with white background plate (same as Navbar) ── */}
              <div className="relative flex items-center scale-[1.5] ml-6 transition-all duration-300">
                <div className="absolute inset-x-0 bottom-4 top-4 bg-white rounded shadow-2xl transition-all duration-300"></div>
                <img
                  src={Logo}
                  alt="JCI Logo"
                  width="80"
                  height="80"
                  className="relative z-10 object-contain h-16 w-auto sm:h-20"
                />
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase sm:text-2xl">
                JCI <span className="text-[#4db7e8]">Sakiet Ezzit</span>
              </span>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed tracking-wide text-gray-300 uppercase sm:text-xs">
              Developing Leaders for a Changing World. Empowering young leaders in Sakiet Ezzit since 1994.
            </p>

            {/* CLEAN SOCIAL LINKS - NO GLOW */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform active:scale-95"
                  aria-label={social.label}
                >
                  <div className="flex items-center justify-center w-12 h-12 transition-colors duration-200 rounded-xl bg-[#4db7e8] hover:bg-white group">
                    <img
                      src={social.image}
                      alt={social.label}
                      width="24"
                      height="24"
                      className="object-contain w-6 h-6 transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex flex-col items-start gap-1 md:items-center">
            <p className="mb-4 text-sm font-black tracking-[0.2em] text-[#46b8a2] uppercase">Quick Links</p>
            <nav className="flex flex-col gap-3 md:items-center">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:text-[#4db7e8] focus:outline-none ${isActive ? 'text-[#4db7e8]' : 'text-gray-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="mb-2 text-sm font-black tracking-[0.2em] text-[#46b8a2] uppercase">Contact Us</p>
            <div className="flex items-center gap-3 md:flex-row-reverse">
              <MdLocationOn className="flex-shrink-0 w-6 h-6 text-[#4db7e8]" />
              <span className="text-sm font-bold tracking-wide text-gray-300">Sakiet Ezzit, Sfax, Tunisia</span>
            </div>
            <div className="flex items-start gap-3 md:flex-row-reverse">
              <MdEmail className="flex-shrink-0 w-6 h-6 text-[#4db7e8]" />
              <a
                href="mailto:jci.olm.sakiet.ezzit@gmail.com"
                className="text-sm font-bold tracking-wide text-gray-300 transition-colors break-all hover:text-[#4db7e8]"
              >
                jci.olm.sakiet.ezzit@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 md:flex-row-reverse">
              <MdPhone className="flex-shrink-0 w-6 h-6 text-[#4db7e8]" />
              <a
                href="tel:+21656601880"
                className="text-sm font-bold tracking-wide text-gray-300 transition-colors hover:text-[#4db7e8]"
              >
                +216 56 601 880
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-t border-white/5" />

        <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase sm:flex-row">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} Junior Chamber International Sakiet Ezzit
          </span>
          <span className="text-center sm:text-right">
            Powered by <span className="text-[#46b8a2]">Chaaben Rayen</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;