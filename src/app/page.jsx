'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';
import ExpandableList from '@/components/ui/ExpandableList';
import PagerIndicator from '@/components/ui/PagerIndicator';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [controls, isInView]);

  return { ref, controls, isInView };
};
export default function HomePage() {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  
  // Animation controls for different sections
  const heroAnimation = useScrollAnimation();
  const trustedAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const jurisdictionsAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const whyUsAnimation = useScrollAnimation();
  const applicationsAnimation = useScrollAnimation();
  const bankingAnimation = useScrollAnimation();
  const regulatoryAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  // Hero section features data
  const heroFeatures = [
    {
      icon: '/images/img_vector.svg',
      title: 'Fast-Track Formation',
      description: 'Complete incorporation with crypto-friendly jurisdictions',
    },
    {
      icon: '/images/img_vector_amber_700.svg',
      title: 'Full Compliance',
      description: 'Crypto-ready documentation, banking support, and ongoing regulatory guidance',
    },
    {
      icon: '/images/img_vector_amber_700_84x66.svg',
      title: 'Premium Jurisdictions',
      description:
        'Specialized expertise in 9 leading offshore locations with digital asset frameworks',
    },
  ];
  // Services data
  const services = [
    {
      icon: '/images/img_documents.svg',
      title: 'Corporate Formation',
      description:
        'Complete company registration with all required documentation, registered office services, and initial compliance setup tailored to your specific jurisdiction, business needs, and crypto regulatory requirements.',
    },
    {
      icon: '/images/img_crypto_coin_exchange.svg',
      title: 'Crypto-Specific Services',
      description:
        'Specialized incorporation for cryptocurrency exchanges, DeFi protocols, NFT platforms, mining operations, and blockchain technology companies with full regulatory compliance frameworks',
    },
    {
      icon: '/images/img_bank_building.svg',
      title: 'Banking & Financial Services',
      description:
        'Strategic banking introductions with crypto-friendly international banks, digital asset custody solutions, and payment processor connections for seamless business operations.',
    },
    {
      icon: '/images/img_kyc_form_with_pen.svg',
      title: 'Compliance & Regulatory',
      description:
        'Comprehensive regulatory compliance management including crypto-specific AML/KYC processing, digital asset reporting, and ongoing regulatory updates for evolving crypto legislation.',
    },
    {
      icon: '/images/img_asset_protectio.svg',
      title: 'Asset Protection & Structuring',
      description:
        'Advanced corporate structuring solutions for traditional and digital asset protection, tax optimization, and wealth preservation through sophisticated legal frameworks.',
    },
    {
      icon: '/images/img_institutional_services.svg',
      title: 'Institutional Services',
      description:
        'Dedicated relationship management for institutional clients including crypto funds, traditional investment firms, multinational corporations, and high-net-worth crypto investors',
    },
  ];
  // Jurisdictions data
  const jurisdictions = [
    { name: 'Anguilla', flag: '/images/img_mask_group.svg' },
    { name: 'Bahamas', flag: '/images/img_mask_group_white_a700_200x200.svg' },
    { name: 'Panama', flag: '/images/img_mask_group_white_a700.svg' },
    { name: 'Belize', flag: '/images/img_mask_group_red_800.svg' },
    { name: 'Cayman Islands', flag: '/images/img_mask_group_indigo_900_03.svg' },
    { name: 'Delaware (USA)', flag: '/images/img_mask_group_red_700.svg' },
    { name: 'St. Kitts & Nevis', flag: '/images/img_mask_group_black_900.svg' },
    { name: 'British Virgin Islands', flag: '/images/img_mask_group_indigo_900_03_200x200.svg' },
    { name: 'St. Vincent & Grenadines', flag: '/images/img_vector_green_800.svg' },
  ];
  // Process steps data
  const processSteps = [
    {
      step: 'Step 1',
      title: 'Consultation & Planning',
      image: '/images/img_consultation_planning.svg',
    },
    {
      step: 'Step 2',
      title: 'Documentation & Enhanced KYC',
      image: '/images/img_group_8.svg',
    },
    {
      step: 'Step 3',
      title: 'Registration & Regulatory Filing',
      image: '/images/img_group_13.svg',
    },
    {
      step: 'Step 4',
      title: 'Delivery & Ongoing Support',
      image: '/images/img_group_11.svg',
    },
  ];
  // Why choose us data
  const whyChooseUs = [
    {
      icon: '/images/img_crypto_expertise.svg',
      title: 'Crypto Specialized Expertise',
      description:
        'Deep jurisdiction knowledge across all 9 territories with specific focus on digital asset regulations, crypto licensing requirements, and blockchain-friendly frameworks',
    },
    {
      icon: '/images/img_document_with_check_list.svg',
      title: 'Comprehensive Compliance',
      description:
        'Full regulatory compliance including traditional AML/KYC, crypto-specific reporting requirements, VASP regulations, and emerging digital asset legislation.',
    },
    {
      icon: '/images/img_fast_stopwatch.svg',
      title: 'Speed & Efficiency',
      description:
        'Fastest processing times in the industry with same-day filing capabilities, 24/7 client portal access, and expedited crypto regulatory approvals.',
    },
    {
      icon: '/images/img_digital_asset_protection.svg',
      title: 'Digital Asset Protection',
      description:
        'Advanced protection strategies for both traditional and digital assets through sophisticated legal structures, multi-signature arrangements, and custody solutions.',
    },
    {
      icon: '/images/img_banking_network.svg',
      title: 'Banking Network Access',
      description:
        'Extensive network of crypto-friendly international banks and digital asset custody providers ensuring seamless financial operations for your business.',
    },
    {
      icon: '/images/img_vector_gray_900_60x60.svg',
      title: '24/7 Crypto Support',
      description:
        'Round-the-clock support for crypto businesses with multilingual staff experienced in digital asset markets and global crypto operations.',
    },
  ];
  // Banking services expandable list data
  const bankingServices = [
    {
      title: 'AML/KYC Compliance',
      content:
        'Advanced due diligence procedures including enhanced customer identification, beneficial ownership verification, source of funds documentation, and ongoing monitoring for both traditional and crypto businesses.',
    },
    {
      title: 'Financial Reporting Standards',
      content:
        'International reporting compliance including CRS, FATCA, OECD guidelines, and jurisdiction-specific financial disclosure requirements with specialized crypto asset reporting protocols.',
    },
    {
      title: 'Crypto Regulatory Frameworks',
      content:
        'Digital asset compliance covering VASP registrations, crypto exchange licensing, DeFi protocol legal structures, and emerging regulatory requirements across all supported jurisdictions.',
    },
    {
      title: 'Cross-Border Compliance',
      content:
        'Multi-jurisdictional coordination ensuring compliance with home country regulations, international tax treaties, and substance requirements for global business operations.',
    },
    {
      title: 'Ongoing Monitoring',
      content:
        'Continuous compliance management with regular regulatory updates, annual filings, corporate governance maintenance, and proactive notification of regulatory changes affecting your business.',
    },
    {
      title: 'Risk Assessment & Mitigation',
      content:
        'Comprehensive risk analysis including reputational risk assessment, regulatory risk evaluation, and implementation of mitigation strategies to protect your business interests.',
    },
  ];

  const regulatoryServices = [
    {
      title: 'Traditional Banking Access',
      content:
        'International banking connections with major global banks offering full-service corporate banking solutions for offshore entities across all supported jurisdictions.',
    },
    {
      title: 'Crypto-Friendly Banking',
      content:
        'Specialized digital asset banking support with connections to crypto-friendly financial institutions and guidance through the complex crypto banking landscape.',
    },
    {
      title: 'Payment Processing Solutions',
      content:
        'Merchant services and payment gateway assistance supporting both traditional and cryptocurrency payment processing for your business operations.',
    },
    {
      title: 'Private Banking Services',
      content:
        'High-net-worth banking solutions including private banking introductions, wealth management services, and sophisticated treasury management for institutional clients.',
    },
    {
      title: 'Custody & Asset Management',
      content:
        'Digital asset custody guidance with connections to leading institutional custody providers and multi-signature wallet solutions for optimal security.',
    },
    {
      title: 'Investment Platform Access',
      content:
        'Brokerage and investment platform introductions offering access to global markets and sophisticated trading infrastructure for investment holding companies.',
    },
    {
      title: 'Foreign Exchange Services',
      content:
        'Competitive FX solutions including connections to forex providers offering spot trading, forward contracts, and hedging strategies for multi-currency operations.',
    },
    {
      title: 'Treasury Management',
      content:
        'Cash management solutions including multi-currency account setup, automated treasury operations, and liquidity management for complex international structures.',
    },
  ];

  // FAQ data
  const faqItems = [
    {
      title: 'Do you specialize in crypto business incorporation?',
      content:
        'Yes, we specialize in incorporating crypto-focused businesses, offering end-to-end services tailored to digital asset companies, exchanges, DeFi projects, and blockchain-based platforms across multiple jurisdictions.',
    },
    {
      title: 'Which jurisdictions are best for crypto businesses?',
      content:
        'Jurisdictions such as the Cayman Islands, British Virgin Islands, St. Kitts & Nevis, Belize, and Panama are highly favored for their crypto-friendly regulatory frameworks, favorable tax regimes, and supportive banking infrastructure.',
    },
    {
      title: 'Can you help with crypto banking?',
      content:
        'Absolutely. We assist in establishing relationships with crypto-friendly banks and payment service providers, helping you navigate regulatory challenges and ensuring access to reliable financial infrastructure for your operations.',
    },
    {
      title: 'How long does crypto business incorporation take?',
      content:
        'The incorporation process typically takes between 1 to 4 weeks, depending on the jurisdiction, business structure, documentation readiness, and whether any special licenses are required.',
    },
    {
      title: 'Do I need special licenses for crypto business?',
      content:
        'Some jurisdictions require licenses for crypto-related activities such as exchange operations, custody services, or token issuance. We assess your business model and guide you through the appropriate licensing process.',
    },
    {
      title: 'Is crypto business incorporation legal?',
      content:
        'Yes, incorporating a crypto business is legal in many jurisdictions that have developed regulatory frameworks for digital assets. We help ensure compliance with local laws to operate legally and sustainably.',
    },
    {
      title: 'How do you determine costs for crypto businesses?',
      content:
        'Costs are based on the jurisdiction, business type, required licenses, and additional services such as banking, compliance, and ongoing support. We provide transparent, customized quotes after an initial consultation.',
    },
    {
      title: 'Can traditional businesses also benefit from your services?',
      content:
        'Yes, we also support traditional businesses with international incorporation, cross-border compliance, banking solutions, and tailored strategies for global expansion.',
    },
    {
      title: 'What ongoing support do you provide after incorporation?',
      content:
        'Our services extend beyond incorporation to include regulatory compliance, annual filings, banking support, tax optimization, reporting assistance, and guidance on evolving crypto regulations.',
    },
    {
      title: 'Do you help with substance requirements?',
      content:
        'Yes, we assist in meeting economic substance requirements by providing solutions such as local directors, physical office setups, operational presence, and reporting assistance in relevant jurisdictions.',
    },
  ];

  return (
    <div className="w-full bg-[#ffffff] flex flex-col items-center">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="w-full flex flex-col items-center gap-32 lg:gap-[128px]">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            className="w-full flex flex-row items-start bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-[56px] py-24 lg:py-[98px] pb-[140px] lg:pb-[221px]"
            style={{ backgroundImage: "url('/images/img_rectangle_8.png')" }}
            ref={heroAnimation.ref}
            initial="initial"
            animate={heroAnimation.controls}
            variants={staggerContainer}
          >
            <div className="w-full lg:max-w-[1233px] mx-auto flex flex-col gap-16 lg:gap-[64px] items-center">
              <div className="flex flex-col gap-8 lg:gap-[32px] items-start w-full">
                <motion.h1 
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-tight lg:leading-[68px] text-left text-[#ffffff] w-full lg:w-1/2 font-baskerville"
                >
                  Expert Offshore Company Formation in Prime Caribbean & US Jurisdictions
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px] text-left text-[#ffffff8e] w-full lg:w-[42%] font-helvetica"
                >
                  Specialized incorporation services for entrepreneurs, traditional businesses,
                  crypto ventures, and institutional clients seeking strategic tax optimization and
                  regulatory compliance
                </motion.p>
              </div>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 lg:gap-[20px] w-full"
              >
                <Button variant="primary" className="w-full sm:w-auto">
                  Get Custom Proposal
                </Button>
                <Button className="w-full sm:w-auto bg-transparent border border-[#f39712] text-[#f39712] hover:bg-[#f39712] hover:text-[#000000]">
                  Schedule Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
          {/* Hero Features Card */}
          <motion.div 
            className="w-full lg:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-[84px] -mt-16 lg:-mt-[92px] relative z-10"
            variants={fadeIn}
            initial="initial"
            animate={heroAnimation.controls}
          >
            <motion.div 
              className="bg-[#1c2833] border border-[#ffffff33] rounded-[14px] p-8 lg:p-[42px]"
              variants={scaleIn}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 min-w-fit">
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-row items-center gap-4 lg:gap-[20px] w-full lg:w-auto "
                  >
                    <div className="w-20 lg:w-[102px] h-20 lg:h-[84px] flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={102}
                        height={84}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-[8px] flex-1">
                      <h3 className="text-base sm:text-lg lg:text-[18px] font-bold leading-5 lg:leading-[21px] text-left text-[#ffffff] font-helvetica">
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-[14px] font-normal leading-5 lg:leading-[20px] text-left text-[#ffffff8e] font-helvetica">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Trusted Section */}
        <motion.div 
          className="w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between"
          ref={trustedAnimation.ref}
          initial="initial"
          animate={trustedAnimation.controls}
          variants={staggerContainer}
        >
          <motion.div 
            className="w-full lg:w-[42%]"
            variants={slideInLeft}
          >
            <Image
              src="/images/img_rectangle_12.png"
              alt="Trusted clients"
              width={522}
              height={604}
              className="w-full h-auto rounded-[14px]"
            />
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-[40px] items-center"
            variants={slideInRight}
            >
            <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-normal leading-tight  text-left text-[#000000] w-full font-baskerville">
              Trusted by 100+ Clients Worldwide Including Leading Crypto Businesses
            </h2>
            <div className="flex flex-col gap-8 lg:gap-[32px] w-full">
              {[
                'Licensed Corporate Service Provider in all operating jurisdictions',
                '50+ Crypto Companies successfully incorporated and supported',
                'Full Regulatory Compliance with AML/KYC and crypto regulations',
                'Specialized Expertise in digital asset regulatory frameworks',
              ].map((text, index) => (
                <div key={index} className="flex flex-row items-center gap-4 lg:gap-[20px] w-full">
                  <div className="w-12 lg:w-[60px] h-12 lg:h-[60px] bg-[#c27d0e] rounded-[5px] p-2 lg:p-[10px] flex-shrink-0">
                    <Image
                      src="/images/img_frame_37.svg"
                      alt="Check icon"
                      width={40}
                      height={40}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-[20px] font-normal leading-5 lg:leading-[22px] text-left text-[#000000] flex-1 font-helvetica">
                    {
                      <>
                        <span className="font-bold">
                          {text
                            .split(' ')
                            .slice(0, index === 0 ? 4 : index === 1 ? 3 : index === 2 ? 3 : 2)
                            .join(' ')}
                        </span>
                        {' ' +
                          text
                            .split(' ')
                            .slice(index === 0 ? 4 : index === 1 ? 3 : index === 2 ? 3 : 2)
                            .join(' ')}
                      </>
                    }
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* Services Section */}
        <motion.div
          className="w-full bg-[#fdebd0] py-16 lg:py-[64px]"
          ref={servicesAnimation.ref}
          initial="initial"
          animate={servicesAnimation.controls}
          variants={staggerContainer}
        >
          <div className="w-full lg:max-w-[1393px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[64px] items-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#000000] font-baskerville"
            >
              SERVICES
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-[#ffffff] border border-[#1c283333] rounded-[10px] p-8 lg:p-[40px] shadow-[0px_0px_16px_#00000019] flex flex-col gap-5 lg:gap-[20px]"
                  variants={{
                    initial: { 
                      scale: 0.8,
                      opacity: 0,
                      rotateY: -45,
                      x: index % 3 === 0 ? -50 : index % 3 === 2 ? 50 : 0
                    },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      rotateY: 0,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: [0.34, 1.56, 0.64, 1]
                      }
                    }
                  }}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    scale: 1.05,
                    rotateZ: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="bg-[#ffe1b7] rounded-[5px] w-[100px] h-[100px] flex items-center justify-center"
                    initial={{ rotate: -10, scale: 0.9 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-3 lg:gap-[12px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.6, duration: 0.4 }}
                  >
                    <h3 className="text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#1c001f] font-helvetica">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-[14px] font-normal leading-5 lg:leading-[20px] text-left text-[#0000008e] font-helvetica">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Jurisdictions Section */}
        <motion.div 
          className="w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[50px] items-center bg-[url('/images/img_1019996_ojo4yq0.png')] bg-cover bg-no-repeat bg-center"
          ref={jurisdictionsAnimation.ref}
          initial="initial"
          animate={jurisdictionsAnimation.controls}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}  
            className="text-4xl sm:text-5xl lg:text-[50px] font-normal leading-tight lg:leading-[74px] text-center text-[#000000] font-baskerville"
          >
            Strategic Offshore Jurisdictions - <br />
            Crypto-Friendly Business Environments
          </motion.h2>
          {/* Jurisdictions Map */}
          <motion.div 
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[898px] flex items-center justify-center z-0"
            variants={fadeIn}
          >
            {/* Bottom row jurisdictions */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-center items-center gap-6 lg:gap-[30px] w-full z-10"
              variants={staggerContainer}
            >
              {[
                { name: 'Cayman Islands', flag: '/images/img_mask_group_indigo_900_03.svg' },
                { name: 'Delaware (USA)', flag: '/images/img_mask_group_red_700.svg' },
                { name: 'St. Kitts & Nevis', flag: '/images/img_mask_group_black_900.svg' },
                {
                  name: 'British Virgin Islands',
                  flag: '/images/img_mask_group_indigo_900_03_200x200.svg',
                },
                { name: 'Anguilla', flag: '/images/img_mask_group.svg' },
                { name: 'Belize', flag: '/images/img_mask_group_red_800.svg' },
                { name: 'Bahamas', flag: '/images/img_mask_group_white_a700_200x200.svg' },
                { name: 'Panama', flag: '/images/img_mask_group_white_a700.svg' },
                { name: 'St. Vincent & Grenadines', flag: '/images/img_vector_green_800.svg' },
              ].map((jurisdiction, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/30 rounded-[10px] p-3 lg:p-[16px] shadow-lg flex flex-col items-center gap-3 lg:gap-[14px]"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                      rotate: index % 2 === 0 ? -15 : 15,
                      scale: 0.8
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: index * 0.15
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? -5 : 5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                        delay: index * 0.15 + 0.3
                      }
                    }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -5, 5, 0],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      <Image
                        src={jurisdiction.flag}
                        alt={jurisdiction.name}
                        width={200}
                        height={200}
                        className="w-16 lg:w-[200px] h-16 lg:h-[200px] rounded-[10px]"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    className="text-sm lg:text-[20px] font-normal text-center text-[#000000] font-helvetica"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.15 + 0.5
                      }
                    }}
                  >
                    {jurisdiction.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Process Section */}
        <motion.div 
          className="w-full lg:max-w-[1542px] mx-auto px-4 sm:px-6 lg:px-[199px] flex flex-col gap-12 lg:gap-[60px] items-center"
          ref={processAnimation.ref}
          initial="initial"
          animate={processAnimation.controls}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight lg:leading-[94px] text-center text-[#000000] font-baskerville"
          >
            Simple 4-Step Incorporation Process
          </motion.h2>
          <div className="flex flex-col gap-8 lg:gap-[36px] w-full">
            {/* Steps 1 & 2 */}
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[12px] w-full lg:flex-1"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.8
                  }
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="flex flex-col gap-1 lg:gap-[6px] flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    Step 1
                  </motion.span>
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[33px] text-left text-[#000000] font-satoshi"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    Consultation & Planning
                  </motion.h3>
                </motion.div>
                <motion.div 
                  className=" lg:w-[44%] flex lg:justify-end self-end"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.5
                  }}
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <Image
                    src="/images/img_consultation_planning.svg"
                    alt="Consultation"
                    width={248}
                    height={230}
                    className="w-32 lg:w-[248px] h-auto"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[10px] w-full lg:w-[40%]"
                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2,
                    duration: 0.8
                  }
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="flex flex-col gap-1 lg:gap-[6px] flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    Step 2
                  </motion.span>
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    Documentation & Enhanced KYC
                  </motion.h3>
                </motion.div>
                <motion.div 
                  className="w-32 h-full lg:w-[164px] flex items-end justify-center self-end"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.7
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/images/img_group_8.svg"
                    alt="Documentation"
                    width={164}
                    height={162}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </motion.div> 

            {/* Steps 3 & 4 */}
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[10px] w-full lg:w-[40%]"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.4,
                    duration: 0.8
                  }
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="flex flex-col gap-1 lg:gap-[6px] flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    Step 3
                  </motion.span>
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    Registration & Regulatory Filing
                  </motion.h3>
                </motion.div>
                <motion.div 
                  className="w-32 lg:w-[50%] flex justify-center self-end"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.9
                  }}
                  whileHover={{ 
                    rotate: [0, -5, 5, -3, 3, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <Image
                    src="/images/img_group_13.svg"
                    alt="Registration"
                    width={194}
                    height={184}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-0 w-full lg:flex-1 relative"
                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.6,
                    duration: 0.8
                  }
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="flex flex-col gap-1 lg:gap-[4px] w-full lg:w-[82%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  >
                    Step 4
                  </motion.span>
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    Delivery & Ongoing Support
                  </motion.h3>
                </motion.div>
                <motion.div
                  className=" w-48 lg:w-[258px] h-32 lg:h-[196px] bg-cover bg-center flex items-start justify-end p-2 lg:p-[10px] self-end"
                  style={{ backgroundImage: "url('/images/img_group_11.svg')" }}
                  initial={{ opacity: 0, scale: 0, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 1.1
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ rotate: 180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ 
                      rotate: [0, -5, 5, -3, 3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <Image
                      src="/images/img_group_12.svg"
                      alt="Support"
                      width={108}
                      height={40}
                      className="w-16 lg:w-[108px] h-auto"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* Why Choose Us Section */}
        <motion.div 
          className="w-full lg:max-w-[1433px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[60px] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[74px] text-center text-[#000000] font-baskerville"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            Why Leading Crypto Businesses Choose Corplanta
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[62px] w-full"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-row items-center gap-4 lg:gap-[20px] w-full"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: index % 2 === 0 ? -50 : 50,
                    y: 20
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="bg-[#ffe1b7] rounded-[5px] w-[100px] h-[100px] flex items-center justify-center flex-shrink-0"
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.2
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-3 lg:gap-[12px] flex-1"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.2 + 0.2 }
                    }
                  }}
                >
                  <motion.h3 
                    className="text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#000000] font-helvetica"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm lg:text-[14px] font-normal leading-5 lg:leading-[20px] text-left text-[#0000008e] font-helvetica"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Strategic Applications Section */}
        <motion.div 
          className="w-full lg:max-w-[1433px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[64px] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 0.5, 
                staggerChildren: 0.2 
              } 
            }
          }}
        >
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-[44px] font-normal leading-tight lg:leading-[74px] text-left text-[#000000] w-full lg:w-[74%] font-baskerville"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2
                  }
                }
              }}
            >
              Strategic Applications for Crypto & Traditional Businesses
            </motion.h2>
            <motion.div 
              className="flex flex-row items-center gap-4 lg:gap-[24px] w-full lg:w-auto justify-end"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3
                  }
                }
              }}
            >
              <motion.button
                onClick={() => {
                  const slider = document.querySelector('.strategic-slider');
                  if (slider) {
                    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
                  }
                }}
                className="bg-[#faca88] border border-[#613e07] rounded-[5px] p-3 lg:p-[12px] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center hover:bg-[#e5b87a] transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous"
              >
                <Image
                  src="/images/img_frame_1261155034.svg"
                  alt="Previous"
                  width={36}
                  height={36}
                  className="w-full h-full"
                />
              </motion.button>
              <motion.button
                onClick={() => {
                  const slider = document.querySelector('.strategic-slider');
                  if (slider) {
                    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
                  }
                }}
                className="bg-[#faca88] border border-[#613e07] rounded-[5px] p-3 lg:p-[12px] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center hover:bg-[#e5b87a] transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next"
              >
                <Image
                  src="/images/img_frame_1261155035.svg"
                  alt="Next"
                  width={36}
                  height={36}
                  className="w-full h-full"
                />
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <Slider className="w-full" gap="gap-6 lg:gap-[30px]" showArrows={false}>
              {[
                { image: '/images/img_rectangle_40.png', title: 'Cryptocurrency Exchanges' },
                { image: '/images/img_rectangle_41.png', title: 'DeFi Protocols & DAOs' },
                { image: '/images/img_rectangle_42.png', title: 'NFT Platforms & Marketplaces' },
                { image: '/images/img_rectangle_40.png', title: 'Crypto Asset Management' },
                { image: '/images/img_rectangle_41.png', title: 'Blockchain Solutions' },
                { image: '/images/img_rectangle_42.png', title: 'Digital Payment Systems' },
                { image: '/images/img_rectangle_40.png', title: 'Crypto Asset Management' },
                { image: '/images/img_rectangle_41.png', title: 'Blockchain Solutions' },
                { image: '/images/img_rectangle_42.png', title: 'Digital Payment Systems' },
                { image: '/images/img_rectangle_40.png', title: 'Crypto Asset Management' },
                { image: '/images/img_rectangle_41.png', title: 'Blockchain Solutions' },
                { image: '/images/img_rectangle_42.png', title: 'Digital Payment Systems' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-[300px] lg:h-[480px] rounded-[10px]"
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      scale: 0.8,
                      y: 50
                    },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.1
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={380}
                      height={480}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-4 lg:bottom-[24px] left-4 lg:left-[18px] right-4 lg:right-[28px] bg-black/50 backdrop-blur-md border-2 border-[#ffffff99]/30 rounded-[10px] p-6 lg:p-[36px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.h3 
                      className="text-2xl lg:text-[32px] font-normal leading-8 lg:leading-[42px] text-left text-[#ffffff] font-helvetica"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {item.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </motion.div>
        {/* Banking Solutions Section */}
        <motion.div 
          className="w-full lg:max-w-full mx-auto px-4 sm:px-6 lg:px-[128px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 0.5, 
                staggerChildren: 0.3 
              } 
            }
          }}
        >
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-[46px] items-center"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-[38px] font-normal leading-tight lg:leading-[58px] text-left text-[#000000] w-full font-baskerville"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3
                  }
                }
              }}
            >
              Banking Solutions & Financial Service Support
            </motion.h2>
            <motion.div 
              className="w-full"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.4
                  }
                }
              }}
            >
              <ExpandableList items={bankingServices} className="w-full" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-[42%]"
            variants={{
              hidden: { 
                opacity: 0, 
                x: 50,
                scale: 0.9,
                rotate: -5
              },
              visible: { 
                opacity: 1, 
                x: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.5
                }
              }
            }}
            whileHover={{
              scale: 1.02,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/images/img_rectangle_39.png"
                alt="Banking solutions"
                width={522}
                height={578}
                className="w-full h-auto rounded-[10px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Regulatory Framework Section */}
        <motion.div 
          className="w-full px-4 sm:px-6 lg:px-[56px] flex flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { duration: 0.5, staggerChildren: 0.3 } 
            }
          }}
        >
          <motion.div 
            className="w-full lg:max-w-[1266px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-0"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            <motion.div 
              className="w-full lg:w-[84%] flex flex-col gap-6 lg:gap-[28px] items-start"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2
                  }
                }
              }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-[38px] font-normal leading-tight lg:leading-[58px] text-left text-[#000000] w-full lg:w-[86%] font-baskerville"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.3
                    }
                  }
                }}
              >
                Comprehensive Regulatory Framework & Compliance Solutions
              </motion.h2>
              <motion.div 
                className="w-full lg:w-[84%]"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 0.9,
                    y: 30
                  },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.4
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  initial={{ filter: "brightness(0.8)" }}
                  whileHover={{ 
                    filter: "brightness(1.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/images/img_rectangle_46.png"
                    alt="Regulatory framework"
                    width={522}
                    height={332}
                    className="w-full h-auto rounded-[10px]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-full"
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: 50,
                  scale: 0.95
                },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.5
                  }
                }
              }}
            >
              <ExpandableList items={regulatoryServices} className="w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Testimonials Section */}
        <motion.div
          className="w-full h-[600px] lg:h-[740px] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/images/img_building_8.png')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="relative z-10 w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center gap-8 lg:gap-[150px]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.div 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-white font-baskerville"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 }
                  }
                }}
              >
                What Our Crypto & Traditional Clients Say
              </motion.h2>
            </motion.div>

            <motion.div 
              className="w-full overflow-x-auto scrollbar-hide"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.4, staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div 
                className="flex gap-8 lg:px-40 lg:gap-[300px] px-2 min-w-max"
                variants={{
                  hidden: { x: 100 },
                  visible: {
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 70,
                      damping: 20
                    }
                  }
                }}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-[90vw] lg:w-[988px] flex-shrink-0 flex flex-col items-center gap-8 lg:gap-[42px]"
                    variants={{
                      hidden: { 
                        opacity: 0,
                        scale: 0.9,
                        x: 50
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          delay: index * 0.2
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex flex-col items-center gap-6 lg:gap-[34px] w-full"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.3 + index * 0.2 }
                        }
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          delay: 0.4 + index * 0.2
                        }}
                      >
                        <Image
                          src="/images/img_.svg"
                          alt="Quote"
                          width={36}
                          height={30}
                          className="w-8 lg:w-[36px] h-auto"
                        />
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center gap-1 lg:gap-[2px] w-full"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5 + index * 0.2 }
                          }
                        }}
                      >
                        <motion.h3 
                          className="text-2xl sm:text-3xl lg:text-[32px] font-normal leading-8 lg:leading-[37px] tracking-wide text-center text-[#f39712] font-helvetica"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.6 + index * 0.2 }
                            }
                          }}
                        >
                          Institutional Crypto Solutions
                        </motion.h3>
                        <motion.p 
                          className="text-lg sm:text-xl lg:text-[22px] font-normal leading-8 lg:leading-[36px] text-center text-white font-helvetica"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.7 + index * 0.2 }
                            }
                          }}
                        >
                          "As a crypto hedge fund, we needed sophisticated structures across
                          multiple jurisdictions. Corplanta delivered institutional-grade solutions
                          with full regulatory compliance"
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="flex flex-col items-center gap-2 lg:gap-[8px] w-full lg:w-[24%]"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            delay: 0.8 + index * 0.2
                          }
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/images/img_bg.png"
                          alt="Maria Rodriguez"
                          width={50}
                          height={50}
                          className="w-12 lg:w-[50px] h-12 lg:h-[50px] rounded-[24px] object-cover"
                        />
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center gap-1 lg:gap-[4px]"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.9 + index * 0.2 }
                          }
                        }}
                      >
                        <motion.span 
                          className="text-sm sm:text-base lg:text-[16px] font-bold leading-4 lg:leading-[19px] text-center text-white font-helvetica"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { delay: 1 + index * 0.2 }
                            }
                          }}
                        >
                          Maria Rodriguez
                        </motion.span>
                        <motion.span 
                          className="text-xs sm:text-sm lg:text-[14px] font-normal leading-4 lg:leading-[17px] text-center text-[#9a9b9d] font-helvetica"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { delay: 1.1 + index * 0.2 }
                            }
                          }}
                        >
                          Managing Partner, Digital Asset Capital
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
 
        {/* FAQ Section */}
        <motion.div 
          className="w-full px-4 sm:px-6 lg:px-[56px] flex flex-col gap-12 lg:gap-[58px] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#000000] font-baskerville"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                }
              }
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="w-full lg:w-[80%] mx-auto"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 0.2
                }
              }
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <ExpandableList items={faqItems} className="w-full" />
          </motion.div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          className="w-full bg-cover bg-center py-16 lg:py-[70px]"
          style={{ backgroundImage: "url('/images/img_building_8_560x1440.png')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div 
            className="w-full lg:max-w-[1333px] mx-auto px-4 sm:px-6 flex flex-col gap-12 lg:gap-[64px] items-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  staggerChildren: 0.4
                }
              }
            }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#ffffff] font-baskerville"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }
                }
              }}
            >
              Ready to Launch Your Global Business?
            </motion.h2>
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 }
                }
              }}
            >
              <motion.div 
                className="w-full lg:w-[48%] flex flex-col gap-8 lg:gap-[48px] items-start"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <motion.p 
                  className="text-lg sm:text-xl lg:text-[20px] font-normal leading-7 lg:leading-[32px] text-left text-[#ffffffcc] w-full lg:w-[84%] font-helvetica"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 }
                    }
                  }}
                >
                  Whether you are building the next generation of crypto innovation or expanding
                  your traditional business globally, Corplanta provides the expertise and
                  compliance framework you need. Join thousands of successful businesses who have
                  chosen our premium incorporation services.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="primary">Book A Call</Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="backdrop-blur-md w-full lg:w-1/2 bg-black/10 border-2 border-[#ffffff99] rounded-[10px] p-8 lg:p-[46px] shadow-[0px_20px_40px_#00000019] flex flex-col gap-8 lg:gap-[48px] items-center"
                variants={{
                  hidden: { 
                    opacity: 0,
                    x: 50,
                    scale: 0.95,
                    backdropFilter: "blur(0px)"
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    backdropFilter: "blur(8px)",
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      staggerChildren: 0.1
                    }
                  }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] text-center text-[#ffffff] font-baskerville"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 }
                    }
                  }}
                >
                  Contact Info
                </motion.h3>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 lg:gap-[48px] w-full"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15 }
                    }
                  }}
                >
                  <motion.div 
                    className="flex flex-col gap-6 lg:gap-[30px] w-full"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                  >
                    {[
                      {
                        icon: "/images/img_frame_1261154987.svg",
                        alt: "Website",
                        text: "www.corplanta.com"
                      },
                      {
                        icon: "/images/img_frame_1261154987_black_900.svg",
                        alt: "Email",
                        text: "info@corplanta.com"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-row items-center gap-4 lg:gap-[20px]"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: index * 0.1
                            }
                          }
                        }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.alt}
                            width={20}
                            height={20}
                            className="w-full h-full"
                          />
                        </motion.div>
                        <motion.span
                          className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { delay: 0.1 * (index + 1) }
                            }
                          }}
                        >
                          {item.text}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-6 lg:gap-[30px] w-full"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { staggerChildren: 0.1, delay: 0.2 }
                      }
                    }}
                  >
                    {[
                      {
                        icon: "/images/img_frame_1261154987_black_900_32x32.svg",
                        alt: "Phone",
                        text: "+1 (555) 123-4567"
                      },
                      {
                        icon: "/images/img_frame_1261155037.svg",
                        alt: "Support",
                        text: "@CorplantaSupport"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-row items-center gap-3 lg:gap-[16px]"
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: index * 0.1
                            }
                          }
                        }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.alt}
                            width={20}
                            height={20}
                            className="w-full h-full"
                          />
                        </motion.div>
                        <motion.span
                          className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { delay: 0.1 * (index + 1) }
                            }
                          }}
                        >
                          {item.text}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Footer */}
      <Footer /> 
    </div>
  );
}
 