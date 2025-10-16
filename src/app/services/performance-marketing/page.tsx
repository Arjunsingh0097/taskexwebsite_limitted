"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";

export default function DigitalMarketing() {

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
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
            alt="Digital Marketing Background"
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
            Digital Marketing
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-4 max-w-4xl mx-auto"
          >
            Connecting Brands with Audiences That Matter
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="text-lg text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            In a digital-first world, visibility, engagement, and conversion define success. Our Digital Marketing services help businesses build strong online presence, attract the right audience, and drive measurable growth through data-led strategies and creative storytelling.
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
              Strategic Marketing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We blend strategy, design, technology, and analytics to craft campaigns that not only capture attention but also deliver results. From awareness to conversion and retention, we help you engage your customers across every stage of their journey.
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
                  Data-Driven Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every campaign is backed by comprehensive analytics and insights to ensure maximum ROI and sustainable growth.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Creative Storytelling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We craft compelling narratives that resonate with your audience and drive meaningful engagement across all touchpoints.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Multi-Channel Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated campaigns across search, social, email, and content marketing for comprehensive brand presence.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Marketing Strategy"
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
            Comprehensive digital marketing solutions designed to drive growth and engagement
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Digital Strategy & Consulting",
              description: "Develop tailored marketing roadmaps that align with your business goals and customer expectations.",
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
              title: "Search Engine Optimization (SEO)",
              description: "Improve visibility and organic reach through smart keyword strategy, technical optimization, and high-quality content.",
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
              title: "Performance Marketing (SEM & Paid Campaigns)",
              description: "Maximize ROI with data-driven campaigns across Google Ads, Meta, LinkedIn, and other platforms.",
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
              title: "Social Media Marketing & Management",
              description: "Build brand awareness and engagement with impactful storytelling and consistent, audience-relevant content.",
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
              title: "Content Marketing",
              description: "Create and distribute valuable, targeted content that builds authority, trust, and loyalty.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              ),
            },
            {
              title: "Email & CRM Campaigns",
              description: "Personalize communication to nurture leads, retain customers, and drive repeat business.",
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
              title: "Analytics & Conversion Optimization",
              description: "Measure performance, track KPIs, and optimize campaigns for better engagement and conversions.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4a2 2 0 002 2h2a2 2 0 002-2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v14"
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
            We deliver exceptional digital marketing results through proven strategies and innovative approaches
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Approach",
                description: "Strategy, creativity, and analytics under one roof",
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
                title: "Data-Driven Execution",
                description: "Every decision backed by measurable insights",
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
                title: "Cross-Channel Expertise",
                description: "Consistent brand storytelling across platforms",
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
                title: "Performance Focus",
                description: "Clear metrics, transparent reporting, real results",
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
                title: "Scalable Solutions",
                description: "Designed to grow with your business needs",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
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
            Driving Digital Impact That Matters
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-xl text-white/90 mb-8"
          >
            Our Digital Marketing vertical helps brands cut through the noise and connect meaningfully with their audiences. Whether it&apos;s building awareness, generating leads, or scaling conversions — we turn your digital presence into a measurable growth engine.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-[#1acb97] font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-500">
              Start Your Campaign
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              Get Marketing Strategy
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}