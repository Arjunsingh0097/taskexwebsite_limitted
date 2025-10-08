"use client";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Text and Button */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block bg-[#1acb97] text-white text-xs font-semibold px-4 py-2 rounded-lg uppercase tracking-wide">
                  How it works
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Payroll made easy,
                <br />
                teams made happy
              </h2>

              {/* Body Text */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                We do more than just payroll and compliance. With Taskex, your workforce gets real support, 
                ensuring satisfaction, retention, and long-term success.
              </p>

              {/* Button */}
              <button className="bg-[#1acb97] hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-fit">
                Book a demo
              </button>
            </div>

            {/* Right Column - Image and Data Overlay */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-full min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Payroll and financial management"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 opacity-30"></div>
                
                {/* Data Overlay Card */}
                <div className="absolute top-8 right-8 bg-[#1acb97] rounded-xl p-6 shadow-lg">
                  {/* Chart */}
                  <div className="mb-4">
                    <svg width="120" height="60" viewBox="0 0 120 60" className="text-white">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        points="10,50 30,35 50,25 70,20 90,15 110,10"
                      />
                      <circle cx="10" cy="50" r="2" fill="currentColor" />
                      <circle cx="30" cy="35" r="2" fill="currentColor" />
                      <circle cx="50" cy="25" r="2" fill="currentColor" />
                      <circle cx="70" cy="20" r="2" fill="currentColor" />
                      <circle cx="90" cy="15" r="2" fill="currentColor" />
                      <circle cx="110" cy="10" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wide mb-1">Total Payroll</p>
                    <p className="text-xl font-bold">590,397.49 EUR</p>
                  </div>
                </div>

                {/* Card in Hand (Simulated) */}
                <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#1acb97] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <div className="flex-1">
                      <div className="w-16 h-2 bg-[#1acb97] rounded mb-2"></div>
                      <div className="w-12 h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
