'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Header = ({ className = '', ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'SERVICES', href: '#services' },
    { label: 'JURISDICTIONS', href: '#jurisdictions' },
    { label: 'Process', href: '#process' },
    { label: 'USE CASES', href: '#use-cases' },
  ];

  return (
    <motion.header 
      className={`w-full bg-[#1c2833] px-4 sm:px-6 lg:px-[84px] py-6 lg:py-[24px] ${className}`}
      {...props}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1]
      }}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-[37px] font-bold leading-tight lg:leading-[43px] text-left uppercase text-[#ffffff] font-helvetica"
            whileHover={{ color: "#f39712" }}
            transition={{ duration: 0.2 }}
          >
            Corplanta
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 m-auto">
          <motion.div 
            className="flex items-center justify-center gap-6 xl:gap-[26px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                role="menuitem"
                className="text-sm font-normal leading-[17px] text-center uppercase text-[#ffffff] hover:text-[#f39712] transition-colors duration-200 font-helvetica"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </nav>

        {/* CTA Button - Desktop */}
        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ 
              backgroundColor: "#f39712",
              transition: { duration: 0.2 }
            }}
          >
            <Button
              variant="primary"
              className="px-6 py-3.5 text-base font-bold leading-[19px] text-left uppercase"
            >
              Book A Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden p-2 text-[#ffffff] hover:text-[#f39712] transition-colors duration-200" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-600"
          >
            <motion.div 
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  role="menuitem"
                  className="text-sm font-normal leading-[17px] text-left uppercase text-[#ffffff] hover:text-[#f39712] transition-colors duration-200 py-2 font-helvetica"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ 
                    backgroundColor: "#f39712",
                    transition: { duration: 0.2 }
                  }}
                >
                  <Button
                    variant="primary"
                    fullWidth
                    className="text-base font-bold leading-[19px] uppercase"
                  >
                    Book A Call
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;