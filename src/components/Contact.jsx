import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    facebookLink: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Validate form
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

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus({ type: 'success', message: 'Email sent successfully!' });
      setFormData({ name: '', email: '', message: '', facebookLink: '' });
      setErrors({});
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 lg:flex-row">
      {/* Left Section: Motivation & Join Link */}
      <div className="relative flex flex-col items-center justify-center w-full gap-4 p-6 text-white sm:p-8 md:p-10 lg:w-1/2 bg-gradient-to-br from-[#0097d7] to-[#0cc0df]">
        {/* Decorative icon */}
        <div className="absolute text-white pointer-events-none select-none top-4 left-4 opacity-20 sm:top-6 sm:left-6">
          <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-16 sm:h-16">
            <circle cx="24" cy="24" r="22" />
            <path d="M16 26l6 6 9-13" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-extrabold text-center drop-shadow-md sm:text-3xl">Join JCI Sakiet Ezzit!</h3>
        <p className="max-w-md text-sm font-light leading-relaxed text-center sm:text-base md:text-lg drop-shadow-md">
          Unlock new opportunities, <span className="font-bold text-yellow-200">lead with impact</span>, and engage with passionate changemakers.<br />
          <span className="text-xs italic opacity-90 sm:text-sm md:text-base">Ready to shape your future?</span>
        </p>
        <a
          href="https://forms.gle/nt1bK2kJpzLCbQU47"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-blue-900 transition-all bg-yellow-200 rounded-full shadow-md sm:px-8 sm:py-3 sm:text-base hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          <span>Join Now</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block sm:w-5 sm:h-5">
            <path d="M3 10h14 M10 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Right Section: Contact Form */}
      <div className="flex flex-col justify-center w-full p-6 bg-white sm:p-8 md:p-10 lg:w-1/2">
        <h2 className="mb-6 text-2xl font-bold text-center text-indigo-800 sm:text-3xl">Contact Us</h2>
        <div className="space-y-4 sm:space-y-5" onKeyPress={handleKeyPress}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-3 py-2 text-sm text-black transition border border-gray-300 rounded-lg shadow-sm sm:px-4 sm:py-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.name && (
              <div className="flex items-center gap-2 mt-1 text-xs text-red-600 sm:text-sm">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 text-sm text-black transition border border-gray-300 rounded-lg shadow-sm sm:px-4 sm:py-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && (
              <div className="flex items-center gap-2 mt-1 text-xs text-red-600 sm:text-sm">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Facebook Link */}
          <div>
            <label htmlFor="facebookLink" className="block mb-1 text-sm font-semibold text-gray-700">
              Facebook Link
            </label>
            <input
              type="url"
              id="facebookLink"
              name="facebookLink"
              value={formData.facebookLink}
              onChange={handleChange}
              placeholder="https://facebook.com/yourprofile"
              className="w-full px-3 py-2 text-sm text-black transition border border-gray-300 rounded-lg shadow-sm sm:px-4 sm:py-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.facebookLink && (
              <div className="flex items-center gap-2 mt-1 text-xs text-red-600 sm:text-sm">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.facebookLink}</span>
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-3 py-2 text-sm text-black transition border border-gray-300 rounded-lg shadow-sm resize-y sm:px-4 sm:py-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.message && (
              <div className="flex items-center gap-2 mt-1 text-xs text-red-600 sm:text-sm">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-2.5 text-sm font-bold transition-all duration-300 rounded-full shadow-md sm:py-3 sm:text-base ${
              isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:brightness-110 focus:ring-4 focus:ring-indigo-300'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-indigo-400 animate-spin sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" />
                  <path className="opacity-75" d="M4 12a8 8 0 018-8v0a8 8 0 018 8v0a8 8 0 01-8 8v0a8 8 0 01-8-8v0" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status Message */}
          {submitStatus && (
            <div
              role="alert"
              className={`mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold sm:mt-5 sm:text-sm ${
                submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <svg className="w-5 h-5 text-green-500 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <p>{submitStatus.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;