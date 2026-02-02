'use client';

import Marquee from 'react-fast-marquee';

const logos = [
    "https://nekowawolf.github.io/cdn-images/images/2025/1766365966_1000171132.jpg",
    "https://pbs.twimg.com/profile_images/1778637424190758912/z3x3cB3p_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1696873767581126656/df4GPpGG_400x400.jpg",
    "https://s3.coinmarketcap.com/static-gravity/image/607814caeaad41f0b919741f301fe16d.jpg",
    "https://pbs.twimg.com/profile_images/1443986341822222336/Tgnsjakb_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1742101769768071168/x4C2HTGK_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1743641710012620800/vZLOztOe_400x400.jpg",
    "https://cdn.discordapp.com/icons/735965332958871634/a_28df0b0cef8ca1217b215760c73f7d5c.webp?size=240",
    "https://nekowawolf.github.io/delete-later/assets/img/bgpt1.jpg",
    "https://nekowawolf.github.io/delete-later/assets/img/cryptosiastdrops.jpg",
    "https://pbs.twimg.com/profile_images/1962850507543941120/frmya92d_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1591495085597675520/ioKu3D4h_400x400.jpg",
    "https://nekowawolf.github.io/delete-later/assets/img/pgs1.jpg",
    "https://pbs.twimg.com/profile_images/1814270182229172224/7q0IyrN7_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1957325119803817984/U66MLH_D_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1455562483649826820/0afrWxQd_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1962850507543941120/frmya92d_400x400.jpg",
    "https://nekowawolf.github.io/delete-later/assets/img/bu21.jpg",
    "https://nekowawolf.github.io/delete-later/assets/img/evo.jpg",
    "https://cdn.discordapp.com/icons/554623348622098432/4c40c98732eaf6d6c7947ac1d8c1921f.webp?size=240"
];

export default function LogoMarquee() {
    return (
        <section className="py-12 card-color2 border-t border-b border-color">
            <div className="max-w-7xl mx-auto px-10">

                <Marquee
                    gradient={false}
                    speed={30}
                    pauseOnHover={true}
                    className="px-0"
                >
                    <div className="flex items-center gap-6 px-3">
                        {logos.map((logo, idx) => (
                            <a
                                key={idx}
                                className="block w-16 h-16 rounded-md overflow-hidden border border-color transform transition-transform"
                            >
                                <img
                                    src={logo}
                                    alt={`Community ${idx}`}
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </a>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}