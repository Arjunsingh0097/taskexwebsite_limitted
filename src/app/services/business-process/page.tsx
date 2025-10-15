"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";

export default function BusinessProcess() {

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
            alt="Business Process Services Background"
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
            Business Process Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-4 max-w-4xl mx-auto"
          >
            Streamlining Operations. Enhancing Efficiency. Driving Growth.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="text-lg text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            In today's competitive landscape, operational excellence is the foundation of business success. Our Business Process Services (BPS) help organizations optimize, digitize, and transform their core and support processes — improving efficiency, reducing costs, and enabling teams to focus on strategic priorities.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-[#1acb97] font-semibold py-4 px-10 rounded-xl hover:scale-105 transition-all duration-500">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-10 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              Get in Touch
            </button>
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
              Transforming How Work Gets Done
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine process expertise, automation, analytics, and technology-led innovation to reimagine how work gets done. From front-office customer operations to back-office administration, we deliver measurable outcomes through process excellence and continuous improvement.
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
                  Process Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive approach ensures every process is optimized for maximum efficiency, accuracy, and scalability.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Technology Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage cutting-edge automation, AI, and analytics to transform traditional processes into intelligent operations.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Measurable Results
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every solution is designed to deliver quantifiable improvements in efficiency, cost reduction, and operational excellence.
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                  alt="Business Process Optimization"
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
            Comprehensive business process solutions designed to transform your operations
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Process Consulting & Optimization",
              description: "Analyze, redesign, and streamline workflows to eliminate inefficiencies and enhance productivity.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              ),
            },
            {
              title: "Finance & Accounting Services",
              description: "End-to-end support across accounts payable, receivable, reconciliations, and reporting — ensuring accuracy, transparency, and compliance.",
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
              title: "HR & Payroll Operations",
              description: "Manage the full employee lifecycle — from onboarding to payroll and compliance — through efficient, tech-enabled processes.",
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
              title: "Customer Experience Management",
              description: "Deliver seamless, high-quality customer interactions through multichannel support and data-driven engagement strategies.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              ),
            },
            {
              title: "Procurement & Supply Chain Operations",
              description: "Simplify procurement cycles, optimize vendor management, and strengthen supply chain visibility and performance.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              ),
            },
            {
              title: "Automation & Digital Enablement",
              description: "Leverage RPA, AI, and analytics to automate repetitive tasks, enhance decision-making, and drive intelligent operations.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
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
            We deliver exceptional value through proven expertise and innovative solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Process Expertise",
                description: "Deep domain knowledge across industries and functions",
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
                title: "Digital Transformation Focus",
                description: "Technology-driven process excellence",
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
                title: "Flexible Engagement Models",
                description: "Scalable solutions tailored to your business needs",
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
                title: "Data-Driven Insights",
                description: "Analytics-backed process optimization",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                ),
              },
              {
                title: "Operational Resilience",
                description: "Secure, compliant, and reliable delivery",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
            Transforming Processes into Competitive Advantage
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-xl text-white/90 mb-8"
          >
            Our Business Process Services vertical helps organizations achieve more with less — by simplifying operations, improving accuracy, and creating agile business ecosystems. Whether your goal is cost efficiency, better customer experience, or operational agility, we make your processes work smarter for lasting impact.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-[#1acb97] font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-500">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}