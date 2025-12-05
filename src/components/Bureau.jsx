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

// Members Data with roles in English
const bureauMembers = [
  { name: 'Ahmed Bouattour', role: 'President', src: Ahmed, row: 1 },
  { name: 'Narimen Chaabene', role: 'Immediate Past President', src: Narimen, row: 2 },
  { name: 'Molka Baklouti', role: 'Legal Advisor', src: Molka, row: 2 },
  { name: 'Taha Abid', role: 'VPFD', src: Taha, row: 3 },
  { name: 'Rahaf Chamtouri', role: 'VPPRE', src: Rahaf, row: 3 },
  { name: 'Rabeb Abid', role: 'General Secretary', src: Rabeb, row: 3 },
  { name: 'Rayen Chaaben', role: 'Treasurer', src: Rayen, row: 3 },
];

const directriceExecutiveMembers = [
  { name: 'Emna Mtibaa', role: 'Executive Director', src: EmnaM, row: 4 },
];

const commissairesMembers = [
  { name: 'Ramzy Mharsi', role: 'Auditor', src: Ramzy, row: 5 },
  { name: 'Boulbeba Boujelbene', role: 'Auditor', src: Boulbeba, row: 5 },
];

const conseillersMembers = [
  { name: 'Malek Boukhdhir', role: 'Protocol Advisor', src: Malek, row: 6 },
  { name: 'Emna Chouayakh', role: 'Debate and Oratory Arts Advisor', src: Emna, row: 6 },
  { name: 'Ghofrane Chaabene', role: 'TOYP and CYE Advisor', src: Ghofrane, row: 6 },
  { name: 'Marwa Kadri', role: 'National Themes Advisor', src: Marwa, row: 7 },
  { name: 'Abir Gachout', role: 'Media Advisor', src: Abir, row: 7 },
  { name: 'Emna Krid', role: 'Sponsorship and Partnership Advisor', src: EmnaK, row: 7 },
];

// Circle size class - responsive sizing
const CIRCLE_SIZE = 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64';

// Background colors for each row using your gradients
const backgroundColors = {
  1: 'bg-gradient-to-r from-[#ffde59] to-[#f2c038]',
  2: 'bg-gradient-to-r from-[#066CBA] to-[#003C67]',
  3: 'bg-gradient-to-r from-[#0cc0df] to-[#066CBA]',
  4: 'bg-gradient-to-r from-[#ffde59] to-[#f2c038]',
  5: 'bg-gradient-to-r from-[#066CBA] to-[#003C67]',
  6: 'bg-gradient-to-r from-[#0cc0df] to-[#066CBA]',
  7: 'bg-gradient-to-r from-[#0cc0df] to-[#066CBA]',
};

// Member card component with circle background and animation
const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="flex flex-col items-center text-center"
    aria-label={`${member.role} - ${member.name}`}
  >
    <div className={`relative flex items-center justify-center mb-3 ${CIRCLE_SIZE}`}>
      <div className={`absolute inset-0 ${backgroundColors[member.row]} rounded-full`} />
      <img
        src={member.src}
        alt={member.name}
        className="relative z-10 object-contain w-4/5 rounded-full h-4/5"
        loading="lazy"
      />
    </div>
    <h3 className="px-2 mt-2 text-base font-semibold text-gray-800 break-words sm:text-lg md:text-xl">{member.name}</h3>
    <p className="px-2 text-xs text-blue-600 break-words sm:text-sm md:text-base">{member.role}</p>
  </motion.div>
);

const Bureau = () => {
  // Filter members by row
  const row1 = bureauMembers.filter((m) => m.row === 1);
  const row2 = bureauMembers.filter((m) => m.row === 2);
  const row3 = bureauMembers.filter((m) => m.row === 3);
  const row4 = directriceExecutiveMembers.filter((m) => m.row === 4);
  const row5 = commissairesMembers.filter((m) => m.row === 5);
  const row6 = conseillersMembers.filter((m) => m.row === 6);
  const row7 = conseillersMembers.filter((m) => m.row === 7);

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-200 sm:px-6 md:px-12 sm:py-12 md:py-16">

      <motion.h2
        className="mb-8 text-3xl font-bold text-center text-gray-900 sm:mb-12 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Discover Our 2K24 Team
      </motion.h2>

      {/* Executive Board heading before President */}
      <motion.h2
        className="mb-6 text-2xl font-extrabold text-center text-blue-900 sm:mb-8 sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Meet our Executive Board
      </motion.h2>

      {/* President Section */}
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-12 sm:mb-16">
        {row1.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Row 2: Immediate Past President & Legal Advisor */}
      <div className="flex flex-wrap justify-center max-w-6xl gap-12 mx-auto mb-12 sm:gap-16 md:gap-24 sm:mb-16">
        {row2.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Row 3: VPFD, VPPRE, Secretary, Treasurer */}
      <div className="grid justify-center max-w-6xl grid-cols-1 gap-8 mx-auto mb-12 sm:grid-cols-2 lg:grid-cols-4 sm:mb-16">
        {row3.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Director Board heading */}
      <motion.h2
        className="mt-8 mb-6 text-2xl font-extrabold text-center text-yellow-700 sm:mt-12 sm:mb-8 sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Meet our Director Board
      </motion.h2>

      {/* Executive Director Section */}
      <div className="flex justify-center max-w-6xl mx-auto mb-12 sm:mb-16">
        {row4.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Auditors Section */}
      <div className="flex flex-wrap justify-center max-w-6xl gap-12 mx-auto mb-12 sm:gap-16 md:gap-24 sm:mb-16">
        {row5.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Advisors Row 6 */}
      <div className="grid justify-center max-w-6xl grid-cols-1 gap-8 mx-auto mb-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 md:gap-20 sm:mb-16">
        {row6.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {/* Advisors Row 7 */}
      <div className="grid justify-center max-w-6xl grid-cols-1 gap-8 mx-auto mb-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 md:gap-20 sm:mb-16">
        {row7.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Bureau;