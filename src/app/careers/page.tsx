"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const openings = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Gurugram / Remote",
    description: "We're looking for an experienced full-stack developer proficient in React, Node.js, and cloud technologies.",
  },
  {
    title: "Data Analyst",
    type: "Full-time",
    location: "Gurugram / Remote",
    description: "Join our data team to build analytics solutions that drive business decisions for our clients.",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Gurugram",
    description: "Manage and optimize digital marketing campaigns across SEO, SEM, and social media channels.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    description: "Design intuitive and beautiful user experiences for web and mobile applications.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Gurugram",
    description: "Drive business growth by identifying opportunities and building client relationships.",
  },
];

export default function Careers() {
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
            Careers at Taskex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Join our team and help build the future of business solutions
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Innovation First", desc: "Work on cutting-edge projects with the latest technologies.", icon: " " },
              { title: "Growth Culture", desc: "Continuous learning, mentorship, and career development opportunities.", icon: " " },
              { title: "Work-Life Balance", desc: "Flexible schedules, remote options, and a supportive environment.", icon: "⚖️" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="flex gap-3 mt-2 sm:mt-0">
                    <span className="text-sm bg-[#1acb97]/10 text-[#1acb97] px-3 py-1 rounded-full font-medium">{job.type}</span>
                    <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <a
                  href="mailto:careers@taskex.in"
                  className="inline-block bg-[#1acb97] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
