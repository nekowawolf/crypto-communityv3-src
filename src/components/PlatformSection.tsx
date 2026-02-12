'use client';

import Marquee from 'react-fast-marquee';
import {
    FaReddit,
    FaTelegram,
    FaFacebook,
    FaDiscord
} from "react-icons/fa6";
import { FadeIn } from "./ui/fade-in";

type PlatformItem =
    | {
        type: 'icon';
        name: string;
        icon: any;
        color: string;
    }
    | {
        type: 'empty';
    };

const platforms: PlatformItem[] = [
    { type: 'icon', name: 'Discord', icon: FaDiscord, color: 'text-[#5865F2]' },
    { type: 'empty' },

    { type: 'icon', name: 'Telegram', icon: FaTelegram, color: 'text-[#24A1DE]' },
    { type: 'empty' },
    { type: 'empty' },

    { type: 'icon', name: 'Reddit', icon: FaReddit, color: 'text-[#FF4500]' },
    { type: 'empty' },

    { type: 'icon', name: 'Facebook', icon: FaFacebook, color: 'text-[#1877F2]' },
    { type: 'empty' },
    { type: 'empty' },
];

export default function PlatformMarquee() {
    return (
        <section className="py-24 relative overflow-hidden body-color">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
                <FadeIn>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-fill-color mb-4">
                        The Social <span className="text-blue-400">Ecosystem</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-base sm:text-lg text-fill-color/60 max-w-2xl mx-auto leading-relaxed">
                        Our directory is powered by the giants of the internet. We manually verify and index the most influential crypto communities from these leading platforms.
                    </p>
                </FadeIn>
            </div>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-950/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-950/90 to-transparent z-20 pointer-events-none" />

                <Marquee gradient={false} speed={35} pauseOnHover className="py-10">
                    {platforms.map((item, idx) => (
                        <div key={idx} className="mx-6">

                            {/* ICON CARD */}
                            {item.type === 'icon' ? (
                                <div className="group relative">
                                    <div className="relative w-40 h-40 rounded-2xl p-[1.5px] bg-gradient-to-b from-blue-500 to-transparent transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                                        <div className="w-full h-full rounded-2xl card-color2 flex flex-col items-center justify-center relative overflow-hidden">

                                            <item.icon
                                                className={`text-6xl transition-all duration-500
                                                            dark:text-fill-color
                                                            grayscale
                                                            group-hover:grayscale-0
                                                            group-hover:scale-110
                                                            group-hover:-translate-y-2
                                                            group-hover:text-fill-color
                                                ${item.color}`}
                                            />

                                            <span className="absolute bottom-4 text-sm font-bold text-fill-color opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-40 h-40 rounded-2xl p-[1.5px] bg-gradient-to-b from-blue-500 to-transparent">
                                    <div className="w-full h-full rounded-2xl card-color2" />
                                </div>
                            )}

                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}