import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '919898256498'; // India country code + number
  const message = encodeURIComponent(
    'Hi! I would like to get a quote for web development services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip for first-time visitors
    const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
    if (!hasSeenTooltip && isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 2000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="absolute bottom-20 right-0 mb-2"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <HiX size={14} />
                  </button>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        Need a quote?
                      </p>
                      <p className="text-xs text-gray-600">
                        Chat with us on WhatsApp for instant support!
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
            aria-label="Contact us on WhatsApp"
          >
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Icon */}
            <FaWhatsapp className="text-white z-10" size={28} />

            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            />
          </motion.button>

          {/* Hover Text (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              Chat with us!
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;

