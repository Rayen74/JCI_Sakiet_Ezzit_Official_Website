import React, { useState, useMemo, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import {
  FunnelIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import Forsa from '../assets/Forsa.jpg';
import MindfullWork from '../assets/MindfullWork.jpg';
import KidsUp from '../assets/KidsUp.jpg';
import Proday from '../assets/Proday.jpg';
import AichouClean from '../assets/AichouClean.jpg';
import Farahni from '../assets/Farahni.jpg';

const projects = [
  {
    id: 1,
    image: Forsa,
    title: 'Forsa',
    category: 'Community Development',
    year: '2023-2024',
    description:
      'The "Forsa" project empowers young girls who have dropped out of school by providing psychosocial and educational support tailored to their needs. It offers concrete opportunities to develop their creativity and entrepreneurial skills, encouraging their active engagement within the community through the creation of lasting connections. By doing so, it contributes to local social and economic development, fostering a brighter future for these young women',
    trophyText: 'Best Local Community Impact Program Area E JCI Tunisia 2023',
    tags: ['Leadership', 'Youth Development', 'Community'],
    duration: '4 months',
    beneficiaries: '50+ young people',
  },
  {
    id: 2,
    image: MindfullWork,
    title: 'MindfullWork',
    category: 'Professional Development',
    year: '2024',
    description:
      'The MINDFULL WORK program is dedicated to preserving the mental health of employees in both public and private sectors. It aims to enhance their well-being by providing practical tools to better manage stress, resolve workplace conflicts, and develop essential social skills.',
    trophyText: 'Best JCI RISE Project CAMO 2025',
    tags: ['Mental Health', 'Workplace Wellness', 'Training'],
    duration: '1 day',
    beneficiaries: '30+ participants',
  },
  {
    id: 3,
    image: KidsUp,
    title: 'KidsUp',
    category: 'Education',
    year: '2024',
    description:
      "The KIDS UP project, held on May 18 and 19, 2024, aims to convey a positive message to primary school students, particularly those in 5th and 6th grades, encouraging them to become agents of change in their community. The project offers a variety of workshops and activities to stimulate their personal and academic development while boosting their self-esteem.",
    trophyText: 'Best Local Community Impact Program JCI Tunisia 2024',
    tags: ['Education', 'Children', 'Empowerment'],
    duration: '2 days',
    beneficiaries: '60+ students',
  },
  {
    id: 4,
    image: Proday,
    title: 'Proday',
    category: 'Innovation',
    year: '2023',
    description:
      "ProDay, organized by JCI Sakiet Ezzit, is an innovation competition aimed at mobilizing various stakeholders to create sustainable solutions for social, economic, and environmental development. More than just a contest, it is a collaborative platform that fosters creativity, skill-sharing, and commitment to achieve tangible and positive societal impact.",
    tags: ['Innovation', 'Competition', 'Sustainability'],
    duration: '1 day',
    beneficiaries: '50+ participants',
  },
  {
    id: 5,
    image: AichouClean,
    title: 'N3ichou Clean',
    category: 'Environment',
    impact: 'Medium',
    description:
      "The 'N3ichou Clean' project aims to raise environmental awareness by actively involving citizens and the community in sustainable waste management through sorting, recycling, and composting. This collaborative initiative seeks to enhance the efficiency of collective efforts to ensure lasting results while creating sustainable income sources through the resale of recyclable items useful in daily life.",
    tags: ['Environment', 'Sustainability', 'Community'],
    duration: '3 weeks',
    beneficiaries: '60 + participants',
  },
  {
    id: 6,
    image: Farahni,
    title: 'Farahni',
    category: 'Community Development',
    year: '2024',
    description:
      "The Farahni project is dedicated to new high school graduates to help them make university choices through stands featuring students from various specialties and experts. It aims to provide personalized guidance and support to help them make informed decisions about their academic and professional future.",
    trophyText: 'Best Local Growth and Development Program Area E JCI Tunisia 2024',
    tags: ['Community', 'Development'],
    duration: '1 day',
    beneficiaries: '120+ students',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case 'alphabetical':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'recent':
      default:
        return filtered.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }
  }, [selectedCategory, searchTerm, sortBy]);

  const openModal = (project) => {
    setModalImage(project.image);
    setModalTitle(project.title);
    setModalDescription(project.description);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalTitle('');
    setModalDescription('');
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
    setSortBy('recent');
  };

  const hasActiveFilters = selectedCategory !== 'All' || searchTerm !== '' || sortBy !== 'recent';

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header */}
      <motion.section
        ref={headerRef}
        className="relative px-4 py-12 overflow-hidden sm:px-6 lg:px-8 sm:py-16"
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 rounded-full left-1/4 w-72 h-72 bg-blue-200/20 blur-3xl"></div>
          <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-yellow-200/20 blur-3xl"></div>
        </div>

        <div className="mx-auto text-center max-w-7xl">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 mb-4 text-xs font-medium text-blue-700 bg-blue-100 rounded-full sm:px-4 sm:text-sm sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TrophyIcon className="w-4 h-4" />
            Award-Winning Projects
          </motion.div>

          <motion.h1
            className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover Our{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text">
              Impact Projects
            </span>
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore our comprehensive portfolio of community-driven initiatives that create lasting positive change across Tunisia and beyond. Each project represents our commitment to leadership, innovation, and social impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8 sm:gap-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">{projects.length}+</div>
              <div className="text-xs text-gray-600 sm:text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 sm:text-3xl">1000+</div>
              <div className="text-xs text-gray-600 sm:text-sm">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 sm:text-3xl">4</div>
              <div className="text-xs text-gray-600 sm:text-sm">Awards Won</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter, Search & Controls */}
      <section className="sticky top-0 z-40 border-b shadow-sm bg-white/95 backdrop-blur-lg border-gray-200/50">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <MagnifyingGlassIcon className="absolute w-4 h-4 text-black transform -translate-y-1/2 left-3 top-1/2 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-10 text-sm text-black transition-all duration-200 bg-white border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent sm:py-3 sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute p-1 transition-colors transform -translate-y-1/2 rounded-full right-2 top-1/2 sm:right-3 hover:bg-gray-200"
                  aria-label="Clear search"
                >
                  <XMarkIcon className="w-4 h-4 text-black" />
                </button>
              )}
            </div>

            {/* Filters and controls */}
            <div className="flex flex-wrap items-center w-full gap-2 sm:gap-3 lg:w-auto">
              {/* Category Filter */}
              <div className="relative flex-1 min-w-[140px] sm:flex-initial">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 pr-8 text-sm text-black transition-all duration-200 bg-white border border-black rounded-lg appearance-none sm:px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  aria-label="Filter by category"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <FunnelIcon className="absolute w-4 h-4 text-black transform -translate-y-1/2 pointer-events-none right-2 top-1/2" />
              </div>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 min-w-[120px] sm:flex-initial px-3 sm:px-4 py-2 pr-8 text-sm transition-all duration-200 border border-black rounded-lg appearance-none bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                aria-label="Sort projects"
              >
                <option value="recent">Most Recent</option>
                <option value="alphabetical">A-Z</option>
              </select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm transition-all duration-200 bg-gray-100 rounded-lg sm:px-4 hover:bg-gray-200 whitespace-nowrap"
                  style={{ color: 'black' }}
                >
                  <XMarkIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div
              className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-gray-100"
              aria-live="polite"
              style={{ color: 'black' }}
            >
              <span className="text-xs sm:text-sm">Active filters:</span>
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs text-black bg-blue-100 rounded-full sm:px-3">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="ml-1 p-0.5 rounded-full hover:bg-blue-200"
                    aria-label={`Remove filter ${selectedCategory}`}
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs text-black bg-green-100 rounded-full sm:px-3">
                  &quot;{searchTerm}&quot;
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1 p-0.5 rounded-full hover:bg-green-200"
                    aria-label="Clear search term"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Projects Listing */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Summary */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-sm text-gray-600 sm:text-base">
              Showing{' '}
              <span className="font-semibold text-gray-900">{filteredAndSortedProjects.length}</span>{' '}
              {filteredAndSortedProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && (
                <span>
                  {' '}
                  in <span className="font-semibold text-blue-600">{selectedCategory}</span>
                </span>
              )}
            </p>
          </div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredAndSortedProjects.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchTerm}-${sortBy}`}
                className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredAndSortedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    layout
                    className="h-full"
                  >
                    <ProjectCard
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      year={project.year}
                      impact={project.impact}
                      tags={project.tags}
                      duration={project.duration}
                      beneficiaries={project.beneficiaries}
                      onImageClick={() => openModal(project)}
                      trophyText={project.trophyText}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="py-16 text-center sm:py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full sm:w-24 sm:h-24 sm:mb-6">
                  <MagnifyingGlassIcon className="w-10 h-10 text-gray-400 sm:w-12 sm:h-12" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">No projects found</h3>
                <p className="max-w-md mx-auto mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
                  We couldn't find any projects matching your current filters. Try adjusting your search criteria or clearing the filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-4 py-2 text-sm text-white transition-colors duration-200 bg-blue-600 rounded-lg sm:px-6 sm:py-3 sm:text-base hover:bg-blue-700"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={modalImage}
        title={modalTitle}
        description={modalDescription}
      />
    </main>
  );
};

export default Projects;