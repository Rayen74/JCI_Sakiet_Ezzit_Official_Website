import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaAward,
  FaMicrophone,
  FaHandshake,
  FaRegSmile,
  FaGlobeAmericas,
} from "react-icons/fa";

// Icon mapping for each program
const iconMap = {
  "CYE (Creative Young Entrepreneurs)": FaLightbulb,
  "TOYP (Ten Outstanding Young People)": FaUsers,
  Awards: FaAward,
  "Public Speaking and Debate": FaMicrophone,
  Twinning: FaHandshake,
  "100% Efficiency": FaRegSmile,
  "JCI RISE": FaGlobeAmericas,
};

// Programs data with names and descriptions
const programs = [
  {
    name: "CYE (Creative Young Entrepreneurs)",
    description:
      "Empowers young entrepreneurs through mentorship, training, and business pitch competitions designed to foster creativity and innovation.",
  },
  {
    name: "TOYP (Ten Outstanding Young People)",
    description:
      "Recognizes and celebrates the achievements of ten young people who excel in their respective fields and positively impact their communities.",
  },
  {
    name: "Awards",
    description:
      "Honors exceptional individuals and projects demonstrating leadership, impact, and alignment with the values of JCI.",
  },
  {
    name: "Public Speaking and Debate",
    description:
      "Enhances communication and critical thinking skills through structured public speaking and debate contests.",
  },
  {
    name: "Twinning",
    description:
      "Fosters international cooperation and cultural exchange by building partnerships with other JCI chapters around the world.",
  },
  {
    name: "100% Efficiency",
    description:
      "Promotes optimal chapter performance and operational excellence by increasing effectiveness and productivity.",
  },
  {
    name: "JCI RISE",
    description:
      "Supports economic resilience and sustainable growth with targeted programs under the global JCI RISE framework.",
  },
];

const ProgramCard = ({ program }) => {
  const Icon = iconMap[program.name];
  const titleId = `${program.name.replace(/\s+/g, "-")}-title`;
  const descId = `${program.name.replace(/\s+/g, "-")}-desc`;

  return (
    <motion.article
      tabIndex={0}
      role="article"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative flex flex-col items-center justify-start w-full max-w-sm p-6 m-0 transition-transform transform bg-white shadow-lg cursor-pointer select-none sm:p-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 220, 0, 0.25)" }}
      whileFocus={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 220, 0, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 text-4xl text-white rounded-full shadow-lg sm:w-20 sm:h-20 sm:mb-6 sm:text-5xl bg-gradient-to-r from-blue-600 to-blue-400"
      >
        {Icon && <Icon />}
      </span>
      <h2
        id={titleId}
        className="mb-3 text-lg font-extrabold leading-tight text-center text-blue-900 sm:mb-5 sm:text-xl md:text-2xl"
      >
        {program.name}
      </h2>
      <p
        id={descId}
        className="text-sm leading-relaxed text-center text-gray-700 sm:text-base"
      >
        {program.description}
      </p>
    </motion.article>
  );
};

export default function Activity() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 sm:py-16 md:px-12 md:py-24"
      lang="en"
    >
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center text-blue-700 select-none sm:mb-14 sm:text-5xl md:text-6xl">
        Programs
      </h1>
      <section className="grid w-full grid-cols-1 gap-6 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 md:gap-10">
        {programs.map((program) => (
          <ProgramCard key={program.name} program={program} />
        ))}
      </section>
    </main>
  );
}