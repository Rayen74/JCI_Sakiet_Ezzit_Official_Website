import React, { useRef } from 'react';
import Home from '../assets/Home.png';
import { 
  CalendarIcon, 
  UsersIcon, 
  DocumentTextIcon, 
  GlobeAltIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  UserIcon,
  EyeIcon,           // ← New: for Vision
  RocketLaunchIcon   // ← New: for Mission
} from '@heroicons/react/24/solid';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

const Welcome = () => {
  const whiteSectionRef = useRef(null);
  const isInView = useInView(whiteSectionRef, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  // Navigation handlers
  const handleNavigate = (path) => {
    console.log('Navigate to:', path);
  };

  const axes = [
    {
      icon: UserIcon,
      value: 'Individual',
      description: 'Empowering individuals through personal development and leadership opportunities.',
    },
    {
      icon: UserGroupIcon,
      value: 'Community',
      description: 'Strengthening communities by promoting collaboration and local initiatives.',
    },
    {
      icon: BriefcaseIcon,
      value: 'Business',
      description: 'Fostering entrepreneurial spirit and sustainable business practices.',
    },
    {
      icon: GlobeAltIcon,
      value: 'Internationalism',
      description: 'Building global connections to promote peace and cooperation.',
    },
  ];

  return (
    <main className ="flex flex-col w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container relative w-full px-4 py-6 mx-auto sm:py-8 md:py-12 max-w-7xl md:px-8">
        <div className="w-full mx-auto">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            
            {/* Content Area - Left Side */}
            <motion.div
              className="order-2 lg:order-1"
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative p-4 overflow-hidden bg-white shadow-lg sm:p-6 md:p-8 rounded-2xl">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-br-full sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-full sm:w-16 sm:h-16 bg-gradient-to-tl from-yellow-400 to-yellow-500 opacity-20"></div>
                
                <header className="space-y-2 sm:space-y-3">
                  <h1 className="text-2xl font-bold leading-tight text-yellow-500 sm:text-3xl md:text-4xl lg:text-5xl">
                    The Junior Chamber International
                    <span className="block mt-1">Sakiet Ezzit</span>
                  </h1>
                  <p className="text-lg font-semibold text-blue-600 sm:text-xl md:text-2xl">
                    Lead With Purpose
                  </p>
                </header>

                <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:gap-4 sm:mt-6">
                  <button
                    onClick={() => handleNavigate('/our-board')}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 transform bg-blue-600 rounded-lg shadow-lg sm:px-6 sm:py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl hover:scale-105"
                    aria-label="View our board members"
                  >
                    Our Board
                  </button>
                  <button
                    onClick={() => handleNavigate('/projects')}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-800 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-lg shadow-md sm:px-6 sm:py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:shadow-lg"
                    aria-label="Explore our projects"
                  >
                    Our Projects
                  </button>
                </div>

                <div className="mt-4 space-y-2 text-blue-700 sm:mt-6 sm:space-y-3">
                  <p className="text-sm leading-relaxed sm:text-base">
                    JCI is a global network of active young citizens aged 18 to 40 who are committed to creating positive change in their communities. With over 100 years of history, we have trained leaders in more than 120 countries.
                  </p>
                  <p className="text-sm leading-relaxed sm:text-base">
                    JCI Sakiet Ezzit is a local organization of members, a branch of the Junior Chamber International Organization in Tunisia, affiliated with the United Nations. Founded in 1994 and reactivated in 2015.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Area - Right Side */}
            <motion.div
              className="order-1 lg:order-2"
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                <img 
                  src={Home} 
                  alt="JCI Sakiet Ezzit team members" 
                  className="w-full h-auto shadow-lg rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <motion.section
        ref={whiteSectionRef}
        className="w-full px-4 py-6 mx-auto sm:py-8 md:py-12 max-w-7xl md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="p-4 bg-white shadow-lg sm:p-6 md:p-8 rounded-3xl">
          
          {/* Statistics Section */}
          <motion.div 
            className="grid gap-3 mb-6 sm:gap-4 md:grid-cols-3 sm:mb-8"
            variants={itemVariants}
          >
            {[
              { icon: CalendarIcon, value: '30', label: 'Years of Impact', color: 'text-yellow-500' },
              { icon: UsersIcon, value: '25', label: 'Trainings Per Year', color: 'text-blue-500' },
              { icon: DocumentTextIcon, value: '5', label: 'Projects Per Year', color: 'text-green-500' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative p-3 text-center transition-all duration-300 bg-gray-50 sm:p-4 rounded-2xl hover:bg-white hover:shadow-lg group"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 ${stat.color}`} />
                <span className={`block text-2xl sm:text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="block mt-1 text-sm font-medium text-gray-700 sm:text-base">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-1 rounded-full sm:w-20 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
          </div>

          {/* Vision & Mission – Now with real icons */}
          <motion.div 
            className="grid gap-3 mb-6 sm:gap-4 lg:grid-cols-2 sm:mb-8"
            variants={itemVariants}
          >
            {[
              {
                title: 'Vision',
                text: 'To be the foremost global network of young leaders.',
                icon: EyeIcon,           // Professional Vision icon
                color: 'text-yellow-500'
              },
              {
                title: 'Mission',
                text: 'To provide leadership development opportunities that empower young people to create positive change.',
                icon: RocketLaunchIcon,  // Dynamic Mission icon
                color: 'text-blue-600'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative p-3 transition-all duration-300 border border-gray-100 sm:p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              >
                <item.icon className={`w-10 h-10 mb-3 ${item.color}`} />
                <h2 className="mb-2 text-lg font-bold text-yellow-500 uppercase sm:text-xl">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-1 rounded-full sm:w-20 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
          </div>

          {/* Credo Section */}
          <motion.div 
            className="p-3 mb-6 border border-gray-100 sm:p-4 md:p-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl"
            variants={itemVariants}
          >
            <h2 className="mb-3 text-xl font-bold text-center text-yellow-500 uppercase sm:mb-4 sm:text-2xl">
              Creed
            </h2>
            <div className="max-w-4xl mx-auto text-sm leading-loose text-center text-gray-700 sm:text-base">
              <span className="block mb-2 text-base font-semibold text-blue-600 sm:text-lg">We Believe:</span>
              <div className="space-y-1">
                <p>That faith in God gives meaning and purpose to human life</p>
                <p>That the brotherhood of man transcends the sovereignty of nations</p>
                <p>That economic justice can best be won by free men through free enterprise</p>
                <p>That government should be of laws rather than of men</p>
                <p>That earth's great treasure lies in human personality</p>
                <p className="font-semibold">And that service to humanity is the best work of life.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-1 rounded-full sm:w-20 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
          </div>

          {/* Axes Section */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-xl font-bold text-center text-yellow-500 uppercase sm:mb-6 sm:text-2xl">
              Our Axes
            </h2>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {axes.map((axis, i) => (
                <motion.div
                  key={i}
                  className="relative p-3 text-center transition-all duration-300 bg-white border border-gray-200 sm:p-4 rounded-2xl hover:shadow-lg hover:border-blue-200 group"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <axis.icon className="w-8 h-8 mx-auto mb-2 text-yellow-500 transition-colors duration-300 sm:w-10 sm:h-10 group-hover:text-blue-500" />
                  <h3 className="mb-2 text-base font-bold text-yellow-500 transition-colors duration-300 sm:text-lg group-hover:text-blue-500">
                    {axis.value}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {axis.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Welcome;