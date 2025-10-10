"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StatsRow from "./StatsRow";
import Footer from "./Footer";

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <main className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 min-h-[80vh]">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="About Taskex Background"
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            About Taskex
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Your Complete Business Solutions Partner • Trusted Worldwide • Driving Innovation
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/get-in-touch" className="bg-white text-[#1acb97] font-semibold py-4 px-10 rounded-xl hover:scale-105 transition-all duration-500">
              Get in Touch
            </Link>
            <Link href="/services" className="border-2 border-white text-white font-semibold py-4 px-10 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Parallax Floating Blur */}
        <motion.div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-emerald-400/20 blur-3xl"
          animate={{ y: [0, 40, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <div className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1acb97] mb-8">
            Empowering Businesses Across All Industries
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Taskex, we are your comprehensive business solutions partner, delivering excellence across software development, 
            data analytics, payroll services, digital marketing, and more. From contractual tech work to business process 
            optimization, we provide end-to-end solutions that drive growth and efficiency for companies worldwide.
          </p>
        </div>

        {/* Services Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Software Development",
              description: "Custom software solutions, SaaS platforms, and web applications built with cutting-edge technologies.",
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
              link: "/services/software-development"
            },
            {
              title: "Data Analytics & Intelligence",
              description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
              link: "/services/data-intelligence-analytics"
            },
            {
              title: "Business Process Services",
              description: "Streamline operations with process optimization, automation solutions, and workflow improvements.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
              link: "/services/business-process"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-[#1acb97] font-medium hover:text-emerald-600 transition-colors">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1acb97] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader, delivering comprehensive business solutions worldwide
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2019 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2019</div>
                    <p className="text-white text-lg">
                      Taskex was founded with a vision to provide comprehensive business solutions, 
                      starting with software development and data analytics services.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-2 0v-4H3a1 1 0 01-1-1zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-2 0V8H9a1 1 0 01-1-1zM14 3a1 1 0 011-1h2a1 1 0 011 1v13a1 1 0 01-2 0V4h-1a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2020</div>
                    <p className="text-white text-lg">
                      Expanded into payroll and HR services, helping businesses streamline their 
                      workforce operations during challenging times.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2021</div>
                    <p className="text-white text-lg">
                      Launched digital marketing and PPC services, helping businesses boost their 
                      online presence and achieve measurable growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2022</div>
                    <p className="text-white text-lg">
                      Introduced business process services and contractual tech work, 
                      expanding our comprehensive solution portfolio.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2023</div>
                    <p className="text-white text-lg">
                      Achieved significant growth with 500+ projects delivered and 
                      99% client satisfaction across all service lines.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-[#1acb97] rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">2024</div>
                    <p className="text-white text-lg">
                      Today, we serve businesses worldwide with 24/7 support, 
                      processing over 590,397.49 EUR in payroll and delivering 300% ROI increases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <StatsRow />

      {/* Video Frame Section */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Frame Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Video Element */}
            <video
              className="w-full h-full object-cover rounded-3xl"
              controls
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23f3f4f6'/%3E%3C/svg%3E"
            >
              <source src="/videos/office-support-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Promise Section */}
        <div className="mt-20 bg-gray-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1acb97]">
                Our mission, vision, and promise
              </h2>
            </div>

            {/* Three Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Our Mission */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=400&h=300&q=80"
                    alt="Diverse team smiling"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#1acb97] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our mission
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    To provide comprehensive business solutions that drive growth and efficiency. 
                    We empower businesses across all industries with cutting-edge technology, 
                    expert services, and innovative approaches to solve complex challenges.
                  </p>
                </div>
              </div>

              {/* Card 2: Our Vision */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=400&h=300&q=80"
                    alt="Team collaboration around laptop"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#1acb97] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our vision
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    To be the world's leading business solutions partner, transforming how companies 
                    operate through innovative technology, data-driven insights, and exceptional service. 
                    We envision a future where every business thrives with our comprehensive support.
                  </p>
                </div>
              </div>

              {/* Card 3: Our Promise */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=400&h=300&q=80"
                    alt="Handshake agreement"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#1acb97] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our promise
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    We promise to deliver excellence in every project, maintain the highest standards 
                    of quality, and provide 24/7 support. Our commitment is to your success—delivering 
                    measurable results, innovative solutions, and exceptional value in every engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We're Different Section */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=800&h=900&q=80"
                  alt="Team collaboration looking at laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why we&apos;re{" "}
                  <span className="text-[#1acb97]">different</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Trusted by industry leaders! We empower businesses worldwide 
                  with our comprehensive expertise and personalized approach.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6 border-t border-gray-200 pt-8">
                {/* Feature 1: Comprehensive Solutions */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Comprehensive business solutions
                    </h3>
                    <p className="text-gray-600">
                      From software development to payroll services, we provide 
                      end-to-end solutions that cover all your business needs.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Technology Excellence */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cutting-edge technology
                    </h3>
                    <p className="text-gray-600">
                      We leverage the latest technologies and frameworks to 
                      deliver innovative solutions that drive business growth.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Data-Driven Approach */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-gray-900"
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Data-driven insights
                    </h3>
                    <p className="text-gray-600">
                      Transform your data into actionable insights with our 
                      advanced analytics and business intelligence solutions.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Global Reach */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Global reach, local expertise
                    </h3>
                    <p className="text-gray-600">
                      Serving businesses worldwide with 24/7 support and 
                      localized solutions tailored to your market needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              THE PEOPLE BEHIND TASKEX
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1acb97]">
              Meet our team
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business solutions, and client success to deliver exceptional results.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-6 rounded-3xl overflow-hidden bg-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Arjun Singh
              </h3>
              <p className="text-gray-600 text-lg">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-6 rounded-3xl overflow-hidden bg-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-gray-600 text-lg">CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-6 rounded-3xl overflow-hidden bg-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-gray-600 text-lg">Head of Operations</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-6 rounded-3xl overflow-hidden bg-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lisa Rodriguez
              </h3>
              <p className="text-gray-600 text-lg">Head of Client Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
