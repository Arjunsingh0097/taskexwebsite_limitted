"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";

export default function TechnologyDataConsulting() {

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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
            alt="End-to-End Outsourcing Services Background"
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
            End-to-End Outsourcing Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-4 max-w-4xl mx-auto"
          >
            Your Business. Fully Supported. Seamlessly Managed.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="text-lg text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Building and running an organization takes more than a great idea — it requires reliable operations, compliant frameworks, and efficient management. Our End-to-End Outsourcing Services are designed to help businesses focus on what they do best while we take care of everything else.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href="/get-in-touch" className="bg-white text-[#1acb97] font-semibold py-4 px-10 rounded-xl hover:scale-105 transition-all duration-500">
              Get in Touch
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

      {/* INTRODUCTION SECTION */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Complete Operational Support
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From setting up your legal and compliance structure to managing hiring, payroll, HR operations, and workplace infrastructure, we act as your extended operations partner. Whether you&apos;re a growing startup, a scaling enterprise, or a global company entering a new market, we provide a ready ecosystem for smooth, compliant, and cost-efficient operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From legal compliance to HR operations, we handle every aspect of your business infrastructure so you can focus on growth.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our services adapt to your business stage — whether you&apos;re a startup, scaling enterprise, or entering new markets.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Single-Window Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  One trusted partner managing all operational functions with transparent governance and service-level accountability.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
                  alt="End-to-End Outsourcing Services"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive outsourcing solutions designed to support your entire business ecosystem
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Legal & Compliance Management",
              description: "Establish and manage your organization within a robust legal and regulatory framework — ensuring full compliance with local laws, policies, and industry standards.",
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
              title: "Talent Acquisition & Hiring Support",
              description: "Access recruitment expertise to attract, assess, and onboard the right talent aligned with your business goals and culture.",
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
              title: "Payroll & HR Operations",
              description: "Streamline employee lifecycle management, from payroll processing and benefits administration to HR policies and employee engagement.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              ),
            },
            {
              title: "HR Business Partnering (HRBP)",
              description: "Strategic HR support to align people strategy with business objectives — driving productivity, retention, and organizational health.",
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
              title: "Infrastructure Management",
              description: "End-to-end support for office space setup, facilities management, and IT infrastructure — from hardware and networking to secure digital environments.",
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
              title: "Single-Window Operations Management",
              description: "A unified service model that ensures seamless coordination across all operational functions, backed by transparent governance and service-level accountability.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              ),
            },
          ].map((capability, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
            >
              <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {capability.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional outsourcing results through proven expertise and comprehensive support
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "One Partner, Complete Support",
                description: "Simplify operations with a single, trusted outsourcing partner",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: "Compliance Confidence",
                description: "Navigate legal and regulatory complexities with ease",
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
                title: "Scalable & Flexible",
                description: "Tailored models that adapt as your business grows",
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
                title: "Cost & Efficiency Advantage",
                description: "Reduce overhead while maintaining operational excellence",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                ),
              },
              {
                title: "Focus on Core Business",
                description: "We handle the backend so you can focus on growth and innovation",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                ),
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#1acb97] rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <SupportSection />

      {/* CTA SECTION */}
      <section className="relative bg-[#1acb97] py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ffffff20, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Enabling Businesses to Scale Without Boundaries
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-xl text-white/90 mb-8"
          >
            Our End-to-End Outsourcing Services vertical empowers organizations to operate seamlessly and scale confidently. With our integrated approach, you gain a ready operational backbone — enabling faster setup, stronger compliance, and smoother growth from day one.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-[#1acb97] font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-500">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              Get Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}