'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Taskex's expertise in global employment, compliance, and HR administration gave the necessary support to hire talent abroad and expand global operations. Their easy onboarding process was crucial for expanding outside of Switzerland.",
      author: "Kasia Czarkowska",
      position: "Executive Assistant to the CEO at TelXira",
      initials: "KC",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-gray-900",
      avatarBg: "bg-gray-200"
    },
    {
      id: 2,
      text: "As we expanded across multiple countries, managing compliance with local regulations and providing local benefits became a challenge. By collaborating with Taskex, our company positioned itself to concentrate on our mission with renewed focus and efficiency.",
      author: "Karla Tomić",
      position: "CEO at Atrex Group",
      initials: "KT",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      quoteColor: "text-white",
      avatarBg: "bg-gray-600"
    },
    {
      id: 3,
      text: "We saw personally Taskex's dedication to providing great service. They share our commitment to quality and understand the requirements of global businesses. Our employees have benefited from their suite of services, which includes comprehensive IT solutions.",
      author: "Sebastian Vukosic",
      position: "CEO at Advising Solutions",
      initials: "SV",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-gray-900",
      avatarBg: "bg-gray-200"
    },
    {
      id: 4,
      text: "Taskex transformed our digital infrastructure with their software development and data analytics services. Their team's technical expertise and business process optimization helped us scale efficiently across multiple markets.",
      author: "Maria Rodriguez",
      position: "CTO at TechFlow Solutions",
      initials: "MR",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      quoteColor: "text-white",
      avatarBg: "bg-gray-600"
    },
    {
      id: 5,
      text: "The contractual tech work provided by Taskex has been exceptional. Their developers seamlessly integrated with our team and delivered high-quality software solutions that exceeded our expectations. Their flexible engagement model was perfect for our project needs.",
      author: "David Chen",
      position: "VP of Engineering at InnovateCorp",
      initials: "DC",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-gray-900",
      avatarBg: "bg-gray-200"
    },
    {
      id: 6,
      text: "Taskex's digital marketing and PPC campaigns have significantly boosted our online presence. Their data-driven approach and strategic insights helped us achieve 300% increase in qualified leads within just three months.",
      author: "Sarah Johnson",
      position: "Marketing Director at GrowthTech",
      initials: "SJ",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      quoteColor: "text-white",
      avatarBg: "bg-gray-600"
    },
    {
      id: 7,
      text: "Their payroll and HR services have streamlined our entire workforce management. The automated systems and compliance handling saved us countless hours and ensured we never missed any regulatory requirements across different countries.",
      author: "Michael Brown",
      position: "Head of Operations at GlobalTech",
      initials: "MB",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-gray-900",
      avatarBg: "bg-gray-200"
    },
    {
      id: 8,
      text: "Taskex's business process services revolutionized our operations. Their automation solutions and process optimization increased our efficiency by 40% while reducing operational costs significantly. Truly transformative partnership.",
      author: "Lisa Wang",
      position: "COO at ProcessFlow Inc",
      initials: "LW",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      quoteColor: "text-white",
      avatarBg: "bg-gray-600"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isMobile]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-0">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            What our customers say
          </h2>
          <p className="text-lg sm:text-xl text-white/80">
            Trusted by companies worldwide
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden px-4 sm:px-6 lg:px-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: isMobile 
                  ? `translateX(-${currentSlide * 100}%)` 
                  : `translateX(-${currentSlide * 33.333}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <div className={`${testimonial.bgColor} rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 h-full shadow-lg mx-1 sm:mx-2 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col`}>
                    {/* Quote Icon */}
                    <div className={`${testimonial.quoteColor} text-3xl sm:text-4xl font-bold mb-3 sm:mb-4`}>
                      "
                    </div>
                    
                    {/* Testimonial Text */}
                    <div className="mb-6 sm:mb-8 flex-grow">
                      <p className={`${testimonial.textColor} text-sm sm:text-base leading-relaxed`}>
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center mt-auto">
                      <div className={`${testimonial.avatarBg} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4`}>
                        <span className={`${testimonial.textColor} font-semibold text-xs sm:text-sm lg:text-base`}>
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className={`${testimonial.textColor} font-bold text-sm sm:text-base`}>
                          {testimonial.author}
                        </h4>
                        <p className={`${testimonial.textColor} text-xs sm:text-sm opacity-80`}>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {(isMobile ? testimonials : testimonials.slice(0, testimonials.length - 2)).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
