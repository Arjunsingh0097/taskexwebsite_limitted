'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16 py-1 sm:py-2 lg:py-2">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/taskeximage-removebg-preview.png"
                alt="Taskex Logo"
                width={300}
                height={300}
                className="rounded-lg w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8 xl:space-x-12">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#1acb97] px-3 py-2 lg:px-4 lg:py-3 text-base font-medium transition-all duration-200"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-[#1acb97] px-3 py-2 lg:px-4 lg:py-3 text-base font-medium transition-all duration-200 flex items-center"
                >
                  Services
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                    {/* Services Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link
                          href="/services/data-intelligence-analytics"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Data Intelligence and Analytics Services
                        </Link>
                        <Link
                          href="/services/technology-data-consulting"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Technology and Data Consulting & Solutions
                        </Link>
                        <Link
                          href="/services/performance-marketing"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Performance Marketing & Digital Strategy
                        </Link>
                        <Link
                          href="/services/business-process"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Business Process Services
                        </Link>
                        <Link
                          href="/services/software-development"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Software Development (SAAD) Services
                        </Link>
                        <Link
                          href="/services/end-to-end-outsourcing"
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1acb97] transition-all duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          End-to-End Outsourcing Services
                        </Link>
                      </div>
                    )}
              </div>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#1acb97] px-3 py-2 lg:px-4 lg:py-3 text-base font-medium transition-all duration-200"
              >
                About
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center">
            <Link href="/get-in-touch" className="bg-[#1acb97] text-white hover:bg-emerald-600 px-6 py-3 rounded-md text-base font-medium transition-all duration-200 shadow-sm hover:shadow-md inline-block">
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-[#1acb97] block px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
              
              {/* Services in Mobile Menu */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium text-base mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/data-intelligence-analytics"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Intelligence and Analytics Services
                  </Link>
                  <Link
                    href="/services/technology-data-consulting"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology and Data Consulting & Solutions
                  </Link>
                  <Link
                    href="/services/performance-marketing"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Performance Marketing & Digital Strategy
                  </Link>
                  <Link
                    href="/services/business-process"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business Process Services
                  </Link>
                  <Link
                    href="/services/software-development"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Software Development (SAAD) Services
                  </Link>
                  <Link
                    href="/services/end-to-end-outsourcing"
                    className="text-gray-700 hover:text-[#1acb97] block py-2 text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    End-to-End Outsourcing Services
                  </Link>
                </div>
              </div>
              
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-[#1acb97] block px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link href="/get-in-touch" className="bg-[#1acb97] text-white hover:bg-emerald-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 shadow-sm">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
