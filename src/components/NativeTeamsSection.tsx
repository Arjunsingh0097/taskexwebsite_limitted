"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NativeTeamsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2069&q=80",
  ];

  const contentData = [
    {
      title: "Your Business",
      subtitle: "Solutions Partner",
      description: "From software development to payroll services, we provide comprehensive solutions that drive growth and efficiency.",
      buttonText: "Get Started"
    },
    {
      title: "Software Development",
      subtitle: "& SaaS Solutions",
      description: "Custom software solutions, SaaS platforms, and web applications built with cutting-edge technologies to drive your business forward.",
      buttonText: "Start Your Project"
    },
    {
      title: "Data Analytics",
      subtitle: "& Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics, business intelligence, and data-driven strategies for growth.",
      buttonText: "Analyze Now"
    },
    {
      title: "Payroll & HR",
      subtitle: "Services Made Easy",
      description: "Comprehensive payroll management, HR solutions, and compliance services that streamline your workforce operations.",
      buttonText: "Optimize HR"
    },
    {
      title: "Digital Marketing",
      subtitle: "& PPC Campaigns",
      description: "Boost your online presence with data-driven marketing strategies, targeted PPC campaigns, and SEO optimization.",
      buttonText: "Boost Growth"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Apple-style scroll animations
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
      const progress = Math.max(0, Math.min(1, (windowHeight - scrollStart) / scrollRange));
      setScrollProgress(progress);

      // Determine which image should be active based on scroll progress
      const imageCount = images.length;
      const newIndex = Math.floor(progress * imageCount);
      const clampedIndex = Math.min(newIndex, imageCount - 1);
      
      if (clampedIndex !== currentImageIndex) {
        setCurrentImageIndex(clampedIndex);
      }
    };

    // Throttled scroll listener
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

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [currentImageIndex, images.length]);

  const currentContent = contentData[currentImageIndex];

  // Calculate animation values based on scroll progress
  const titleOpacity = Math.min(1, scrollProgress * 3);
  const titleTranslateY = (1 - Math.min(1, scrollProgress * 2)) * 50;
  const descriptionOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.2) * 4));
  const descriptionTranslateY = (1 - Math.min(1, (scrollProgress - 0.2) * 2)) * 30;
  const buttonOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.4) * 3));
  const buttonTranslateY = (1 - Math.min(1, (scrollProgress - 0.4) * 2)) * 20;

  return (
    <section 
      ref={sectionRef}
      className="min-h-[500vh] bg-gradient-to-br from-gray-50 to-white flex flex-col"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row">
        {/* Left Section - Animated Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 space-y-4 sm:space-y-6 lg:space-y-8">
          <div 
            className="space-y-4 sm:space-y-6 lg:space-y-8"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleTranslateY}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {currentContent.title} <br />
              <span className="text-emerald-500">{currentContent.subtitle}</span>
            </h1>
          </div>
          
          <div 
            className="max-w-lg"
            style={{
              opacity: descriptionOpacity,
              transform: `translateY(${descriptionTranslateY}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
            style={{
              opacity: buttonOpacity,
              transform: `translateY(${buttonTranslateY}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            <Link href="/get-in-touch" className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg font-semibold inline-block text-center">
              {currentContent.buttonText}
            </Link>
          </div>
          
          {/* Image Indicators */}
          <div className="flex space-x-2 mt-4 sm:mt-6 lg:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-emerald-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Animated Carousel */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            {images.map((img, index) => {
              const diff = (index - currentImageIndex + images.length) % images.length;
              const isActive = diff === 0;
              const isNext = diff === 1;
              const isPrev = diff === images.length - 1;

              let classes = "absolute transition-all duration-700 ease-in-out rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white";
              let style: React.CSSProperties = {};

              if (isActive) {
                classes += " z-30";
                style = {
                  transform: `translateX(0) scale(1) rotateY(0deg)`,
                  width: "85%",
                  height: "100%",
                  opacity: 1,
                };
              } else if (isNext) {
                classes += " z-20";
                style = {
                  transform: `translateX(70%) scale(0.7) rotateY(-10deg)`,
                  width: "60%",
                  height: "70%",
                  opacity: 0.6,
                };
              } else if (isPrev) {
                classes += " z-20";
                style = {
                  transform: `translateX(-70%) scale(0.7) rotateY(10deg)`,
                  width: "60%",
                  height: "70%",
                  opacity: 0.6,
                };
              } else {
                classes += " opacity-0";
                style = { 
                  transform: "scale(0.4) rotateY(30deg)",
                  opacity: 0
                };
              }

              return (
                <div key={index} className={classes} style={style}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Animated overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    style={{
                      opacity: isActive ? 0.3 : 0.1,
                      transition: 'opacity 0.7s ease-out'
                    }}
                  />
                  
                  {/* Image number badge */}
                  <div 
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(0.8)',
                      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
                    }}
                  >
                    {index + 1} / {images.length}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 lg:px-8">
            <button
              onClick={prevImage}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              style={{
                opacity: scrollProgress > 0.1 ? 1 : 0,
                transform: `translateX(${scrollProgress > 0.1 ? 0 : -20}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
            >
              <span className="text-sm sm:text-base lg:text-lg">◀</span>
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              style={{
                opacity: scrollProgress > 0.1 ? 1 : 0,
                transform: `translateX(${scrollProgress > 0.1 ? 0 : 20}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
            >
              <span className="text-sm sm:text-base lg:text-lg">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
