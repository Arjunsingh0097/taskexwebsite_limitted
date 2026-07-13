"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What services does Taskex offer?",
    answer: "Taskex offers a comprehensive range of business solutions including software development, data analytics, digital marketing, business process services, payroll & HR solutions, and end-to-end outsourcing services.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our planning phase.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with businesses of all sizes — from early-stage startups to large enterprises. Our solutions are scalable and tailored to fit your specific needs and budget.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Pricing depends on project scope, complexity, and duration.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. Our team ensures your solution runs smoothly and evolves with your business needs.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including React, Next.js, Node.js, Python, AWS, Azure, and many more. We choose the best tech stack based on your project requirements.",
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow industry best practices for data security including encryption, secure coding practices, regular security audits, and compliance with GDPR and other relevant regulations.",
  },
  {
    question: "Can I hire a dedicated development team?",
    answer: "Yes, we offer dedicated team augmentation services. You can hire skilled developers, designers, and project managers who work exclusively on your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#1acb97] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
