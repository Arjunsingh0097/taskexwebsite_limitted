"use client";

export default function ReviewSummary() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Left Section - Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Average Rating Score */}
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              4.9
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Total Reviews Count */}
            <div className="text-gray-600 text-sm">
              226 reviews
            </div>
          </div>
          
          {/* Right Section - Call to Action Button */}
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto">
            Write a review
          </button>
        </div>
      </div>
    </section>
  );
}
