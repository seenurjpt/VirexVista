import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiSparkles, HiLightningBolt } from 'react-icons/hi';

const Hero = () => {
  const floatingIcons = [
    { Icon: HiCode, color: 'text-blue-500', position: 'top-20 right-10', delay: 0 },
    { Icon: HiSparkles, color: 'text-purple-500', position: 'top-40 right-32', delay: 0.2 },
    { Icon: HiLightningBolt, color: 'text-green-500', position: 'top-60 right-20', delay: 0.4 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
              background: i === 0 ? '#3B82F6' : i === 1 ? '#8B5CF6' : '#10B981',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-sm font-semibold text-blue-600">
                🚀 Welcome to VirexVista
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Building Digital
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              We craft stunning web solutions that transform your ideas into
              powerful digital experiences. Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            {/* Main Illustration Container */}
            <div className="relative w-full h-96">
              {/* Code Window */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 bg-gray-800 rounded-lg shadow-2xl p-4 z-10"
              >
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">&lt;/&gt;</span>
                    <span className="text-gray-400 text-sm">index.jsx</span>
                  </div>
                  <div className="h-2 bg-purple-500 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-500 rounded w-1/2"></div>
                  <div className="h-2 bg-green-500 rounded w-2/3"></div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, color, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + delay }}
                  className={`absolute ${position}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`${color} bg-white p-4 rounded-2xl shadow-xl`}
                  >
                    <Icon size={32} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Central Character/Element */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

