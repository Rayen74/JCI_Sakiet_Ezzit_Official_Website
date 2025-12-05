import React from 'react';
import { motion } from 'framer-motion';
import {
  TrophyIcon,
  CalendarDaysIcon,
  UsersIcon,
  TagIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const ProjectCard = ({
  image,
  title,
  description,
  category,
  year,
  impact,
  tags = [],
  duration,
  beneficiaries,
  onImageClick,
  trophyText,
}) => {
  const impactColors = {
    High: 'bg-green-100 text-green-700 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Low: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  return (
    <motion.article
      className="flex flex-col h-full overflow-hidden transition-all duration-500 border shadow-lg cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl border-white/20 group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      tabIndex={0}
      aria-label={`Project: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onImageClick();
        }
      }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          onClick={onImageClick}
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>

        {/* Category & Impact */}
        <div className="absolute flex flex-wrap gap-2 top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 py-1 text-xs font-medium text-gray-800 rounded-full sm:px-3 bg-white/90 backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">{year}</span>
        </div>

        {/* Expand Icon */}
        <motion.button
          className="absolute p-2 transition-all duration-300 rounded-full shadow-lg opacity-0 bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm group-hover:opacity-100"
          onClick={onImageClick}
          aria-label={`View details of ${title}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          tabIndex={-1}
        >
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-700" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 space-y-3 sm:p-6 sm:space-y-4">
        {/* Title and Trophy Icon */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors duration-200 sm:text-xl group-hover:text-blue-600">
            {title}
          </h3>
          {trophyText && (
            <div className="flex-shrink-0 mt-1" title="Award Winning Project">
              <TrophyIcon className="w-5 h-5 text-yellow-500" />
            </div>
          )}
        </div>

        {/* Trophy Text */}
        {trophyText && (
          <div className="flex items-start gap-2 p-3 border border-yellow-200 rounded-lg bg-yellow-50">
            <SparklesIcon className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs font-medium leading-relaxed text-yellow-800 sm:text-sm">{trophyText}</p>
          </div>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-200 sm:text-base line-clamp-3 group-hover:text-gray-700">
          {description}
        </p>

        {/* Stats */}
        {(duration || beneficiaries) && (
          <div className="grid grid-cols-1 gap-3 py-3 border-t border-gray-100 sm:grid-cols-2 sm:gap-4">
            {duration && (
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="flex-shrink-0 w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-600 sm:text-sm">{duration}</span>
              </div>
            )}
            {beneficiaries && (
              <div className="flex items-center gap-2">
                <UsersIcon className="flex-shrink-0 w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-600 sm:text-sm">{beneficiaries}</span>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            <TagIcon className="flex-shrink-0 w-4 h-4 mt-1 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs text-gray-700 transition-colors duration-200 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-md">+{tags.length - 3} more</span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;