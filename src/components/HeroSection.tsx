"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Background Images */}
      <div className="absolute inset-0 top-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Business Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Luxury glow overlays */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-400/20 blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-[200px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-yellow-500/10 blur-[160px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ↑ Added pt-32 for space below nav */}

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200 bg-clip-text text-transparent drop-shadow-lg mb-6 leading-tight">
          Your Complete Business Solutions
          <br />
          Partner Across All Industries
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          From contractual tech work and business process services to payroll,
          HR solutions, digital marketing, and PPC campaigns—we provide
          end-to-end business solutions that drive growth and efficiency across
          every industry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/get-in-touch" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
            Book a Demo
          </Link>
          <Link href="/get-in-touch" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg backdrop-blur-md border border-white/30 transition-all duration-300">
            View Docs
          </Link>
        </div>
      </div>

      {/* Floating Decorative Glows */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/30 rounded-full blur-2xl animate-pulse delay-200"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-emerald-300/20 rounded-full blur-2xl animate-ping"></div>
    </section>
  );
}
