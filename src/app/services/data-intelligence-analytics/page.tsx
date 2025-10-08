"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function DataIntelligenceAnalytics() {
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Data Analytics Background"
            fill
            className="object-cover"
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
              Data Intelligence & Analytics Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your data into actionable insights that drive business
              growth and competitive advantage
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
              Our Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data intelligence services designed to unlock the
              full potential of your business data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Intelligence */}
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
                Business Intelligence
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Interactive dashboards & KPI monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Real-time reporting & analytics
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Custom data models & ETL processes
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Executive & operational dashboards
                </li>
              </ul>
            </div>

            {/* Predictive Analytics */}
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
                Predictive Analytics
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Customer behavior prediction
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Sales forecasting & trend analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Risk assessment & fraud detection
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Demand planning & inventory optimization
                </li>
              </ul>
            </div>

            {/* Data Visualization */}
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Data Visualization
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Interactive charts & graphs
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Geospatial data mapping
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Real-time data streaming displays
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Mobile-responsive dashboards
                </li>
              </ul>
            </div>

            {/* Big Data Analytics */}
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
                Big Data Analytics
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Large-scale data processing
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Real-time data streaming
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data lake & warehouse solutions
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Scalable cloud infrastructure
                </li>
              </ul>
            </div>

            {/* Machine Learning */}
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Machine Learning
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Automated model training
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Natural language processing
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Computer vision & image analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Recommendation engines
                </li>
              </ul>
            </div>

            {/* Data Governance */}
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
                Data Governance
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data quality & validation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Privacy & compliance management
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data lineage & cataloging
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Security & access controls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Analytics Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms your data into actionable business insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Discovery */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1acb97] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Discovery & Assessment
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Business requirements analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data source identification
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Current infrastructure audit
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Stakeholder interviews
                </li>
              </ul>
            </div>

            {/* Step 2: Strategy */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1acb97] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategy & Planning
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Analytics roadmap creation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Technology stack selection
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data architecture design
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Implementation timeline
                </li>
              </ul>
            </div>

            {/* Step 3: Implementation */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1acb97] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Implementation
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data pipeline development
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Model training & validation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Dashboard & report creation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  System integration & testing
                </li>
              </ul>
            </div>

            {/* Step 4: Optimization */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1acb97] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Optimization & Support
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Performance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Continuous model improvement
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  User training & adoption
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Ongoing maintenance & support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with data-driven insights that deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Increased Revenue */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Increase Revenue
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Identify high-value customer segments
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Optimize pricing strategies
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Cross-sell & upsell opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Predict customer lifetime value
                </li>
              </ul>
            </div>

            {/* Reduce Costs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4a2 2 0 002 2h2a2 2 0 002-2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reduce Costs
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Optimize inventory management
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Prevent fraud & reduce losses
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Streamline operational processes
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Reduce customer churn
                </li>
              </ul>
            </div>

            {/* Better Decisions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Better Decisions
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Real-time performance insights
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Predictive market analysis
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Risk assessment & mitigation
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Data-driven strategy formulation
                </li>
              </ul>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Competitive Advantage
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  First-mover insights
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Customer behavior intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Market trend prediction
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Innovation opportunity identification
                </li>
              </ul>
            </div>

            {/* Improved Efficiency */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Improved Efficiency
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Automated reporting processes
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Streamlined data workflows
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Self-service analytics tools
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Reduced manual data processing
                </li>
              </ul>
            </div>

            {/* Enhanced Customer Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enhanced Customer Experience
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Personalized recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Proactive customer support
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Churn prediction & prevention
                </li>
                <li className="flex items-start">
                  <span className="text-[#1acb97] mr-2">•</span>
                  Customer journey optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Technology Stack (3D Floating Icons) */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and technologies for powerful analytics
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12 place-items-center">
            {[
              {
                name: "Python",
                desc: "Programming",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
              },
              {
                name: "R",
                desc: "Statistics",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
              },
              {
                name: "SQL",
                desc: "Database",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
              },
            
              {
                name: "Power BI",
                desc: "BI Tools",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
              },
              {
                name: "Apache Spark",
                desc: "Big Data",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg",
              },
              {
                name: "TensorFlow",
                desc: "ML / AI",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
              },
              {
                name: "AWS",
                desc: "Cloud",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
              },
              {
                name: "Azure",
                desc: "Cloud",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
              },
              {
                name: "Google Cloud",
                desc: "Cloud",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
              },
              {
                name: "Docker",
                desc: "Containerization",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
              },
              {
                name: "Kubernetes",
                desc: "Orchestration",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-3 hover:scale-105"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-20 h-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                />
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world results from our data intelligence implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">E-Commerce Retailer</h3>
                  <p className="text-gray-400">Revenue Optimization</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Challenge:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Low customer lifetime value
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    High cart abandonment rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Ineffective marketing campaigns
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Solution:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Customer segmentation & profiling
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Predictive analytics for churn prevention
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Real-time recommendation engine
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">+45%</div>
                  <div className="text-sm text-gray-400">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">-30%</div>
                  <div className="text-sm text-gray-400">Cart Abandonment</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Manufacturing Company</h3>
                  <p className="text-gray-400">Operational Efficiency</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Challenge:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    High equipment downtime
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Inefficient inventory management
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Quality control issues
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Solution:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    IoT sensor data integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Predictive maintenance models
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Real-time quality monitoring
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">-40%</div>
                  <div className="text-sm text-gray-400">Downtime Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">+25%</div>
                  <div className="text-sm text-gray-400">Productivity Gain</div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Financial Services</h3>
                  <p className="text-gray-400">Risk Management</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Challenge:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    High fraud detection false positives
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Manual risk assessment processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Regulatory compliance complexity
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Solution:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Advanced fraud detection algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Automated risk scoring models
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Real-time transaction monitoring
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">-60%</div>
                  <div className="text-sm text-gray-400">False Positives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">+95%</div>
                  <div className="text-sm text-gray-400">Fraud Detection</div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Healthcare Provider</h3>
                  <p className="text-gray-400">Patient Outcomes</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Challenge:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    High readmission rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Inefficient resource allocation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Patient satisfaction issues
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Solution:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Clinical data analytics platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Predictive health risk models
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1acb97] mr-2">•</span>
                    Resource optimization algorithms
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">-35%</div>
                  <div className="text-sm text-gray-400">Readmission Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1acb97]">+50%</div>
                  <div className="text-sm text-gray-400">Patient Satisfaction</div>
                </div>
              </div>
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
              Why Choose Our Analytics Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Expert Data Intelligence
              <br />
              Solutions You Can Trust
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Analytics",
                desc: "Live data streaming, instant dashboard updates, real-time alerting systems, and sub-second query responses for immediate insights.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Business Intelligence",
                desc: "Interactive dashboards, KPI monitoring, real-time reporting, custom data models, and executive dashboards for data-driven decisions.",
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
                title: "Predictive Analytics",
                desc: "Customer behavior prediction, sales forecasting, risk assessment, fraud detection, and demand planning for proactive decision making.",
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
                title: "Data Visualization",
                desc: "Interactive charts, geospatial mapping, real-time data displays, and mobile-responsive dashboards for comprehensive data insights.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                ),
              },
              {
                title: "Machine Learning & AI",
                desc: "Automated model training, natural language processing, computer vision, recommendation engines, and AI-powered insights for intelligent automation.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                ),
              },
              {
                title: "Data Governance",
                desc: "Data quality validation, privacy compliance, data lineage tracking, security controls, and audit trails for enterprise-grade data management.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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

      {/* CTA Section */}
      <section className="bg-[#1acb97] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our data intelligence services can transform your
            business and drive measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1acb97] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#1acb97] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
