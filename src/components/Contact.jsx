import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', facebookLink: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.facebookLink && !/^https?:\/\/.+/.test(formData.facebookLink)) {
      newErrors.facebookLink = 'Invalid URL';
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setIsLoading(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '', facebookLink: '' });
      setErrors({});
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 sm:py-16 pt-[72px] md:pt-[80px]">
      <motion.div
        className="relative w-full max-w-2xl px-6 py-10 mx-auto overflow-hidden bg-white shadow-xl rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-16 h-16 rounded-br-full bg-[#0a1128] opacity-5" />
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-gradient-to-tl from-[#4db7e8] to-[#46b8a2] opacity-10" />

        <div className="relative mb-10 text-center">
          <motion.h2
            className="text-3xl font-black tracking-wide text-[#0a1128] uppercase sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact <span className="text-[#4db7e8]">JCI Sakiet Ezzit</span>
          </motion.h2>
          <p className="mt-2 font-medium text-[#46b8a2] uppercase tracking-wider text-sm">
            Developing Leaders for a Changing World
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#4db7e8] to-[#46b8a2] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-black tracking-wide text-[#0a1128] uppercase">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text" id="name" name="name" value={formData.name} onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 transition bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4db7e8] focus:border-transparent outline-none focus:bg-white"
            />
            {errors.name && <p className="mt-1 text-xs font-bold text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-black tracking-wide text-[#0a1128] uppercase">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email" id="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="example@jci.org"
              className="w-full px-4 py-3 transition bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4db7e8] focus:border-transparent outline-none focus:bg-white"
            />
            {errors.email && <p className="mt-1 text-xs font-bold text-red-500">{errors.email}</p>}
          </div>

          {/* Facebook */}
          <div>
            <label htmlFor="facebookLink" className="block mb-2 text-sm font-black tracking-wide text-[#0a1128] uppercase">
              Facebook Profile <span className="text-xs font-normal text-gray-400 normal-case">(Optional)</span>
            </label>
            <input
              type="url" id="facebookLink" name="facebookLink" value={formData.facebookLink} onChange={handleChange}
              placeholder="https://facebook.com/..."
              className="w-full px-4 py-3 transition bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4db7e8] focus:border-transparent outline-none focus:bg-white"
            />
            {errors.facebookLink && <p className="mt-1 text-xs font-bold text-red-500">{errors.facebookLink}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-black tracking-wide text-[#0a1128] uppercase">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 transition bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4db7e8] focus:border-transparent outline-none resize-none focus:bg-white"
            />
            {errors.message && <p className="mt-1 text-xs font-bold text-red-500">{errors.message}</p>}
          </div>

          {/* Submit */}
          <motion.button
            onClick={handleSubmit}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-black tracking-widest text-white uppercase shadow-lg transition-all ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#4db7e8] to-[#46b8a2] hover:opacity-90 active:shadow-inner'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </span>
            ) : 'Send Message'}
          </motion.button>

          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`text-center p-3 rounded-xl font-bold tracking-wide border ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border-green-100'
                    : 'bg-red-50 text-red-700 border-red-100'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;