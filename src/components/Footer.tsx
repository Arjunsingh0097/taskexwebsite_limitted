"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/images/taskeximage-removebg-preview.png"
                alt="Taskex Logo"
                width={300}
                height={300}
                className="rounded-lg w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56"
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Your complete business solutions partner across all industries. 
              From software development to payroll services, we deliver excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Software Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">SaaS & Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Data Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Contractual Tech Work</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Business Process Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Payroll & HR</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">PPC Campaigns</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1acb97] transition-colors duration-300">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#1acb97] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-600">JMD Megapolis, Office #246, 2nd Floor</p>
                  <p className="text-gray-600">Sohna Road, Sector 48, Gurugram</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#1acb97] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-600">+91 92127 15691</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#1acb97] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600">manager@taskex.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-gray-600 text-sm">
                © 2024 Taskex. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-[#1acb97] text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-[#1acb97] text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-[#1acb97] text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Made with ❤️ for businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
