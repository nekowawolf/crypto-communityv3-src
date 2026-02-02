'use client';

import { FaCode, FaChartLine, FaParachuteBox, FaGamepad, FaRobot, FaUsers } from 'react-icons/fa6';

const categories = [
    {
        icon: <FaChartLine />,
        name: 'Trading & Signals',
        count: '120+',
        color: 'from-green-500/20 to-emerald-500/20',
        text: 'text-green-400',
    },
    {
        icon: <FaParachuteBox />,
        name: 'Airdrop Hunters',
        count: '85+',
        color: 'from-blue-500/20 to-cyan-500/20',
        text: 'text-blue-400',
    },
    {
        icon: <FaCode />,
        name: 'Developers',
        count: '200+',
        color: 'from-purple-500/20 to-indigo-500/20',
        text: 'text-purple-400',
    },
    {
        icon: <FaGamepad />,
        name: 'GameFi / NFT',
        count: '60+',
        color: 'from-pink-500/20 to-rose-500/20',
        text: 'text-pink-400',
    },
    {
        icon: <FaRobot />,
        name: 'Bot & Tools',
        count: '40+',
        color: 'from-orange-500/20 to-red-500/20',
        text: 'text-orange-400',
    },
    {
        icon: <FaUsers />,
        name: 'General Chat',
        count: '300+',
        color: 'from-gray-500/20 to-slate-500/20',
        text: 'text-gray-300',
    },
];

export default function CategoryGrid() {
    return (
        <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-fill-color mb-2">
                        Browse by Category
                    </h2>
                    <p className="text-fill-color/60">
                        Find the specific niche that fits your interests.
                    </p>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                    View All Categories &rarr;
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((cat, idx) => (
                    <a
                        key={idx}
                        href="#"
                        className="group relative p-6 rounded-2xl card-color2 border border-color hover:border-color transition-all hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="relative z-10 flex flex-col items-center text-center gap-3">
                            <div className={`text-3xl ${cat.text} mb-2 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-fill-color text-sm sm:text-base">
                                {cat.name}
                            </h3>
                            <span className="text-xs text-fill-color/60 bg-black/20 px-2 py-1 rounded-full">
                                {cat.count} Groups
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}