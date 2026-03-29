import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../assets/Home.png';
import {
  CalendarIcon,
  UsersIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  UserGroupIcon,
  UserIcon,
  EyeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/* ─── palette ────────────────────────────────────── */
const C = { navy: '#0a1128', teal: '#4db7e8', green: '#46b8a2' };

/* ─── variants ───────────────────────────────────── */
const reveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const revealShift = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ─── data ───────────────────────────────────────── */
const stats = [
  { icon: CalendarIcon,     value: '30+', label: 'Years of Impact',  accent: C.teal  },
  { icon: UsersIcon,        value: '25',  label: 'Trainings / Year', accent: C.green },
  { icon: DocumentTextIcon, value: '5',   label: 'Projects / Year',  accent: C.teal  },
];

const creedLines = [
  'That faith in God gives meaning and purpose to human life',
  'That the brotherhood of man transcends the sovereignty of nations',
  'That economic justice can best be won by free men through free enterprise',
  'That government should be of laws rather than of men',
  "That earth's great treasure lies in human personality",
];

const axes = [
  { icon: UserIcon,      label: 'Individual',      desc: 'Empowering individuals through personal development and leadership opportunities.' },
  { icon: UserGroupIcon, label: 'Community',        desc: 'Strengthening communities by promoting collaboration and local initiatives.' },
  { icon: BriefcaseIcon, label: 'Business',         desc: 'Fostering entrepreneurial spirit and sustainable business practices.' },
  { icon: GlobeAltIcon,  label: 'Internationalism', desc: 'Building global connections to promote peace and cooperation.' },
];

/* ─── component ──────────────────────────────────── */
const Welcome = () => {
  const belowRef = useRef(null);
  const inView   = useInView(belowRef, { once: true, margin: '-60px' });
  const noM      = useReducedMotion();
  const navigate = useNavigate();
  const go = (p) => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(p); };

  return (
    <main
      className="flex flex-col w-full font-sans pt-[72px] md:pt-[80px]"
      style={{ background: '#f0f4f8' }}
    >

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center w-full overflow-hidden"
        style={{ minHeight: 'calc(100svh - 80px)' }}
      >
        {/* bg */}
        <div className="absolute inset-0">
          <img 
            src={Home} 
            alt="JCI Sakiet Ezzit Hero" 
            fetchpriority="high"
            loading="eager"
            width="1920"
            height="1080"
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,17,40,0.80)' }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(77,183,232,0.09) 0%, transparent 70%)',
          }} />
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl px-6 mx-auto text-center">
          <motion.p
            className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase mb-6"
            style={{ color: C.green }}
            initial={noM ? {} : { opacity: 0, y: -12 }}
            animate={noM ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Junior Chamber International
          </motion.p>

          <motion.h1
            className="font-black uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 9.5vw, 7rem)', color: '#fff', letterSpacing: '0.02em' }}
            initial={noM ? {} : { opacity: 0, y: 22 }}
            animate={noM ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Sakiet{' '}
            <em className="not-italic" style={{ color: C.teal, fontStyle: 'italic' }}>Ezzit</em>
          </motion.h1>

          <motion.p
            className="mt-6 text-sm sm:text-base font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            initial={noM ? {} : { opacity: 0 }}
            animate={noM ? {} : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            Developing Leaders for a Changing World
          </motion.p>

          <motion.div
            className="my-8 rounded-full"
            style={{ width: 52, height: 3, background: `linear-gradient(90deg,${C.teal},${C.green})` }}
            initial={noM ? {} : { scaleX: 0 }} animate={noM ? {} : { scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />

          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            initial={noM ? {} : { opacity: 0, y: 14 }}
            animate={noM ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              onClick={() => go('/our-board')}
              className="px-9 py-3 rounded-full text-sm font-black tracking-[0.12em] uppercase transition-all duration-200 hover:opacity-90 hover:scale-105 focus:outline-none"
              style={{ background: `linear-gradient(90deg,${C.teal},${C.green})`, color: C.navy }}
            >
              Our Board
            </button>
            <button
              onClick={() => go('/projects')}
              className="px-9 py-3 rounded-full text-sm font-black tracking-[0.12em] uppercase border-2 transition-all duration-200 hover:border-white/50 hover:text-white focus:outline-none"
              style={{ borderColor: 'rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.7)', background: 'transparent' }}
            >
              Our Projects
            </button>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
          initial={noM ? {} : { opacity: 0 }}
          animate={noM ? {} : { opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>Scroll</span>
          <motion.div
            className="w-px rounded-full"
            style={{ height: 36, background: `linear-gradient(180deg,${C.teal},transparent)` }}
            animate={noM ? {} : { scaleY: [1, 0.35, 1], opacity: [0.6, 0.15, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          2. INTRO — floating dark card (overlaps hero)
      ════════════════════════════════════════ */}
      <motion.section
        id="about"
        className="relative z-10 w-full max-w-6xl px-4 mx-auto -mt-16 md:px-8"
        variants={reveal} initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: '-40px' }}
      >
        <div
          className="overflow-hidden rounded-3xl"
          style={{ background: C.navy, border: '1px solid rgba(77,183,232,0.18)' }}
        >
          <div className="grid md:grid-cols-3">

            {/* about text — 2 cols */}
            <div className="p-8 border-b md:col-span-2 md:p-10 md:border-b-0 md:border-r" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: C.green }}>
                About JCI Sakiet Ezzit
              </p>
              <p className="text-base leading-relaxed md:text-lg" style={{ color: 'rgba(255,255,255,0.62)' }}>
                JCI is a global network of young citizens aged{' '}
                <span className="font-bold" style={{ color: 'rgba(255,255,255,0.88)' }}>18–40</span>{' '}
                committed to creating positive change. With over{' '}
                <span className="font-bold" style={{ color: 'rgba(255,255,255,0.88)' }}>100 years</span>{' '}
                of history in{' '}
                <span className="font-bold" style={{ color: 'rgba(255,255,255,0.88)' }}>120+ countries</span>,
                JCI Sakiet Ezzit — founded in 1994, reactivated in 2015 — is a branch of JCI
                Tunisia, affiliated with the United Nations.
              </p>
            </div>

            {/* stats — 1 col, stacked */}
            <div className="grid grid-cols-3 divide-x md:grid-cols-1 md:divide-y md:divide-x-0 min-h-[140px]" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-1 p-5 text-center min-h-[80px] md:min-h-[100px]">
                  <s.icon className="w-4 h-4 mb-1" style={{ color: s.accent }} />
                  <span className="text-3xl font-black leading-none md:text-4xl" style={{ color: '#fff' }}>{s.value}</span>
                  <span className="text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════
          3. VISION + MISSION — asymmetric split
      ════════════════════════════════════════ */}
      <motion.section
        id="vision"
        ref={belowRef}
        className="w-full max-w-6xl px-4 mx-auto mt-6 md:px-8"
        variants={stagger} initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="grid gap-4 md:grid-cols-5" variants={revealShift}>

          {/* Vision — compact, dark, 2/5 */}
          <div
            className="flex flex-col justify-between md:col-span-2 rounded-3xl p-7 md:p-8"
            style={{ background: C.navy, border: `1px solid ${C.teal}22` }}
          >
            <div>
              <div
                className="flex items-center justify-center w-10 h-10 mb-5 rounded-2xl"
                style={{ background: `${C.teal}18` }}
              >
                <EyeIcon className="w-5 h-5" style={{ color: C.teal }} />
              </div>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-3" style={{ color: C.teal }}>Vision</p>
              <h2 className="text-xl font-black leading-tight md:text-2xl" style={{ color: '#fff' }}>
                The foremost global network of young leaders.
              </h2>
            </div>
            <div className="w-8 h-px mt-6 rounded-full" style={{ background: `linear-gradient(90deg,${C.teal},transparent)` }} />
          </div>

          {/* Mission — wide, light bg, 3/5 */}
          <div
            className="flex flex-col justify-between md:col-span-3 rounded-3xl p-7 md:p-8"
            style={{ background: '#fff', border: `1px solid ${C.green}30`, borderLeft: `4px solid ${C.green}` }}
          >
            <div>
              <div
                className="flex items-center justify-center w-10 h-10 mb-5 rounded-2xl"
                style={{ background: `${C.green}15` }}
              >
                <RocketLaunchIcon className="w-5 h-5" style={{ color: C.green }} />
              </div>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-3" style={{ color: C.green }}>Mission</p>
              <h2 className="mb-4 text-xl font-black leading-tight md:text-2xl" style={{ color: C.navy }}>
                Empowering young people to create positive change.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,17,40,0.52)' }}>
                We provide leadership development opportunities that build skills, foster responsibility,
                and connect active citizens across the globe to act on what matters.
              </p>
            </div>
            <div className="w-8 h-px mt-6 rounded-full" style={{ background: `linear-gradient(90deg,${C.green},transparent)` }} />
          </div>
        </motion.div>
      </motion.section>

      {/* ════════════════════════════════════════
          4. CREED — editorial manifesto layout
      ════════════════════════════════════════ */}
      <motion.section
        id="creed"
        className="w-full max-w-6xl px-4 mx-auto mt-6 md:px-8"
        variants={item}
        animate={inView ? 'visible' : 'hidden'}
        initial="hidden"
      >
        <div
          className="overflow-hidden rounded-3xl"
          style={{ background: C.navy, border: '1px solid rgba(77,183,232,0.1)' }}
        >
          <div className="grid md:grid-cols-3">

            {/* left panel — label + decorative */}
            <div
              className="flex flex-col justify-between p-8 border-b md:col-span-1 md:p-10 md:border-b-0 md:border-r"
              style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(77,183,232,0.04)' }}
            >
              <div>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: C.teal }}>
                  Our Creed
                </p>
                <div
                  className="font-black leading-none select-none text-7xl md:text-8xl"
                  style={{ color: 'rgba(77,183,232,0.12)', letterSpacing: '-0.04em' }}
                >
                  "
                </div>
                <p className="mt-2 text-2xl font-black leading-tight md:text-3xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  We<br />Believe
                </p>
              </div>
              <div className="w-8 h-px mt-8 rounded-full" style={{ background: `linear-gradient(90deg,${C.teal},transparent)` }} />
            </div>

            {/* right panel — lines */}
            <div className="flex flex-col justify-center gap-4 p-8 md:col-span-2 md:p-10">
              {creedLines.map((line, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.teal, opacity: 0.5 }} />
                  <p className="text-sm leading-relaxed md:text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {line}
                  </p>
                </div>
              ))}
              <div
                className="flex items-start gap-4 pt-4 mt-2"
                style={{ borderTop: '1px solid rgba(70,184,162,0.2)' }}
              >
                <div className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.green }} />
                <p className="text-sm font-bold md:text-base" style={{ color: C.green }}>
                  And that service to humanity is the best work of life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════
          5. AXES — numbered cards
      ════════════════════════════════════════ */}
      <motion.section
        id="axes"
        className="w-full max-w-6xl px-4 pb-20 mx-auto mt-6 md:px-8"
        variants={stagger}
        animate={inView ? 'visible' : 'hidden'}
        initial="hidden"
      >
        {/* section header */}
        <motion.div className="flex items-center gap-5 mb-6" variants={item}>
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: C.teal }}>Our Axes</p>
            <h2 className="text-2xl font-black tracking-tight uppercase" style={{ color: C.navy }}>
              Four Pillars of Action
            </h2>
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(10,17,40,0.1)' }} />
        </motion.div>

        {/* 4 cards */}
        <motion.div className="grid grid-cols-2 gap-4 lg:grid-cols-4" variants={stagger}>
          {axes.map((axis, i) => {
            const accent = i % 2 === 0 ? C.teal : C.green;
            return (
              <motion.div
                key={i}
                className="flex flex-col p-6 rounded-2xl"
                style={{ background: '#fff', border: '1px solid rgba(10,17,40,0.07)' }}
                variants={item}
              >
                {/* number badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-black tracking-[0.15em]"
                    style={{ color: `${accent}80` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ background: `${accent}12` }}
                  >
                    <axis.icon className="w-4 h-4" style={{ color: accent }} />
                  </div>
                </div>

                <h3
                  className="mb-2 text-sm font-black tracking-wide uppercase"
                  style={{ color: C.navy }}
                >
                  {axis.label}
                </h3>
                <p className="flex-1 text-xs leading-relaxed" style={{ color: 'rgba(10,17,40,0.48)' }}>
                  {axis.desc}
                </p>

                {/* bottom accent line */}
                <div className="mt-5 h-0.5 w-6 rounded-full" style={{ background: accent }} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

    </main>
  );
};

export default Welcome;