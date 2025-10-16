"use client";

import { useState, useEffect, useRef } from "react";

export default function FeaturesSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Software Development",
      desc: "Custom software solutions, SaaS platforms, and web applications built with cutting-edge technologies to drive your business forward.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
    },
    {
      title: "Data Analytics & Insights",
      desc: "Transform your data into actionable insights with advanced analytics, business intelligence, and data-driven strategies for growth.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4a2 2 0 002 2h2a2 2 0 002-2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v14"
        />
      ),
    },
    {
      title: "Payroll & HR Services",
      desc: "Comprehensive payroll management, HR solutions, and compliance services that streamline your workforce operations.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Digital Marketing & PPC",
      desc: "Boost your online presence with data-driven marketing strategies, targeted PPC campaigns, and SEO optimization.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
    {
      title: "Contractual Tech Work",
      desc: "Flexible engagement models for tech projects. Get expert developers and specialists on-demand to accelerate your initiatives.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      title: "Business Process Services",
      desc: "Streamline operations with process optimization, automation solutions, and workflow improvements that increase efficiency.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      ),
    },
  ];

  // Apple-style scroll animations with mobile optimization
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress within this section
      const scrollStart = rect.top;
      const scrollRange = sectionHeight + windowHeight;
      
      // Progress from 0 to 1 as user scrolls through section
      // Reduce scroll range on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const adjustedScrollRange = isMobile ? scrollRange * 0.7 : scrollRange;
      const progress = Math.max(0, Math.min(1, (windowHeight - scrollStart) / adjustedScrollRange));
      setScrollProgress(progress);
    };

    // Throttled scroll listener with mobile optimization
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better mobile performance
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  // Calculate animation values based on scroll progress with mobile optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const animationSpeed = isMobile ? 2.5 : 4; // Slower animations on mobile
  const translateDistance = isMobile ? 20 : 30; // Smaller translations on mobile
  
  const badgeOpacity = Math.min(1, scrollProgress * animationSpeed);
  const badgeTranslateY = (1 - Math.min(1, scrollProgress * 2.5)) * translateDistance;
  const titleOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.1) * animationSpeed));
  const titleTranslateY = (1 - Math.min(1, (scrollProgress - 0.1) * 2.5)) * (translateDistance + 20);
  const cardsOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.2) * 2.5));
  const cardsTranslateY = (1 - Math.min(1, (scrollProgress - 0.2) * 2)) * (translateDistance + 10);

  return (
    <section 
      ref={sectionRef}
      className={`${isMobile ? 'min-h-[200vh]' : 'min-h-[300vh]'} bg-gradient-to-br from-gray-50 to-white flex flex-col`}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div 
            className="text-center mb-4 sm:mb-6"
            style={{
              opacity: badgeOpacity,
              transform: `translateY(${badgeTranslateY}px)`,
              transition: isMobile ? 'opacity 0.2s ease-out, transform 0.2s ease-out' : 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide">
              Why Businesses Choose Us
            </span>
          </div>

          {/* Main Heading */}
          <div 
            className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleTranslateY}px)`,
              transition: isMobile ? 'opacity 0.2s ease-out, transform 0.2s ease-out' : 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              The Complete Business Solutions
              <br />
              <span className="text-emerald-500">Partner You Can Trust</span>
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
            style={{
              opacity: cardsOpacity,
              transform: `translateY(${cardsTranslateY}px)`,
              transition: isMobile ? 'opacity 0.2s ease-out, transform 0.2s ease-out' : 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
          {features.map((card, index) => {
            // Calculate individual card animations based on scroll progress with mobile optimization
            const cardDelay = isMobile ? index * 0.05 : index * 0.1; // Faster stagger on mobile
            const cardAnimationSpeed = isMobile ? 3 : 4;
            const cardOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.2 - cardDelay) * cardAnimationSpeed));
            const cardTranslateY = (1 - Math.min(1, (scrollProgress - 0.2 - cardDelay) * 2)) * (isMobile ? 20 : 30);
            const cardScale = Math.min(1, Math.max(0.9, scrollProgress * (isMobile ? 1.1 : 1.2)));

            return (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col hover:shadow-lg hover:border-emerald-400 hover:bg-gray-750 transition-all duration-300 shadow-sm"
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${cardTranslateY}px) scale(${cardScale})`,
                  transition: isMobile ? 'opacity 0.2s ease-out, transform 0.2s ease-out' : 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
                {card.desc}
              </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
