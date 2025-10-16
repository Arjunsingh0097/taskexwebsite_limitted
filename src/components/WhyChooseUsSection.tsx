"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-emerald-200/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-teal-200/40 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#1acb97]/10 text-[#1acb97] text-sm font-semibold px-5 py-2 rounded-full uppercase tracking-wide mb-4">
            Why Choose Taskex
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            We Don’t Just Deliver —{" "}
            <span className="bg-gradient-to-r from-[#1acb97] to-emerald-600 bg-clip-text text-transparent">
              We Transform.
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choosing Taskex means choosing precision, security, and long-term
            reliability. We bring expertise and innovation to every project we
            touch.
          </p>
        </motion.div>

        {/* Main Grid — Symmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[800px] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/beautifulimage.jpg"
                alt="Taskex Team Collaboration"
                width={800}
                height={450}
                className="object-cover w-full h-[750px] md:h-[800px] lg:h-[850px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <p className="text-3xl font-bold text-[#1acb97] mb-1">500+</p>
                <p className="text-sm font-medium text-gray-700">
                  Projects Delivered
                </p>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <p className="text-3xl font-bold text-[#1acb97] mb-1">99%</p>
                <p className="text-sm font-medium text-gray-700">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 pt-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Clients Love Working with Us
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "Speed + Quality",
                  desc: "Delivering 40% faster than industry average while maintaining pixel-perfect quality and testing at every step.",
                },
                {
                  title: "Unmatched Security",
                  desc: "Military-grade encryption and compliance with SOC 2 and ISO 27001 ensure your data is always protected.",
                },
                {
                  title: "Expert-Only Teams",
                  desc: "Every project is handled by seasoned professionals — no interns or untested juniors on mission-critical tasks.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "Flat-rate packages, zero hidden costs, and complete transparency in every billing cycle.",
                },
                {
                  title: "24/7 Human Support",
                  desc: "You’ll always talk to a dedicated expert, not a bot — ensuring fast solutions and real accountability.",
                },
                {
                  title: "Next-Gen Technology",
                  desc: "AI, ML, and cloud-native frameworks power your projects with performance and scalability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1acb97] to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#1acb97] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-10"
            >
              <div className="bg-gradient-to-r from-[#1acb97] to-emerald-600 rounded-3xl p-10 text-white shadow-xl text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Experience the Taskex Advantage
                </h4>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                  Join 500+ businesses that scale faster and smarter with our
                  expert-driven development and 24/7 global support.
                </p>
                <div className="flex justify-center">
                  <Link href="/get-in-touch">
                    <button className="bg-white text-[#1acb97] font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Start Your Project
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
