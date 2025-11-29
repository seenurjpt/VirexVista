import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const getActiveLinkFromPath = (pathname) => {
    if (pathname === '/') return 'Home';
    if (pathname === '/about') return 'About';
    if (pathname === '/contact') return 'Contact';
    return 'Home';
  };
  
  const [activeLink, setActiveLink] = useState(getActiveLinkFromPath(location.pathname));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(getActiveLinkFromPath(location.pathname));
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Dock Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block'
      >
        <motion.div
          className='flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl'
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer px-5 py-2'
            >
              VirexVista
            </motion.div>
          </Link>

          {/* Divider */}
          <div className='w-px h-8 bg-gray-300/30'></div>

          {/* Navigation Links */}
          <div className='flex items-center gap-2 px-3'>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-2.5 text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                    activeLink === link.name
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 font-medium"
                  }`}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      layoutId='activeTab'
                      className='absolute inset-0 bg-white/60 backdrop-blur-md rounded-full -z-10 border border-white/40 shadow-lg'
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 16px rgba(31, 38, 135, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(12px)',
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className='w-px h-8 bg-gray-300/30'></div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='px-7 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed w-full top-0 z-50 md:hidden bg-white/90 backdrop-blur-lg shadow-lg'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer'
              >
                VirexVista
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100'
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200'
            >
              <div className='px-4 py-6 space-y-3'>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeLink === link.name
                          ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg'
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
