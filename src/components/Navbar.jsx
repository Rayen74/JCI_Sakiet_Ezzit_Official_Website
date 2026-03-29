import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  AcademicCapIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  UserGroupIcon,
  BookOpenIcon,
  EyeIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/solid';
import Logo from '../assets/newLogo.png';

/* ─── section anchors shown in Home dropdown ─── */
const homeAnchors = [
  { id: 'about', label: 'About', icon: UserGroupIcon },
  { id: 'vision', label: 'Vision & Mission', icon: EyeIcon },
  { id: 'creed', label: 'Creed', icon: BookOpenIcon },
  { id: 'axes', label: 'Our Axes', icon: RectangleGroupIcon },
];

const menuItems = [
  { id: 'home', name: 'Home', icon: HomeIcon, path: '/home', hasDropdown: true },
  { id: 'our-board', name: 'Our Board', icon: ClipboardDocumentListIcon, path: '/our-board' },
  { id: 'projects', name: 'Projects', icon: FolderIcon, path: '/projects' },
  { id: 'activities', name: 'Activities', icon: AcademicCapIcon, path: '/activities' },
  { id: 'contact', name: 'Contact', icon: PhoneIcon, path: '/contact' },
];

/* ─── smooth scroll helper ─────────────────────── */
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // navbar height clearance
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileHomeOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (sectionId) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      navigate('/home');
      // wait for page to mount then scroll
      setTimeout(() => scrollToSection(sectionId), 350);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-[72px] md:h-[80px] flex items-center shadow-2xl bg-[#0a1128] border-b border-[#4db7e8]/20">
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl md:px-8">

        {/* ── Logo & Title ── */}
        <div className="flex items-center gap-10">
          <div className="relative flex items-center px-0 scale-[1.35] ml-6 transition-all duration-300">
            {/* Extremely Thin Background Plate - Shorter than Logo */}
            <div className="absolute inset-x-0 bottom-2 top-2 bg-white rounded shadow-2xl transition-all duration-300"></div>
            <img
              src={Logo}
              alt="JCI Logo"
              width="64"
              height="64"
              className="relative z-10 object-contain h-12 w-auto md:h-16"
            />
          </div>
          <span className="text-lg font-black tracking-widest text-white uppercase md:text-2xl leading-none">
            JCI <span className="text-[#4db7e8]">Sakiet Ezzit</span>
          </span>
        </div>

        {/* ── Desktop Menu ── */}
        <ul className="items-center hidden space-x-2 md:flex">
          {menuItems.map((item) =>
            item.hasDropdown ? (
              /* Home item with anchor dropdown */
              <li key={item.id} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 text-sm
                    ${isHome
                      ? 'bg-[#4db7e8] text-[#0a1128] shadow-[0_0_15px_rgba(77,183,232,0.4)]'
                      : 'text-white/90 hover:bg-white/10 hover:text-[#4db7e8]'
                    }`}
                  aria-expanded={dropdownOpen}
                >
                  <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>{item.name}</span>
                  <ChevronDownIcon
                    className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 rounded-2xl overflow-hidden shadow-2xl border border-[#4db7e8]/20"
                    style={{ background: 'rgba(10,17,40,0.97)', backdropFilter: 'blur(16px)' }}
                  >
                    {/* "Go to Home" top link */}
                    <NavLink
                      to="/home"
                      onClick={() => { setDropdownOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold tracking-widest uppercase transition-colors border-b text-white/50 hover:text-white hover:bg-white/5 border-white/8"
                    >
                      <HomeIcon className="w-3.5 h-3.5" />
                      Top of page
                    </NavLink>

                    {/* Section anchors */}
                    {homeAnchors.map((anchor) => (
                      <button
                        key={anchor.id}
                        onClick={() => handleAnchorClick(anchor.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#4db7e8] hover:bg-white/5 transition-colors text-left"
                      >
                        <anchor.icon className="w-4 h-4 flex-shrink-0 text-[#46b8a2]" />
                        {anchor.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              /* Regular nav items */
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 text-sm
                    ${isActive
                      ? 'bg-[#4db7e8] text-[#0a1128] shadow-[0_0_15px_rgba(77,183,232,0.4)]'
                      : 'text-white/90 hover:bg-white/10 hover:text-[#4db7e8]'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          className="block p-2 transition rounded-lg bg-white/5 md:hidden hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <XMarkIcon className="text-white w-7 h-7" />
            : <Bars3Icon className="text-white w-7 h-7" />
          }
        </button>
      </div>

      {/* ══ Mobile Menu Overlay ══ */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-[#0a1128]/95 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* drawer */}
        <nav
          className={`absolute left-0 top-0 bottom-0 bg-[#0a1128] w-72 shadow-2xl transition-transform duration-300 border-r border-[#4db7e8]/20 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-1 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={Logo}
                  alt="JCI Logo"
                  className="object-contain h-10 w-auto"
                />
              </div>
              <span className="text-lg font-black tracking-widest text-white uppercase">
                JCI <span className="text-[#4db7e8]">Sakiet Ezzit</span>
              </span>
            </div>
            <button onClick={() => setMobileOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-4 py-6">
            {menuItems.map((item) =>
              item.hasDropdown ? (
                <li key={item.id}>
                  {/* Home accordion trigger */}
                  <button
                    onClick={() => setMobileHomeOpen((v) => !v)}
                    className={`w-full flex items-center justify-between gap-4 px-5 py-4 font-bold uppercase tracking-widest rounded-xl transition-all text-sm
                      ${isHome ? 'bg-[#4db7e8] text-[#0a1128]' : 'text-white hover:bg-white/5'}`}
                  >
                    <span className="flex items-center gap-4">
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-200 ${mobileHomeOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* accordion body */}
                  {mobileHomeOpen && (
                    <div className="mt-1 ml-4 flex flex-col gap-1 border-l-2 border-[#4db7e8]/30 pl-4">
                      <NavLink
                        to="/home"
                        onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                      >
                        <HomeIcon className="w-3.5 h-3.5" />
                        Top of page
                      </NavLink>
                      {homeAnchors.map((anchor) => (
                        <button
                          key={anchor.id}
                          onClick={() => handleAnchorClick(anchor.id)}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-[#4db7e8] transition-colors text-left w-full"
                        >
                          <anchor.icon className="w-4 h-4 flex-shrink-0 text-[#46b8a2]" />
                          {anchor.label}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.id} onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-5 py-4 font-bold uppercase tracking-widest rounded-xl transition-all text-sm
                      ${isActive ? 'bg-[#4db7e8] text-[#0a1128]' : 'text-white hover:bg-white/5'}`
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;