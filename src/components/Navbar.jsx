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
      <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block'>
        <div
          className='flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl transition-all duration-300'
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
        </div>
      </nav>

      {/* Mobile Navigation - Dock Style */}
      <nav className='fixed top-4 left-4 right-4 z-50 md:hidden'>
        <div 
          className='flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl'
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
              className='text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer'
            >
              VirexVista
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors rounded-full hover:bg-white/20'
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown - Dock Style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className='mt-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden'
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              }}
            >
              <div className='p-4 space-y-2'>
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-6 py-3.5 rounded-2xl font-medium transition-all duration-200 ${
                        activeLink === link.name
                          ? "text-blue-600 font-bold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {activeLink === link.name && (
                        <motion.div
                          layoutId='mobileActiveTab'
                          className='absolute inset-0 bg-white/60 backdrop-blur-md rounded-2xl -z-10 border border-white/40 shadow-lg'
                          style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            boxShadow: '0 4px 16px rgba(31, 38, 135, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(12px)',
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                
                {/* Divider */}
                <div className='h-px bg-gray-300/30 my-2'></div>
                
                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-6 py-3.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg'
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
