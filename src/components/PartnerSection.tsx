"use client";

export default function PartnerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Main Container */}
        <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 max-w-6xl w-full relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-gray-600"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#1acb97]">Partner</span>
              <span className="text-white"> with Taskex</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our wide network of partners built to help you scale, explore new markets, 
              and deliver greater value for your clients. Explore partnerships now!
            </p>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-[#1acb97] to-emerald-600 hover:from-emerald-500 hover:to-[#1acb97] text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Become a partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
