"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    rating: 5,
    text: "Taskex transformed our business operations completely. Their software development team delivered a robust platform that exceeded our expectations. Highly recommended!",
  },
  {
    name: "Sarah Mitchell",
    role: "Director, GlobalTrade UK",
    rating: 5,
    text: "The data analytics solutions provided by Taskex gave us insights we never had before. Our decision-making process has improved dramatically.",
  },
  {
    name: "Amit Patel",
    role: "Founder, EduLearn",
    rating: 5,
    text: "Working with Taskex on our SaaS platform was a game-changer. Their team is professional, responsive, and truly understands business needs.",
  },
  {
    name: "Jennifer Wong",
    role: "COO, HealthPlus",
    rating: 5,
    text: "Taskex's end-to-end outsourcing services helped us scale efficiently. Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Vikram Singh",
    role: "Marketing Head, RetailPro",
    rating: 5,
    text: "The digital marketing strategy Taskex developed increased our online presence by 300%. Their performance marketing expertise is exceptional.",
  },
  {
    name: "Maria Garcia",
    role: "VP Operations, LogiFlow",
    rating: 5,
    text: "Taskex's business process optimization saved us thousands of hours annually. They truly understand operational efficiency.",
  },
];

export default function Reviews() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Client Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            See what our clients say about working with Taskex
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
