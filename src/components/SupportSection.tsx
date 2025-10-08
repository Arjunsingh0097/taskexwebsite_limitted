"use client";

export default function SupportSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Text and Features */}
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert support,
              <br />
              every step of the way
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              IT challenges and business complexities don&apos;t follow a 9–5
              schedule—so neither do we. We&apos;re your trusted partner across all
              industries, ensuring smooth operations and competitive growth.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 pb-6 border-b border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Expert customer support</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Get help whenever you need it, no matter the time zone or complexity.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 pb-6 border-b border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Dedicated account managers</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">A single point of contact to simplify your IT, payroll, and compliance needs.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 pb-6 border-b border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.7 1.7 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.7 1.7 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.7 1.7 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.7 1.7 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.7 1.7 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.7 1.7 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.7 1.7 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Customizable solutions</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Tailored IT services, software development, and business process solutions that adapt to your specific needs.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Onboarding assistance</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We guide you through software implementation, data migration, and digital transformation processes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Professional Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Expert IT professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
