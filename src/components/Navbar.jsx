import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  AcademicCapIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';

const menuItems = [
  { id: 'home', name: 'Home', icon: HomeIcon, path: '/home' },
  { id: 'our-board', name: 'Our Board', icon: ClipboardDocumentListIcon, path: '/our-board' },
  { id: 'projects', name: 'Projects', icon: FolderIcon, path: '/projects' },
  { id: 'activities', name: 'Activities', icon: AcademicCapIcon, path: '/activities' },
  { id: 'contact', name: 'Contact', icon: PhoneIcon, path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-40 w-full shadow-xl bg-gradient-to-r from-[#066CBA] to-[#003C67]">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl md:px-8">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain w-10 h-10 p-1 bg-white border-2 border-yellow-400 rounded-lg shadow md:h-14 md:w-14"
          />
          <span className="text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text drop-shadow-md md:text-2xl">
            JCI Sakiet Ezzit
          </span>
        </div>
        {/* Desktop Menu */}
        <ul className="items-center hidden space-x-2 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition
                  duration-200 text-md outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
                  ${
                    isActive
                      ? 'bg-yellow-400 text-[#003C67] shadow-lg'
                      : 'text-white/90 hover:bg-white/10 hover:text-yellow-300'
                  }`
                }
              >
                <item.icon className="w-5 h-5 transition opacity-80 group-hover:scale-110 group-hover:opacity-100" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="block p-2 transition rounded-lg bg-white/10 md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-white/20"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="text-white w-7 h-7" />
          ) : (
            <Bars3Icon className="text-white w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden transition
          ${mobileOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop Blur */}
        <div
          className={`absolute inset-0 bg-[#003C67]/80 backdrop-blur-[3px] transition-all duration-300`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Side Drawer */}
        <nav className={`absolute left-0 top-0 bottom-0 bg-[#003C67] w-64 max-w-[85vw] h-full shadow-2xl p-0 transition-all duration-300
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{ transitionProperty: 'transform, opacity', transitionTimingFunction: 'cubic-bezier(.72,0,.23,1)', transitionDuration: '350ms' }}
        >
          {/* Nav Header */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain w-10 h-10 p-1 bg-white border-2 border-yellow-400 rounded-lg"
            />
            <span className="text-lg font-black text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text drop-shadow">
              JCI Sakiet Ezzit
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 ml-auto transition rounded text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-7 h-7" />
            </button>
          </div>
          {/* Nav Items */}
          <ul className="flex flex-col gap-1 px-2 py-5">
            {menuItems.map(item => (
              <li key={item.id} onClick={() => setMobileOpen(false)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-4 py-3 font-semibold rounded-lg transition-all
                    duration-200 text-base outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
                    ${
                      isActive
                        ? "bg-yellow-400 text-[#003C67] shadow-lg"
                        : "text-white hover:bg-white/10 hover:text-yellow-300"
                    }`
                  }
                >
                  <item.icon className="w-6 h-6 transition opacity-80 group-hover:scale-110 group-hover:opacity-100" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
