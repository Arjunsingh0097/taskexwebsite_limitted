"use client";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
            Why Businesses Choose Us
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            The Complete Business Solutions
            <br />
            Partner You Can Trust
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Software Development",
              desc: "Custom software solutions, SaaS platforms, and web applications built with cutting-edge technologies to drive your business forward.",
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
              title: "Data Analytics & Insights",
              desc: "Transform your data into actionable insights with advanced analytics, business intelligence, and data-driven strategies for growth.",
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
              title: "Payroll & HR Services",
              desc: "Comprehensive payroll management, HR solutions, and compliance services that streamline your workforce operations.",
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
              title: "Digital Marketing & PPC",
              desc: "Boost your online presence with data-driven marketing strategies, targeted PPC campaigns, and SEO optimization.",
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
              title: "Contractual Tech Work",
              desc: "Flexible engagement models for tech projects. Get expert developers and specialists on-demand to accelerate your initiatives.",
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
              title: "Business Process Services",
              desc: "Streamline operations with process optimization, automation solutions, and workflow improvements that increase efficiency.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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
  );
}
