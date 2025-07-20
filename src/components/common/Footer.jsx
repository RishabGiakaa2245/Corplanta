'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.footer 
      className={`w-full bg-[#1c2833] px-4 sm:px-6 lg:px-[104px] py-12 lg:py-[46px] ${className}`}
      {...props}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.div 
        className="flex flex-col gap-12 lg:gap-[48px] w-full"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
          }
        }}
      >
        {/* Main Footer Content */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          {/* Company Info */}
          <motion.div 
            className="flex flex-col gap-5 lg:gap-[20px] w-full lg:w-[32%]"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.6
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-left uppercase text-[#f7c600] font-helvetica"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Corplanta
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[28px] text-left text-[#ffffff8e] font-helvetica"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 }
                }
              }}
            >
              Corplanta International Services Ltd. Licensed Corporate Service Provider Crypto & Traditional Business Specialists Regulatory Compliance Certified
            </motion.p>
          </motion.div>

          {/* Links Section */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[58%] gap-8 sm:gap-4 lg:gap-0 mt-0 lg:mt-1"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.6,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Legal Links */}
            <motion.div 
              className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-[48%]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Legal Links
              </motion.h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px]">
                {legalLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }
                    }}
                  >
                    <motion.button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                      whileHover={{ x: 10 }}
                    >
                      {link}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div 
              className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-[34%]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 }
                }
              }}
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Company
              </motion.h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px]">
                {companyLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }
                    }}
                  >
                    <motion.button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                      whileHover={{ x: 10 }}
                    >
                      {link}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="flex flex-col gap-6 lg:gap-[26px] w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Social Media
              </motion.h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px] items-start">
                {socialLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }
                    }}
                  >
                    <motion.button 
                      role="menuitem"
                      className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-left text-[#ffffff] hover:text-[#f7c600] transition-colors duration-200 font-helvetica"
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      {link}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>



        {/* Disclaimer Section */}
        <motion.div 
          className="flex flex-col gap-8 lg:gap-[32px] w-full"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.4,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="flex flex-col gap-4 lg:gap-[16px] w-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <motion.h3 
              className="text-lg sm:text-xl lg:text-[22px] font-bold leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
            >
              Disclaimer
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[28px] text-left text-[#ffffff8e] font-helvetica"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    delay: 0.2
                  }
                }
              }}
            >
              Professional incorporation services provided in full compliance with applicable laws and regulations including cryptocurrency and digital asset legislation. This information is for general guidance only. Specific advice should be sought for individual circumstances. All proposals are customized based on client requirements, business models, and jurisdictional specifications for both traditional and digital asset businesses.
            </motion.p>
          </motion.div>

          {/* Divider Line */}
          <motion.div 
            className="h-[1px] w-full bg-[#ffffff33]"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.3
                }
              }
            }}
            style={{ originX: 0 }}
          />

          {/* Copyright */}
          <motion.p 
            className="text-sm sm:text-base lg:text-[16px] font-normal leading-[19px] text-center capitalize text-[#ffffff] font-helvetica"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.4
                }
              }
            }}
          >
            © 2025 Corplanta, All rights reserved
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;