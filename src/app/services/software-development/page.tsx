"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import SupportSection from "@/components/SupportSection";

export default function SoftwareDevelopment() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
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
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80"
            alt="Software Development Background"
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
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Software Development
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Build scalable solutions • Modern technologies • Drive innovation
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
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

      {/* STATS SECTION */}
      <section className="py-16 bg-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "50+", label: "Technologies Used" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <div className="text-4xl font-bold text-[#1acb97] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development Services
          </h2>
          <p className="text-lg text-gray-600">
            Cutting-edge solutions. Proven expertise. Delivered on time.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {[
            {
              title: "Web Applications",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
              points: [
                "Custom web applications",
                "Modern frameworks (React, Next.js, Vue)",
                "Responsive design",
                "API integration & development",
              ],
            },
            {
              title: "Mobile Applications",
              img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
              points: [
                "Native iOS & Android apps",
                "Cross-platform solutions (React Native, Flutter)",
                "App Store optimization",
                "Push notifications & analytics",
              ],
            },
            {
              title: "SaaS Platforms",
              img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
              points: [
                "Multi-tenant architecture",
                "Cloud deployment & scaling",
                "User management & billing",
                "API-first design",
              ],
            },
            {
              title: "Enterprise Software",
              img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
              points: [
                "Custom business solutions",
                "Legacy system modernization",
                "Integration services",
                "Data migration & management",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 bg-white"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION (3D ICONS) */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600">
            Modern stack • Proven frameworks • Best practices
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 place-items-center">
            {[
              {
                name: "React",
                category: "Frontend",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Next.js",
                category: "Framework",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Node.js",
                category: "Backend",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Python",
                category: "Language",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "AWS",
                category: "Cloud",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
              },
              {
                name: "Docker",
                category: "DevOps",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
                name: "MongoDB",
                category: "Database",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "TypeScript",
                category: "Language",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                name: "Kubernetes",
                category: "Container Orchestration",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
              },
              {
                name: "GitHub",
                category: "Version Control",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  rotateX: 8,
                  rotateY: -6,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="relative group">
                  <motion.img
                    src={tech.img}
                    alt={tech.name}
                    className="w-20 h-20 drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating ambient lights */}
        <motion.div
          className="absolute -top-40 -left-32 w-[40rem] h-[40rem] bg-[#1acb97]/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-[50rem] h-[50rem] bg-emerald-300/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              Why Choose Our Development Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Expert Software Development
              <br />
              Solutions You Can Trust
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                desc: "Build scalable web applications using modern frameworks like React, Next.js, and Vue.js with responsive design and optimal performance.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                ),
              },
              {
                title: "Mobile App Development",
                desc: "Create native iOS and Android apps or cross-platform solutions using React Native and Flutter for maximum reach and performance.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                ),
              },
              {
                title: "SaaS Platform Development",
                desc: "Build multi-tenant SaaS platforms with cloud deployment, user management, billing systems, and API-first architecture.",
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
                title: "Enterprise Software",
                desc: "Develop custom enterprise solutions, modernize legacy systems, and provide seamless integration services for business growth.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "API Development",
                desc: "Create robust RESTful APIs and microservices architecture with proper documentation, authentication, and scalability.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                ),
              },
              {
                title: "DevOps & Deployment",
                desc: "Implement CI/CD pipelines, containerization with Docker, cloud deployment on AWS/Azure, and automated testing frameworks.",
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
            Ready to Build Your Next Software Solution?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-xl text-white/90 mb-8"
          >
            Transform your ideas into powerful software solutions with our
            expert development team.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-[#1acb97] font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-500">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1acb97] transition-all duration-500">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
