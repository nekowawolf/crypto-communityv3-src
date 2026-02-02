'use client';

import { FaTelegram, FaMagnifyingGlass, FaFacebook, FaReddit } from 'react-icons/fa6';
import { BsDiscord } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-6 sm:px-10 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
      {/* Grid */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-blue-500/50"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* BADGE */}
      <div className="absolute mb-2 relative z-10 text-center max-w-5xl mx-auto space-y-10">
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
          <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-blue-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
          <span>120+ Communities</span>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10">
        {/* Headline */}
        <div className="relative inline-block">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[650px] h-[420px] rounded-full bg-blue-500/20 blur-[130px] animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-fill-color leading-tight">
            Discover Trusted <br />
            <span className="text-blue-400">Crypto Communities</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-fill-color/70 max-w-xl mx-auto font-normal">
            Explore curated{' '}
            <span className="text-blue-400 font-medium">trading groups</span>,{' '}
            <span className="text-blue-400 font-medium">developer hubs</span>,{' '}
            <span className="text-blue-400 font-medium">airdrop communities</span>, and{' '}
            <span className="text-blue-400 font-medium">NFT communities</span> — all in one place.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mt-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

          <div className="relative flex items-center card-color2 rounded-xl border border-color p-2 shadow-2xl">
            <FaMagnifyingGlass className="text-gray-500 ml-4 text-xl" />

            <input
              type="text"
              placeholder="Search trading, NFT, or developer communities..."
              className="w-full bg-transparent text-fill-color px-4 py-3 focus:outline-none placeholder-gray-500"
            />

            <button className="bg-blue-500 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
              Explore
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-500">
          <span className="text-xs font-semibold uppercase tracking-widest mr-0 sm:mr-3">
            Trusted Networks only
          </span>
          <div className="flex gap-3">
            <BsDiscord className="text-lg sm:text-xl hover:text-[#5865F2] transition-colors cursor-pointer" />
            <FaTelegram className="text-lg sm:text-xl hover:text-[#24A1DE] transition-colors cursor-pointer" />
            <FaFacebook className="text-lg sm:text-xl hover:text-[#1877F2] transition-colors cursor-pointer" />
            <FaReddit className="text-lg sm:text-xl hover:text-[#FF4500] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}