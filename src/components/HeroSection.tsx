'use client';

import { FaTelegram, FaMagnifyingGlass, FaFacebook, FaReddit } from 'react-icons/fa6';
import { BsDiscord } from "react-icons/bs";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 px-6 sm:px-10 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
            {/* Abstract Background Network */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-700" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">

                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    The #1 Crypto Directory
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-fill-color leading-[0.9]">
                    Connect with the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Crypto Elite
                    </span>
                </h1>

                <p className="text-lg sm:text-2xl text-fill-color/60 max-w-2xl mx-auto font-light">
                    Your central hub for exclusive <span className="text-fill-color font-medium">Trading Groups</span>, <span className="text-fill-color font-medium">Dev Channels</span>, and <span className="text-fill-color font-medium">Airdrop Hunters</span>.
                </p>

                {/* Search Mockup */}
                <div className="max-w-xl mx-auto mt-10 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative flex items-center card-color2 rounded-xl border border-color p-2 shadow-2xl">
                        <FaMagnifyingGlass className="text-gray-500 ml-4 text-xl" />
                        <input
                            type="text"
                            placeholder="Find communities (e.g. 'Solana Devs', 'NFT Alpha')..."
                            className="w-full bg-transparent text-fill-color px-4 py-3 focus:outline-none placeholder-gray-500 h-full"
                        />
                        <button className="hidden sm:block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>

                {/* Social Proof Icons */}
                <div className="pt-12 flex items-center justify-center gap-6 text-gray-500">
                    <span className="text-sm font-semibold uppercase tracking-widest mr-4">Trusted Networks only</span>
                    <BsDiscord className="text-3xl hover:text-[#5865F2] transition-colors" />
                    <FaTelegram className="text-3xl hover:text-[#24A1DE] transition-colors" />
                    <FaFacebook className="text-3xl hover:text-[#24A1DE] transition-colors" />
                    <FaReddit className="text-3xl hover:text-[#24A1DE] transition-colors" />
                </div>

            </div>
        </section>
    );
}