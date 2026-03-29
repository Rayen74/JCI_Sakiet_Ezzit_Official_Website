import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Modal = ({ isOpen, onClose, image, title, description }) => {
  const modalRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap & initial focus
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000033]/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              className="relative w-full max-w-5xl max-h-[92vh] pointer-events-auto overflow-hidden rounded-3xl bg-white dark:bg-[#000033] shadow-2xl outline-none"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 28,
                  stiffness: 400,
                },
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                transition: { duration: 0.2 },
              }}
            >
              {/* Close Button - Top Right */}
              <button
                onClick={onClose}
                className="absolute z-20 p-2 text-gray-500 transition-all duration-200 bg-white rounded-full shadow-lg top-4 right-4 hover:text-[#0096D6] hover:scale-110 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="flex flex-col h-full md:flex-row">
                {/* Image Section */}
                <div className="flex-shrink-0 md:w-1/2">
                  <div className="relative h-64 overflow-hidden bg-gray-100 md:h-full dark:bg-gray-800">
                    <img
                      src={image}
                      alt={title}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Optional gradient overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#000033]/30 to-transparent" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
                  <h2
                    id="modal-title"
                    className="mb-6 text-3xl font-extrabold tracking-tight text-[#000033] sm:text-4xl dark:text-white"
                  >
                    
                    {title}
                  </h2>

                  <div
                    id="modal-description"
                    className="text-base leading-relaxed prose-sm prose text-gray-600 whitespace-pre-line dark:text-gray-300 max-w-none sm:prose-base"
                  >
                    {description || (
                      <p className="italic text-gray-500 dark:text-gray-400">
                        No description provided.
                      </p>
                    )}
                  </div>

                  {/* Optional CTA or extra space */}
                  <div className="mt-8">
                    <button
                      onClick={onClose}
                      className="px-6 py-3 text-sm font-medium text-white transition-all duration-200 bg-gradient-to-r from-[#0096D6] to-[#000033] rounded-xl hover:shadow-xl active:scale-95"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;