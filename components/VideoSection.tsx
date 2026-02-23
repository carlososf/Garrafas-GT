'use client';

import { getImagePath } from '@/lib/utils';

export default function VideoSection() {
    return (
        <section className="bg-white py-[var(--section-padding)] overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: TEXT */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
                            Process & Power
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-black uppercase mb-12">
                            Tecnologia <br />
                            <span className="text-gray-300">em</span> <br />
                            movimento.
                        </h2>

                        <div className="space-y-12">
                            {[
                                { label: 'Capacidade', value: '5.000m²', desc: 'Infraestrutura robusta preparada para alta demanda.' },
                                { label: 'Modernização', value: '20+ Equipamentos', desc: 'Maquinário de última geração para sopro e injeção.' }
                            ].map((stat, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="text-4xl font-black text-gray-100 transition-colors group-hover:text-primary-500">0{i + 1}</div>
                                    <div>
                                        <div className="text-2xl font-black uppercase mb-2">{stat.value}</div>
                                        <p className="text-gray-400 text-sm">{stat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: VIDEO BOX */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative group p-4 border border-gray-100 transition-all duration-500 hover:border-black">
                            <div className="relative aspect-video overflow-hidden">
                                <video
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster={getImagePath('/video-thumbnail.jpg')}
                                >
                                    <source src={getImagePath('/company-video.mp4')} type="video/mp4" />
                                    <source src={getImagePath('/company-video.webm')} type="video/webm" />
                                </video>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            {/* Floating decorative label */}
                            <div className="absolute -bottom-6 -right-6 bg-black text-white px-8 py-4 font-black uppercase tracking-widest text-[10px] hidden md:block group-hover:bg-primary-500 transition-colors">
                                Factory Experience
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
