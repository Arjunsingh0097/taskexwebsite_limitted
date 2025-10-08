"use client";

export default function StatsRow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              280+
            </div>
            <div className="text-lg text-gray-600">
              Employees Worldwide
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              85+
            </div>
            <div className="text-lg text-gray-600">
              Countries Served
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              €6.275M
            </div>
            <div className="text-lg text-gray-600">
              Investment Raised
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              1000+
            </div>
            <div className="text-lg text-gray-600">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
