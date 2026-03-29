import React from 'react';
import { motion } from 'framer-motion';
import Ahmed from '../assets/Ahmed.png';
import Narimen from '../assets/Narimen.png';
import Molka from '../assets/Molka.png';
import Taha from '../assets/Taha.png';
import Rahaf from '../assets/Rahaf.png';
import Rabeb from '../assets/Rabeb.png';
import Rayen from '../assets/Rayen.png';
import EmnaM from '../assets/EmnaM.png';
import Ramzy from '../assets/Ramzy.png';
import Boulbeba from '../assets/Boulbeba.png';
import Malek from '../assets/Malek.png';
import Emna from '../assets/Emna.png';
import Ghofrane from '../assets/Ghofrane.png';
import Marwa from '../assets/Marwa.png';
import Abir from '../assets/Abir.png';
import EmnaK from '../assets/EmnaK.png';

const bureauMembers = [
  { name: 'Ahmed Bouattour',    role: 'President',               src: Ahmed,    row: 1 },
  { name: 'Narimen Chaabene',   role: 'Immediate Past President', src: Narimen,  row: 2 },
  { name: 'Molka Baklouti',     role: 'Legal Advisor',           src: Molka,    row: 2 },
  { name: 'Taha Abid',          role: 'VPFD',                    src: Taha,     row: 3 },
  { name: 'Rahaf Chamtouri',    role: 'VPPRE',                   src: Rahaf,    row: 3 },
  { name: 'Rabeb Abid',         role: 'General Secretary',       src: Rabeb,    row: 3 },
  { name: 'Rayen Chaaben',      role: 'Treasurer',               src: Rayen,    row: 3 },
];

const directriceExecutiveMembers = [
  { name: 'Emna Mtibaa', role: 'Executive Director', src: EmnaM, row: 4 },
];

const commissairesMembers = [
  { name: 'Ramzy Mharsi',        role: 'Auditor', src: Ramzy,    row: 5 },
  { name: 'Boulbeba Boujelbene', role: 'Auditor', src: Boulbeba, row: 5 },
];

const conseillersMembers = [
  { name: 'Malek Boukhdhir',   role: 'Protocol Advisor',                    src: Malek,    row: 6 },
  { name: 'Emna Chouayakh',    role: 'Debate and Oratory Arts Advisor',     src: Emna,     row: 6 },
  { name: 'Ghofrane Chaabene', role: 'TOYP and CYE Advisor',                src: Ghofrane, row: 6 },
  { name: 'Marwa Kadri',       role: 'National Themes Advisor',             src: Marwa,    row: 7 },
  { name: 'Abir Gachout',      role: 'Media Advisor',                       src: Abir,     row: 7 },
  { name: 'Emna Krid',         role: 'Sponsorship and Partnership Advisor', src: EmnaK,    row: 7 },
];

const CIRCLE_SIZE = 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64';

const backgroundColors = {
  1: 'bg-[#0a1128]',
  2: 'bg-[#4db7e8]',
  3: 'bg-[#46b8a2]',
  4: 'bg-[#0a1128]',
  5: 'bg-[#4db7e8]',
  6: 'bg-[#46b8a2]',
  7: 'bg-[#4db7e8]',
};

const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="flex flex-col items-center text-center group"
  >
    <div className={`relative flex items-center justify-center mb-4 ${CIRCLE_SIZE}`}>
      <div className={`absolute inset-0 ${backgroundColors[member.row]} rounded-full transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-xl shadow-black/10`} />
      <img
        src={member.src}
        alt={member.name}
        width="256"
        height="256"
        className="relative z-10 object-contain w-4/5 transition-transform duration-500 rounded-full pointer-events-none select-none h-4/5 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <h3 className="px-2 mt-2 text-base font-black tracking-tighter text-[#0a1128] uppercase sm:text-lg md:text-xl">
      {member.name}
    </h3>
    <p className="px-2 text-xs font-bold tracking-[0.2em] text-[#4db7e8] uppercase sm:text-sm">
      {member.role}
    </p>
  </motion.div>
);

const Bureau = () => {
  const row1 = bureauMembers.filter((m) => m.row === 1);
  const row2 = bureauMembers.filter((m) => m.row === 2);
  const row3 = bureauMembers.filter((m) => m.row === 3);
  const row4 = directriceExecutiveMembers.filter((m) => m.row === 4);
  const row5 = commissairesMembers.filter((m) => m.row === 5);
  const row6 = conseillersMembers.filter((m) => m.row === 6);
  const row7 = conseillersMembers.filter((m) => m.row === 7);

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ paddingTop: '72px' }}
    >
      <div className="px-4 py-16 sm:px-8">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-black tracking-tighter text-[#0a1128] uppercase md:text-7xl"
          >
            Discover Our <span className="text-[#4db7e8]">2K24</span> Team
          </motion.h1>
          <div className="w-24 h-2 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4db7e8] to-[#46b8a2]" />
        </header>

        <section className="mx-auto space-y-20 max-w-7xl">
          <motion.h2
            className="text-xl font-black tracking-[0.25em] text-center text-[#46b8a2] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Executive Board
          </motion.h2>

          <div className="flex flex-col items-center mb-12">
            {row1.map((member, idx) => <MemberCard key={idx} member={member} />)}
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {row2.map((member, idx) => <MemberCard key={idx} member={member} />)}
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {row3.map((member, idx) => <MemberCard key={idx} member={member} />)}
          </div>

          <div className="pt-20 border-t border-gray-100">
            <motion.h2
              className="mb-12 text-xl font-black tracking-[0.25em] text-center text-[#0a1128] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Director Board
            </motion.h2>

            <div className="flex justify-center mb-16">
              {row4.map((member, idx) => <MemberCard key={idx} member={member} />)}
            </div>

            <div className="flex flex-wrap justify-center gap-12 mb-16 md:gap-24">
              {row5.map((member, idx) => <MemberCard key={idx} member={member} />)}
            </div>

            <div className="space-y-16">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {row6.map((member, idx) => <MemberCard key={idx} member={member} />)}
              </div>
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {row7.map((member, idx) => <MemberCard key={idx} member={member} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bureau;