'use client';
import React, { useState } from 'react';
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
    <header 
      className={`w-full bg-[#1c2833] px-4 sm:px-6 lg:px-[84px] py-6 lg:py-[24px] ${className}`}
      {...props}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl lg:text-[37px] font-bold leading-tight lg:leading-[43px] text-left uppercase text-[#ffffff] font-helvetica">
            Corplanta
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 m-auto">
          <div className="flex items-center justify-center gap-6 xl:gap-[26px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                role="menuitem"
                className="text-sm font-normal leading-[17px] text-center uppercase text-[#ffffff] hover:text-[#f39712] transition-colors duration-200 font-helvetica"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            variant="primary"
            className="px-6 py-3.5 text-base font-bold leading-[19px] text-left uppercase"
          >
            Book A Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[#ffffff] hover:text-[#f39712] transition-colors duration-200" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pt-4 border-t border-gray-600`}>
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              role="menuitem"
              className="text-sm font-normal leading-[17px] text-left uppercase text-[#ffffff] hover:text-[#f39712] transition-colors duration-200 py-2 font-helvetica"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <Button
              variant="primary"
              fullWidth
              className="text-base font-bold leading-[19px] uppercase"
            >
              Book A Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;