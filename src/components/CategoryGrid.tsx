'use client';

import { FaCode, FaChartLine, FaParachuteBox, FaArrowRight } from 'react-icons/fa6';
import { RiNftFill } from "react-icons/ri";

const categories = [
    {
        icon: FaChartLine,
        name: 'Trading & Signals',
        description: 'Master the markets with real-time insights and expert signals.',
    },
    {
        icon: FaParachuteBox,
        name: 'Airdrop Hunters',
        description: 'Find the next big opportunity before anyone else.',
    },
    {
        icon: RiNftFill,
        name: 'NFT',
        description: 'Collect, trade, and explore unique digital assets.',
    },
    {
        icon: FaCode,
        name: 'Developers',
        description: 'Build the future of Web3 with our developer community.',
    },
];

export default function CategoryGrid() {
    return (
        <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-fill-color mb-4">
                    Explore Communities
                </h2>
                <p className="text-lg text-fill-color/60 max-w-2xl mx-auto">
                    Join the most active groups in the crypto space.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`group relative cursor-pointer overflow-hidden rounded-3xl p-8 border border-[rgba(var(--fill-color-rgb),0.05)] bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 shadow-xl`}
                    >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <div className={`text-4xl text-blue-400 mb-6`}>
                                <cat.icon />
                            </div>

                            <h3 className="text-2xl font-bold text-fill-color mb-3">
                                {cat.name}
                            </h3>

                            <p className="text-fill-color/70 mb-8 leading-relaxed text-sm flex-grow">
                                {cat.description}
                            </p>

                            <div>
                                <button className={`flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-xl bg-[rgba(var(--fill-color-rgb),0.05)] border border-[rgba(var(--fill-color-rgb),0.1)] text-fill-color font-semibold text-sm transition-all hover:bg-blue-500/20 group-hover:border-[rgba(var(--fill-color-rgb),0.2)]`}>
                                    Explore
                                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        {/* Direct Icon Watermark */}
                        <div className={`absolute -bottom-8 -right-8 text-9xl text-fill-color opacity-[0.03] transform rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            <cat.icon />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}