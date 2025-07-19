'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';
import ExpandableList from '@/components/ui/ExpandableList';
import PagerIndicator from '@/components/ui/PagerIndicator';
export default function HomePage() {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
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
          <div
            className="w-full flex flex-row items-start bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-[56px] py-24 lg:py-[98px] pb-[140px] lg:pb-[221px]"
            style={{ backgroundImage: "url('/images/img_rectangle_8.png')" }}
          >
            <div className="w-full lg:max-w-[1233px] mx-auto flex flex-col gap-16 lg:gap-[64px] items-center">
              <div className="flex flex-col gap-8 lg:gap-[32px] items-start w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-tight lg:leading-[68px] text-left text-[#ffffff] w-full lg:w-1/2 font-baskerville">
                  Expert Offshore Company Formation in Prime Caribbean & US Jurisdictions
                </h1>
                <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px] text-left text-[#ffffff8e] w-full lg:w-[42%] font-helvetica">
                  Specialized incorporation services for entrepreneurs, traditional businesses,
                  crypto ventures, and institutional clients seeking strategic tax optimization and
                  regulatory compliance
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <Button variant="primary" className="w-full sm:w-auto">
                  Get Custom Proposal
                </Button>
                <Button className="w-full sm:w-auto bg-transparent border border-[#f39712] text-[#f39712] hover:bg-[#f39712] hover:text-[#000000]">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
          {/* Hero Features Card */}
          <div className="w-full lg:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-[84px] -mt-16 lg:-mt-[92px] relative z-10">
            <div className="bg-[#1c2833] border border-[#ffffff33] rounded-[14px] p-8 lg:p-[42px]">
              <div className="flex flex-col lg:flex-row items-center gap-8 min-w-fit">
                {heroFeatures.map((feature, index) => (
                  <div
                    key={index}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Trusted Section */}
        <div className="w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between">
          <div className="w-full lg:w-[42%]">
            <Image
              src="/images/img_rectangle_12.png"
              alt="Trusted clients"
              width={522}
              height={604}
              className="w-full h-auto rounded-[14px]"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-[40px] items-center">
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
          </div>
        </div>
        {/* Services Section */}
        <div className="w-full bg-[#fdebd0] py-16 lg:py-[64px]">
          <div className="w-full lg:max-w-[1393px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[64px] items-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#000000] font-baskerville">
              SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] border border-[#1c283333] rounded-[10px] p-8 lg:p-[40px] shadow-[0px_0px_16px_#00000019] flex flex-col gap-5 lg:gap-[20px]"
                >
                  <div className="bg-[#ffe1b7] rounded-[5px] w-[100px] h-[100px] flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-[12px]">
                    <h3 className="text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#1c001f] font-helvetica">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-[14px] font-normal leading-5 lg:leading-[20px] text-left text-[#0000008e] font-helvetica">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Jurisdictions Section */}
        <div className="w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[50px] items-center bg-[url('/images/img_1019996_ojo4yq0.png')] bg-contain bg-no-repeat bg-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-normal leading-tight lg:leading-[74px] text-center text-[#000000] font-baskerville">
            Strategic Offshore Jurisdictions - <br />
            Crypto-Friendly Business Environments
          </h2>
          {/* Jurisdictions Map */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[898px] flex items-center justify-center z-0">
            {/* Bottom row jurisdictions */}
            <div className="flex flex-wrap justify-center lg:justify-center items-center gap-6 lg:gap-[30px] w-full z-10">
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
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/30 rounded-[10px] p-3 lg:p-[16px] shadow-lg flex flex-col items-center gap-3 lg:gap-[14px]"
                >
                  <Image
                    src={jurisdiction.flag}
                    alt={jurisdiction.name}
                    width={200}
                    height={200}
                    className="w-16 lg:w-[200px] h-16 lg:h-[200px] rounded-[10px]"
                  />
                  <span className="text-sm lg:text-[20px] font-normal text-center text-[#000000] font-helvetica">
                    {jurisdiction.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Process Section */}
        <div className="w-full lg:max-w-[1542px] mx-auto px-4 sm:px-6 lg:px-[199px] flex flex-col gap-12 lg:gap-[60px] items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight lg:leading-[94px] text-center text-[#000000] font-baskerville">
            Simple 4-Step Incorporation Process
          </h2>
          <div className="flex flex-col gap-8 lg:gap-[36px] w-full">
            {/* Steps 1 & 2 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full">
              <div className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[12px] w-full lg:flex-1">
                <div className="flex flex-col gap-1 lg:gap-[6px] flex-1">
                  <span className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica">
                    Step 1
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[33px] text-left text-[#000000] font-satoshi">
                    Consultation & Planning
                  </h3>
                </div>
                <div className="w-full lg:w-[44%] flex justify-center lg:justify-end">
                  <Image
                    src="/images/img_consultation_planning.svg"
                    alt="Consultation"
                    width={248}
                    height={230}
                    className="w-32 lg:w-[248px] h-auto"
                  />
                </div>
              </div>
              <div className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[10px] w-full lg:w-[40%]">
                <div className="flex flex-col gap-1 lg:gap-[6px] flex-1">
                  <span className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica">
                    Step 2
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica">
                    Documentation & Enhanced KYC
                  </h3>
                </div>
                <div className="w-32 h-full lg:w-[164px] flex items-end justify-center">
                  <Image
                    src="/images/img_group_8.svg"
                    alt="Documentation"
                    width={164}
                    height={162}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            {/* Steps 3 & 4 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full">
              <div className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-[10px] w-full lg:w-[40%]">
                <div className="flex flex-col gap-1 lg:gap-[6px] flex-1">
                  <span className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica">
                    Step 3
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica">
                    Registration & Regulatory Filing
                  </h3>
                </div>
                <div className="w-32 lg:w-[50%] flex justify-center">
                  <Image
                    src="/images/img_group_13.svg"
                    alt="Registration"
                    width={194}
                    height={184}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-[#ffeed7] border border-[#1c283333] rounded-[10px] p-5 lg:p-[20px] flex flex-col lg:flex-row items-start gap-4 lg:gap-0 w-full lg:flex-1 relative">
                <div className="flex flex-col gap-1 lg:gap-[4px] w-full lg:w-[82%]">
                  <span className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[56px] text-start uppercase text-[#1c283333] font-helvetica">
                    Step 4
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold leading-7 lg:leading-[32px] text-left text-[#000000] font-helvetica">
                    Delivery & Ongoing Support
                  </h3>
                </div>
                <div
                  className="absolute top-4 lg:top-[16px] right-4 lg:right-[8px] w-48 lg:w-[258px] h-32 lg:h-[196px] bg-cover bg-center flex items-start justify-end p-2 lg:p-[10px]"
                  style={{ backgroundImage: "url('/images/img_group_11.svg')" }}
                >
                  <Image
                    src="/images/img_group_12.svg"
                    alt="Support"
                    width={108}
                    height={40}
                    className="w-16 lg:w-[108px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="w-full lg:max-w-[1433px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[60px] items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[74px] text-center text-[#000000] font-baskerville">
            Why Leading Crypto Businesses Choose Corplanta
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[62px] w-full">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-row items-center gap-4 lg:gap-[20px] w-full">
                <div className="bg-[#ffe1b7] rounded-[5px] w-[100px] h-[100px] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:gap-[12px] flex-1">
                  <h3 className="text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#000000] font-helvetica">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-[14px] font-normal leading-5 lg:leading-[20px] text-left text-[#0000008e] font-helvetica">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Strategic Applications Section */}
        <div className="w-full lg:max-w-[1433px] mx-auto px-4 sm:px-6 lg:px-[104px] flex flex-col gap-12 lg:gap-[64px] items-center">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0">
            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-normal leading-tight lg:leading-[74px] text-left text-[#000000] w-full lg:w-[74%] font-baskerville">
              Strategic Applications for Crypto & Traditional Businesses
            </h2>
            <div className="flex flex-row items-center gap-4 lg:gap-[24px] w-full lg:w-auto justify-end">
              <button
                onClick={() => {
                  const slider = document.querySelector('.strategic-slider');
                  if (slider) {
                    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
                  }
                }}
                className="bg-[#faca88] border border-[#613e07] rounded-[5px] p-3 lg:p-[12px] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center hover:bg-[#e5b87a] transition-colors duration-200"
                aria-label="Previous"
              >
                <Image
                  src="/images/img_frame_1261155034.svg"
                  alt="Previous"
                  width={36}
                  height={36}
                  className="w-full h-full"
                />
              </button>
              <button
                onClick={() => {
                  const slider = document.querySelector('.strategic-slider');
                  if (slider) {
                    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
                  }
                }}
                className="bg-[#faca88] border border-[#613e07] rounded-[5px] p-3 lg:p-[12px] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center hover:bg-[#e5b87a] transition-colors duration-200"
                aria-label="Next"
              >
                <Image
                  src="/images/img_frame_1261155035.svg"
                  alt="Next"
                  width={36}
                  height={36}
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
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
              <div
                key={index}
                className="relative w-full h-[300px] lg:h-[480px] rounded-[10px] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={380}
                  height={480}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 lg:bottom-[24px] left-4 lg:left-[18px] right-4 lg:right-[28px] bg-black/50 backdrop-blur-md  border-2 border-[#ffffff99]/30 rounded-[10px] p-6 lg:p-[36px]">
                  <h3 className="text-2xl lg:text-[32px] font-normal leading-8 lg:leading-[42px] text-left text-[#ffffff] font-helvetica">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Banking Solutions Section */}
        <div className="w-full lg:max-w-full mx-auto px-4 sm:px-6 lg:px-[128px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-[46px] items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-normal leading-tight lg:leading-[58px] text-left text-[#000000] w-full font-baskerville">
              Banking Solutions & Financial Service Support
            </h2>
            <ExpandableList items={bankingServices} className="w-full" />
          </div>
          <div className="w-full lg:w-[42%]">
            <Image
              src="/images/img_rectangle_39.png"
              alt="Banking solutions"
              width={522}
              height={578}
              className="w-full h-auto rounded-[10px]"
            />
          </div>
        </div>
        {/* Regulatory Framework Section */}
        <div className="w-full px-4 sm:px-6 lg:px-[56px] flex flex-row items-center">
          <div className="w-full lg:max-w-[1266px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[84%] flex flex-col gap-6 lg:gap-[28px] items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-normal leading-tight lg:leading-[58px] text-left text-[#000000] w-full lg:w-[86%] font-baskerville">
                Comprehensive Regulatory Framework & Compliance Solutions
              </h2>
              <div className="w-full lg:w-[84%]">
                <Image
                  src="/images/img_rectangle_46.png"
                  alt="Regulatory framework"
                  width={522}
                  height={332}
                  className="w-full h-auto rounded-[10px]"
                />
              </div>
            </div>
            <div className="w-full lg:w-full">
              <ExpandableList items={regulatoryServices} className="w-full" />
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        {/* Testimonials Section */}
        <div
          className="w-full h-[400px] lg:h-[740px] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/images/img_building_8.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 w-full lg:max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center gap-8 lg:gap-[150px]">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-white font-baskerville">
                What Our Crypto & Traditional Clients Say
              </h2>
            </div>

            {/* Scrollable testimonials */}
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 lg:px-40 lg:gap-[300px] px-2 min-w-max">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="w-[90vw] lg:w-[988px] flex-shrink-0 flex flex-col items-center gap-8 lg:gap-[42px]"
                  >
                    <div className="flex flex-col items-center gap-6 lg:gap-[34px] w-full">
                      <Image
                        src="/images/img_.svg"
                        alt="Quote"
                        width={36}
                        height={30}
                        className="w-8 lg:w-[36px] h-auto"
                      />
                      <div className="flex flex-col items-center gap-1 lg:gap-[2px] w-full">
                        <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal leading-8 lg:leading-[37px] tracking-wide text-center text-[#f39712] font-helvetica">
                          Institutional Crypto Solutions
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-[22px] font-normal leading-8 lg:leading-[36px] text-center text-white font-helvetica">
                          "As a crypto hedge fund, we needed sophisticated structures across
                          multiple jurisdictions. Corplanta delivered institutional-grade solutions
                          with full regulatory compliance"
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 lg:gap-[8px] w-full lg:w-[24%]">
                      <Image
                        src="/images/img_bg.png"
                        alt="Maria Rodriguez"
                        width={50}
                        height={50}
                        className="w-12 lg:w-[50px] h-12 lg:h-[50px] rounded-[24px] object-cover"
                      />
                      <div className="flex flex-col items-center gap-1 lg:gap-[4px]">
                        <span className="text-sm sm:text-base lg:text-[16px] font-bold leading-4 lg:leading-[19px] text-center text-white font-helvetica">
                          Maria Rodriguez
                        </span>
                        <span className="text-xs sm:text-sm lg:text-[14px] font-normal leading-4 lg:leading-[17px] text-center text-[#9a9b9d] font-helvetica">
                          Managing Partner, Digital Asset Capital
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full px-4 sm:px-6 lg:px-[56px] flex flex-col gap-12 lg:gap-[58px] items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#000000] font-baskerville">
            Frequently Asked Questions
          </h2>
          <div className="w-full lg:w-[80%] mx-auto">
            <ExpandableList items={faqItems} className="w-full" />
          </div>
        </div>
        {/* CTA Section */}
        <div
          className="w-full bg-cover bg-center py-16 lg:py-[70px]"
          style={{ backgroundImage: "url('/images/img_building_8_560x1440.png')" }}
        >
          <div className="w-full lg:max-w-[1333px] mx-auto px-4 sm:px-6 flex flex-col gap-12 lg:gap-[64px] items-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight lg:leading-[64px] text-center text-[#ffffff] font-baskerville">
              Ready to Launch Your Global Business?
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 w-full">
              <div className="w-full lg:w-[48%] flex flex-col gap-8 lg:gap-[48px] items-start">
                <p className="text-lg sm:text-xl lg:text-[20px] font-normal leading-7 lg:leading-[32px] text-left text-[#ffffffcc] w-full lg:w-[84%] font-helvetica">
                  Whether you are building the next generation of crypto innovation or expanding
                  your traditional business globally, Corplanta provides the expertise and
                  compliance framework you need. Join thousands of successful businesses who have
                  chosen our premium incorporation services.
                </p>
                <Button variant="primary">Book A Call</Button>
              </div>
              <div className="backdrop-blur-md w-full lg:w-1/2 bg-black/10 border-2 border-[#ffffff99] rounded-[10px] p-8 lg:p-[46px] shadow-[0px_20px_40px_#00000019] flex flex-col gap-8 lg:gap-[48px] items-center">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight lg:leading-[48px] text-center text-[#ffffff] font-baskerville">
                  Contact Info
                </h3>
                <div className="flex flex-col sm:flex-row gap-8 lg:gap-[48px] w-full">
                  <div className="flex flex-col gap-6 lg:gap-[30px] w-full">
                    <div className="flex flex-row items-center gap-4 lg:gap-[20px]">
                      <div className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center">
                        <Image
                          src="/images/img_frame_1261154987.svg"
                          alt="Website"
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                        www.corplanta.com
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-3 lg:gap-[16px]">
                      <div className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center">
                        <Image
                          src="/images/img_frame_1261154987_black_900.svg"
                          alt="Email"
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                        info@corplanta.com
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 lg:gap-[30px] w-full">
                    <div className="flex flex-row items-center gap-3 lg:gap-[16px]">
                      <div className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center">
                        <Image
                          src="/images/img_frame_1261154987_black_900_32x32.svg"
                          alt="Phone"
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                        +1 (555) 123-4567
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-3 lg:gap-[16px]">
                      <div className="bg-[#fe9f11] rounded-[5px] p-1.5 lg:p-[6px] w-8 lg:w-[32px] h-8 lg:h-[32px] flex items-center justify-center">
                        <Image
                          src="/images/img_frame_1261155037.svg"
                          alt="Support"
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-lg sm:text-xl lg:text-[22px] font-normal leading-6 lg:leading-[26px] text-left text-[#ffffff] font-helvetica">
                        @CorplantaSupport
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
