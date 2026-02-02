'use client';

import { FaShieldHalved, FaBolt } from 'react-icons/fa6';

export default function WhyUs() {
    return (
        <section className="py-24 body-color relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

                <div className="space-y-8">
                    <h2 className="text-4xl sm:text-5xl font-black text-fill-color leading-tight">
                        Curated Quality. <br />
                        <span className="text-blue-500">Zero Scam Links.</span>
                    </h2>
                    <p className="text-fill-color/60 text-lg leading-relaxed">
                        We manually verify every community link submitted to our directory.
                        Nww isn't just a list; it's a gateway to safe, high-value crypto interactions.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl shrink-0">
                                <FaShieldHalved />
                            </div>
                            <div>
                                <h4 className="text-fill-color font-bold text-lg">Verified Safety</h4>
                                <p className="text-fill-color/60 text-sm">Every Discord and Telegram link is checked for authenticity.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl shrink-0">
                                <FaBolt />
                            </div>
                            <div>
                                <h4 className="text-fill-color font-bold text-lg">Real-Time Updates</h4>
                                <p className="text-fill-color/60 text-sm">Dead links are purged weekly. Always fresh.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20" />
                    <div className="relative card-color2 border border-[var(--border-color)] rounded-3xl p-8 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6 border-b border-[var(--border-color)] pb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
                                <div className="h-3 w-20 bg-gray-800 rounded animate-pulse" />
                            </div>
                            <div className="ml-auto px-3 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded-full">
                                VERIFIED
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 w-full bg-gray-800 rounded animate-pulse" />
                            <div className="h-3 w-5/6 bg-gray-800 rounded animate-pulse" />
                        </div>
                        <div className="mt-8 flex gap-3">
                            <div className="h-10 w-full bg-blue-600/20 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}