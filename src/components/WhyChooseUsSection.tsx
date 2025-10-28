"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-emerald-200/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-teal-200/40 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 mt-8 sm:mt-0">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <span className="inline-block bg-[#1acb97]/10 text-[#1acb97] text-xs sm:text-sm font-semibold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full uppercase tracking-wide mb-3 sm:mb-4">
            Why Choose Taskex
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight px-2 sm:px-0">
            We Don&apos;t Just Deliver —{" "}
            <span className="bg-gradient-to-r from-[#1acb97] to-emerald-600 bg-clip-text text-transparent">
              We Transform.
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Choosing Taskex means choosing precision, security, and long-term
            reliability. We bring expertise and innovation to every project we
            touch.
          </p>
        </div>

        {/* Main Grid — Symmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
          {/* Left Column - Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[800px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/beautifulimage.jpg"
                alt="Taskex Team Collaboration"
                width={800}
                height={450}
                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[650px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1acb97] mb-0.5 sm:mb-1">500+</p>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Projects Delivered
                </p>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1acb97] mb-0.5 sm:mb-1">99%</p>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-10 pt-0 lg:pt-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Why Clients Love Working with Us
            </h3>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
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
                <div
                  key={i}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1acb97] to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 sm:pt-4 lg:pt-10">
              <div className="bg-gradient-to-r from-[#1acb97] to-emerald-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-5 lg:p-10 text-white shadow-xl text-center">
                <h4 className="text-base sm:text-lg md:text-2xl font-bold mb-1 sm:mb-2 lg:mb-4">
                  Experience the Taskex Advantage
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-4 lg:mb-8 max-w-xl mx-auto">
                  Join 500+ businesses that scale faster and smarter with our
                  expert-driven development and 24/7 global support.
                </p>
                <div className="flex justify-center">
                  <Link href="/get-in-touch">
                    <button className="bg-white text-[#1acb97] font-semibold py-2 sm:py-2.5 lg:py-3 px-5 sm:px-6 lg:px-8 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base">
                      Start Your Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
