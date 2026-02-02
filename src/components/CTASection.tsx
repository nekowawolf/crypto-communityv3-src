'use client';

import { FaPlus } from 'react-icons/fa6';

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-20 text-center shadow-2xl border border-blue-500/20">
          <h2 className="text-2xl sm:text-5xl font-bold text-white mb-5">
            Manage a Crypto Community?
          </h2>

          <p className="text-blue-100 text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
            Get listed on NWW Directory and reach thousands of daily users looking for their next home. It's free and takes less than 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-5 py-3 sm:px-8 sm:py-4 bg-white text-blue-900 font-bold text-sm sm:text-lg rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
              <FaPlus className="text-xs sm:text-sm" />
              Submit Your Community
            </button>

            <button className="px-5 py-3 sm:px-8 sm:py-4 bg-transparent border border-white/30 text-white font-bold text-sm sm:text-lg rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}