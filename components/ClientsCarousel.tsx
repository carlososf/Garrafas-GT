'use client';

import { useState, useEffect } from 'react';

export default function ClientsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logos dos clientes (você pode substituir por logos reais)
    const clients = [
        { name: 'Cliente 1', logo: '/images/clients/client-1.png' },
        { name: 'Cliente 2', logo: '/images/clients/client-2.png' },
        { name: 'Cliente 3', logo: '/images/clients/client-3.png' },
        { name: 'Cliente 4', logo: '/images/clients/client-4.png' },
        { name: 'Cliente 5', logo: '/images/clients/client-5.png' },
        { name: 'Cliente 6', logo: '/images/clients/client-6.png' },
        { name: 'Cliente 7', logo: '/images/clients/client-7.png' },
        { name: 'Cliente 8', logo: '/images/clients/client-8.png' },
    ];

    // Auto-play do carrossel (sempre ativo)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % clients.length);
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval);
    }, [clients.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % clients.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Calcula quais logos mostrar (3 por vez em desktop, 1 em mobile)
    const getVisibleClients = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(clients[(currentIndex + i) % clients.length]);
        }
        return visible;
    };

    return (
        <section className="section-container bg-gradient-to-br from-gray-50 to-white">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    Nossos Clientes
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                    Empresas que <span className="gradient-text">Confiam</span> em Nós
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Parceiros de sucesso que escolheram a Plásticos GT para suas soluções em embalagens.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Carrossel */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl p-8">
                    {/* Logos visíveis */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {getVisibleClients().map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="flex items-center justify-center p-6 glass rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        // Placeholder SVG se a imagem não carregar
                                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80'%3E%3Crect fill='%23e5e7eb' width='200' height='80' rx='8'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${client.name}%3C/text%3E%3C/svg%3E`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botões de Navegação */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Cliente anterior"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Próximo cliente"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center gap-2 mt-8">
                    {clients.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary-500 w-8' : 'bg-gray-300 w-2 hover:bg-primary-300'
                                }`}
                            aria-label={`Ir para cliente ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
