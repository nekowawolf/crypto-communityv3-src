'use client';

export default function StatsSection() {
    return (
        <section className="py-12 border-y border-[var(--border-color)] card-color2">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                <div>
                    <div className="text-4xl md:text-5xl font-black text-fill-color mb-2">1.2k+</div>
                    <div className="text-sm text-fill-color/60 uppercase tracking-widest font-semibold">Communities</div>
                </div>

                <div>
                    <div className="text-4xl md:text-5xl font-black text-fill-color mb-2">50k+</div>
                    <div className="text-sm text-fill-color/60 uppercase tracking-widest font-semibold">Daily Users</div>
                </div>

                <div>
                    <div className="text-4xl md:text-5xl font-black text-fill-color mb-2">15</div>
                    <div className="text-sm text-fill-color/60 uppercase tracking-widest font-semibold">Categories</div>
                </div>

                <div>
                    <div className="text-4xl md:text-5xl font-black text-fill-color mb-2">99%</div>
                    <div className="text-sm text-fill-color/60 uppercase tracking-widest font-semibold">Uptime</div>
                </div>

            </div>
        </section>
    );
}