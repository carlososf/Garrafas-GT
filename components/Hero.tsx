'use client';

import { useEffect, useRef } from 'react';
import { getImagePath } from '@/lib/utils';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative flex items-center justify-center overflow-hidden py-4">
            {/* Animated Background */}
            <div
                ref={heroRef}
                className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700"
            >
                {/* Animated circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content - Two Column Layout */}
            <div className="relative z-10 section-container w-full">
                {/* LOGO GRANDE CENTRALIZADA - Fixa, sem animações */}
                <div className="flex justify-center mb-6 mt-2">
                    <div
                        className="relative animate-fade-in-up"
                        style={{
                            width: 'var(--logo-hero-width)',
                            height: 'var(--logo-hero-height)'
                        }}
                    >
                        <img
                            src={getImagePath('/logo-white.png')}
                            alt="Plásticos GT - Qualidade que molda o futuro"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT COLUMN - Text Content */}
                    <div className="space-y-4 text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 glass-dark px-6 py-3 rounded-full animate-fade-in-up">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">Ferramentaria Própria • Projetos Customizados</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up font-display" style={{ animationDelay: '0.2s' }}>
                            Soluções em Embalagens Sopradas
                            <br />
                            <span className="text-green-200">Qualidade que Molda o Futuro</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl text-green-50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Frascos e potes plásticos de alta performance para cosméticos, alimentos, higiene e limpeza.
                            Desenvolvemos projetos sob medida com nossa ferramentaria própria.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <a
                                href="#catalogo"
                                className="btn-primary bg-white text-primary-600 hover:bg-gray-50 w-full sm:w-auto"
                            >
                                <span className="relative z-10">Explorar Catálogo</span>
                            </a>
                            <a
                                href="#configurador"
                                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 hover:shadow-xl active:scale-95 w-full sm:w-auto text-center"
                            >
                                Configurar Projeto Especial
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - 3D Bottle GIF + Stats Below */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {/* Bottle GIF - Moved up slightly */}
                        <div className="relative w-full h-[450px] flex items-center justify-center -mt-12">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={getImagePath('/bottle-3d.gif')}
                                    alt="Garrafa PET 3D - Plásticos GT"
                                    className="w-full h-full object-contain animate-float"
                                    onError={(e) => {
                                        // Fallback if GIF not found
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                        <div class="text-center p-12">
                          <div class="text-9xl mb-6 animate-float">🍾</div>
                          <p class="text-white text-2xl font-semibold mb-2">Garrafa PET 3D</p>
                          <p class="text-green-200">Adicione seu GIF em: /public/bottle-3d.gif</p>
                        </div>
                      `;
                                        }
                                    }}
                                />
                            </div>

                            {/* Decorative elements around the bottle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-300 opacity-10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Stats - Below Bottle with Float Animation */}
                        <div className="grid grid-cols-2 gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            {[
                                { value: '25+', label: 'Anos de Experiência', delay: '0s' },
                                { value: '500+', label: 'Projetos Entregues', delay: '0.2s' },
                                { value: '100%', label: 'Ferramentaria Própria', delay: '0.4s' },
                                { value: '24h', label: 'Atendimento Ágil', delay: '0.6s' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animate-float"
                                    style={{ animationDelay: stat.delay }}
                                >
                                    <div className="text-4xl font-bold text-white font-display">{stat.value}</div>
                                    <div className="text-green-200 text-sm mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <a href="#catalogo" className="flex flex-col items-center text-white hover:text-green-200 transition-colors duration-300">
                    <span className="text-sm mb-2">Descubra mais</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
