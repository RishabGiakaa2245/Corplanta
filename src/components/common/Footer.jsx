'use client';
import React from 'react';

const Footer = ({ className = '', ...props }) => {
  const legalLinks = [
    'Privacy Policy',
    'Terms of Service', 
    'Crypto Compliance Framework',
    'Regulatory Compliance',
    'Cookie Policy'
  ];

  const companyLinks = [
    'Services',
    'Process',
    'Why Choose Us',
    'Contact us',
    'FAQ'
  ];

  const socialLinks = [
    'LinkedIn',
    'Twitter',
    'YouTube',
    'Telegram'
  ];

  return (
    <footer 
      className={`w-full bg-[#1c2833] px-4 sm:px-6 lg:px-[104px] py-12 lg:py-[46px] ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-12 lg:gap-[48px] w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
          {/* Company Info */}
          <div className="flex flex-col gap-5 lg:gap-[20px] w-full lg:w-[32%]">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-left uppercase text-[#f7c600] font-helvetica">
              Corplanta
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[28px] text-left text-[#ffffff8e] font-helvetica">
              Corplanta International Services Ltd. Licensed Corporate Service Provider Crypto & Traditional Business Specialists Regulatory Compliance Certified
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[58%] gap-8 sm:gap-4 lg:gap-0 mt-0 lg:mt-1">
            {/* Legal Links */}
            <div className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-[48%]">
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                Legal Links
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px]">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-[34%]">
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                Company
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px]">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                Social Media
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px] items-start">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="flex flex-col gap-8 lg:gap-[32px] w-full">
          <div className="flex flex-col gap-4 lg:gap-[16px] w-full">
            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
              Disclaimer
            </h3>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[28px] text-left text-[#ffffff8e] font-helvetica">
              Professional incorporation services provided in full compliance with applicable laws and regulations including cryptocurrency and digital asset legislation. This information is for general guidance only. Specific advice should be sought for individual circumstances. All proposals are customized based on client requirements, business models, and jurisdictional specifications for both traditional and digital asset businesses.
            </p>
          </div>

          {/* Divider Line */}
          <div className="h-[1px] w-full bg-[#ffffff33]"></div>

          {/* Copyright */}
          <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-center capitalize text-[#ffffff] font-helvetica">
            © 2025 Corplanta, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;