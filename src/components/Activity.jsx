import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaAward,
  FaMicrophone,
  FaHandshake,
  FaRegSmile,
  FaGlobeAmericas,
} from "react-icons/fa";

/* ─── palette ───────────────────────────────────── */
const C = { navy: '#0a1128', teal: '#4db7e8', green: '#46b8a2' };

/* ─── data ──────────────────────────────────────── */
const programs = [
  {
    name: "CYE",
    full: "Creative Young Entrepreneurs",
    icon: FaLightbulb,
    accent: C.teal,
    description:
      "Empowers young entrepreneurs through mentorship, training, and business pitch competitions designed to foster creativity and innovation.",
  },
  {
    name: "TOYP",
    full: "Ten Outstanding Young People",
    icon: FaUsers,
    accent: C.green,
    description:
      "Recognizes and celebrates the achievements of ten young people who excel in their respective fields and positively impact their communities.",
  },
  {
    name: "Awards",
    full: "JCI Recognition Awards",
    icon: FaAward,
    accent: C.teal,
    description:
      "Honors exceptional individuals and projects demonstrating leadership, impact, and alignment with the values of JCI.",
  },
  {
    name: "Debate",
    full: "Public Speaking and Debate",
    icon: FaMicrophone,
    accent: C.green,
    description:
      "Enhances communication and critical thinking skills through structured training and competitive events in public speaking and debating.",
  },
  {
    name: "Twinning",
    full: "International Chapter Twinning",
    icon: FaHandshake,
    accent: C.teal,
    description:
      "Promotes international collaboration and friendship by connecting JCI chapters across borders to share best practices and work on joint projects.",
  },
  {
    name: "100% Efficiency",
    full: "Chapter Management Excellence",
    icon: FaRegSmile,
    accent: C.green,
    description:
      "A program aimed at optimizing chapter management and operations to ensure maximum impact and member engagement.",
  },
  {
    name: "JCI RISE",
    full: "Rebuild, Invest, Sustain, Evolve",
    icon: FaGlobeAmericas,
    accent: C.teal,
    description:
      "An initiative focused on rebuilding, investing, sustaining, and evolving economies and communities in response to global challenges.",
  },
];

/* ─── card component ────────────────────────────── */
const ProgramCard = ({ program, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = program.icon;

  return (
    <motion.article
      ref={ref}
      className="flex flex-col gap-4 rounded-2xl p-7"
      style={{ background: '#fff', border: '1px solid rgba(10,17,40,0.07)' }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
    >
      {/* top row: number + icon */}
      <div className="flex items-start justify-between">
        <span
          className="text-xs font-black tracking-[0.15em]"
          style={{ color: `${program.accent}70` }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl"
          style={{ background: `${program.accent}14` }}
        >
          <Icon style={{ color: program.accent, fontSize: '1.1rem' }} />
        </div>
      </div>

      {/* name + full */}
      <div>
        <h3 className="text-base font-black tracking-wide uppercase" style={{ color: C.navy }}>
          {program.name}
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mt-0.5" style={{ color: `${program.accent}` }}>
          {program.full}
        </p>
      </div>

      {/* description */}
      <p className="flex-1 text-sm leading-relaxed" style={{ color: 'rgba(10,17,40,0.52)' }}>
        {program.description}
      </p>

      {/* bottom accent */}
      <div className="h-0.5 w-8 rounded-full" style={{ background: program.accent }} />
    </motion.article>
  );
};

/* ─── page ──────────────────────────────────────── */
export default function Activity() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: '#f0f4f8', paddingTop: '72px' }}
    >
      {/* ── Hero header ── */}
      <section
        ref={headerRef}
        className="relative flex flex-col items-center justify-center w-full px-6 py-20 overflow-hidden text-center md:py-28"
        style={{ background: C.navy }}
      >
        {/* subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(77,183,232,0.09) 0%, transparent 70%)'
        }} />

        <motion.p
          className="text-[10px] font-black tracking-[0.3em] uppercase mb-4"
          style={{ color: C.green }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          JCI Sakiet Ezzit
        </motion.p>

        <motion.h1
          className="font-black leading-none uppercase"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', color: '#fff', letterSpacing: '0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Our{' '}
          <em className="not-italic" style={{ color: C.teal, fontStyle: 'italic' }}>Programs</em>
        </motion.h1>

        <motion.div
          className="my-6 rounded-full"
          style={{ width: 48, height: 3, background: `linear-gradient(90deg,${C.teal},${C.green})` }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        />

        <motion.p
          className="max-w-xl text-sm leading-relaxed md:text-base"
          style={{ color: 'rgba(255,255,255,0.48)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Seven international frameworks that develop skills, foster leadership,
          and connect young citizens across the globe.
        </motion.p>

        {/* stat pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {[
            { value: '7', label: 'Active Programs' },
            { value: '120+', label: 'Countries' },
            { value: '100+', label: 'Years of JCI' },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="text-base font-black" style={{ color: i % 2 === 0 ? C.teal : C.green }}>{s.value}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Section label ── */}
      <div className="w-full max-w-6xl px-4 pt-12 pb-5 mx-auto md:px-8">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap" style={{ color: C.teal }}>
            All Programs
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(10,17,40,0.1)' }} />
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: 'rgba(10,17,40,0.28)' }}>
            {programs.length} total
          </p>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="w-full max-w-6xl px-4 pb-20 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}