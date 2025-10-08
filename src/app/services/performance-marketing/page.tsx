"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";

export default function PerformanceMarketing() {
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
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Performance Marketing Background"
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
              Performance Marketing & Digital Strategy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Drive measurable results with our data-driven marketing strategies that deliver 
              maximum ROI and sustainable growth
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
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to maximize your 
              reach, engagement, and conversion rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PPC Campaigns */}
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                PPC Campaigns
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Google Ads optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Facebook & Instagram ads
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  LinkedIn advertising
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Campaign performance tracking
                </li>
              </ul>
            </div>

            {/* SEO Optimization */}
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                SEO Optimization
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Keyword research & strategy
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  On-page optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Technical SEO audits
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Content marketing strategy
                </li>
              </ul>
            </div>

            {/* Social Media Marketing */}
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
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M7 4a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Social Media Marketing
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Platform-specific strategies
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Content creation & curation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Community management
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Influencer partnerships
                </li>
              </ul>
            </div>

            {/* Email Marketing */}
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Email Marketing
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Automated email sequences
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Newsletter campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Segmentation & personalization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  A/B testing & optimization
                </li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4a2 2 0 002 2h2a2 2 0 002-2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v14"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Analytics & Reporting
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Performance tracking
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  ROI analysis & reporting
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Conversion optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data-driven insights
                </li>
              </ul>
            </div>

            {/* Conversion Optimization */}
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
                Conversion Optimization
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Landing page optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  A/B testing campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  User experience analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Funnel optimization
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
              Why Choose Our Marketing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with experts who understand both marketing strategy and data-driven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable ROI and growth for clients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Quick campaign launches with immediate optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">Maximize your marketing budget with strategic allocation</p>
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
              Why Choose Our Marketing Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Expert Performance Marketing
              <br />
              Solutions You Can Trust
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PPC Campaign Management",
                desc: "Strategic Google Ads, Facebook, Instagram, and LinkedIn advertising with advanced targeting, optimization, and performance tracking.",
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
                title: "SEO & Content Strategy",
                desc: "Comprehensive SEO optimization, keyword research, content marketing, and technical SEO audits for organic growth and visibility.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                ),
              },
              {
                title: "Social Media Marketing",
                desc: "Platform-specific strategies, content creation, community management, and influencer partnerships for brand engagement and growth.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M7 4a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                  />
                ),
              },
              {
                title: "Email Marketing Automation",
                desc: "Automated email sequences, newsletter campaigns, segmentation, personalization, and A/B testing for maximum engagement and conversions.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
              },
              {
                title: "Analytics & Performance Tracking",
                desc: "Advanced analytics, ROI analysis, conversion tracking, and data-driven insights for continuous optimization and growth.",
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
                title: "Conversion Rate Optimization",
                desc: "Landing page optimization, A/B testing, user experience analysis, and funnel optimization for maximum conversion rates.",
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
            Ready to Boost Your Marketing Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how our marketing strategies can drive growth for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1acb97] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Launch Your Campaign
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