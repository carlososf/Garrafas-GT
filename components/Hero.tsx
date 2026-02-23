'use client';

import { useEffect, useRef } from 'react';
import { getImagePath } from '@/lib/utils';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/5 -skew-x-12 transform origin-top-right hidden lg:block"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT CONTENT: MASSIVE TYPOGRAPHY */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                            <span className="w-12 h-[1px] bg-primary-500"></span>
                            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs">
                                Industrial Excellence Since 2013
                            </span>
                        </div>

                        <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.85] mb-8 animate-slide-up">
                            Qualidade <br />
                            <span className="text-primary-500">que molda</span> <br />
                            o futuro.
                        </h1>

                        <p className="max-w-xl text-lg text-gray-600 mb-12 animate-slide-up [animation-delay:200ms]">
                            Soluções premium em embalagens plásticas personalizadas.
                            Engenharia de precisão com ferramentaria própria para resultados excepcionais.
                        </p>

                        <div className="flex flex-wrap gap-6 animate-slide-up [animation-delay:400ms]">
                            <a href="#catalogo" className="group relative px-10 py-5 bg-primary-500 text-white font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,160,78,0.3)]">
                                <span className="relative z-10">Explorar Portfólio</span>
                                <div className="absolute inset-0 bg-primary-600 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                            </a>

                            <a href="#configurador" className="group flex items-center gap-4 px-6 py-5 font-bold uppercase tracking-wider text-black transition-colors hover:text-primary-600">
                                <span>Configurar Projeto</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover:translateX-2">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: OVERLAPPING IMAGE */}
                    <div className="lg:col-span-4 relative mt-12 lg:mt-0">
                        <div className="relative z-20 transform lg:-translate-x-20 animate-float">
                            <img
                                src={getImagePath('/garrafas flutuando.png')}
                                alt="Garrafas Plásticas GT"
                                className="w-full max-w-[500px] mx-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) parent.innerHTML = '<div class="text-[10rem] opacity-20">GT</div>';
                                }}
                            />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl shadow-2xl animate-slide-up [animation-delay:600ms] hidden xl:block">
                            <div className="text-4xl font-black text-primary-500">500+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-gray-500 mt-1">Projetos Ativos</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>

            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-100 rounded-full blur-[120px] opacity-50 -z-10 animate-pulse"></div>
        </section>
    );
}
