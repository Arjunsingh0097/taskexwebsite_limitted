"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import SupportSection from "@/components/SupportSection";

export default function TechnologyDataConsulting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Technology Consulting Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className={`text-center text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Technology & Data Consulting Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Strategic technology consulting to accelerate your digital transformation 
              and unlock your data's full potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1acb97] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#1acb97] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology and data consulting services designed to 
              transform your business operations and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Strategy */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Digital Strategy
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Digital transformation roadmap
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Technology assessment & audit
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Innovation strategy development
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Change management planning
                </li>
              </ul>
            </div>

            {/* Data Architecture */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Data Architecture
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Enterprise data modeling
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data governance framework
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Master data management
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data quality & lineage
                </li>
              </ul>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Cloud Solutions
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Cloud migration strategy
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Multi-cloud architecture
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Infrastructure optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Cost optimization & governance
                </li>
              </ul>
            </div>

            {/* Enterprise Integration */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Enterprise Integration
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  API strategy & management
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Legacy system modernization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Microservices architecture
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Real-time data integration
                </li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Security & Compliance
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Cybersecurity assessment
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Compliance framework design
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Risk management strategy
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Privacy & data protection
                </li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Performance Optimization
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  System performance analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Database optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Application tuning
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Scalability planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with experts who understand both technology and business strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600">15+ years of experience in enterprise technology consulting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Rapid deployment with minimal business disruption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">Optimized solutions that deliver maximum ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              Why Choose Our Consulting Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Expert Technology & Data
              <br />
              Consulting Solutions
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Strategy",
                desc: "Comprehensive digital transformation roadmaps, technology assessments, and innovation strategies to modernize your business operations.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Data Architecture Design",
                desc: "Enterprise data modeling, governance frameworks, master data management, and data quality solutions for robust data foundations.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                ),
              },
              {
                title: "Cloud Migration & Solutions",
                desc: "Multi-cloud architecture design, migration strategies, infrastructure optimization, and cost governance for scalable cloud solutions.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                ),
              },
              {
                title: "Enterprise Integration",
                desc: "API strategy development, legacy system modernization, microservices architecture, and real-time data integration solutions.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                ),
              },
              {
                title: "Security & Compliance",
                desc: "Cybersecurity assessments, compliance framework design, risk management strategies, and privacy protection solutions.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Performance Optimization",
                desc: "System performance analysis, database optimization, application tuning, and scalability planning for enhanced efficiency.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg hover:border-emerald-400 hover:bg-gray-750 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <SupportSection />

      {/* CTA Section */}
      <section className="py-20 bg-[#1acb97]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our consulting services can accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1acb97] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#1acb97] transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
