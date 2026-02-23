'use client';

import { useState, useEffect } from 'react';
import { getImagePath } from '@/lib/utils';

export default function Institutional() {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    // Fotos da empresa (você pode substituir por fotos reais)
    const companyPhotos = [
        { url: getImagePath('/images/fabrica-1.jpg'), alt: 'Fábrica Plásticos GT - Vista Externa' },
        { url: getImagePath('/images/fabrica-2.jpg'), alt: 'Ferramentaria' },
        { url: getImagePath('/images/fabrica-3.jpg'), alt: 'Linha de Produção' },
        { url: getImagePath('/images/fabrica-4.jpg'), alt: 'Equipe Técnica' },
    ];

    const timeline = [
        {
            year: '2013',
            title: 'Fundação',
            description: 'Início das atividades com foco em qualidade e inovação.',
        },
        {
            year: '2018',
            title: 'Expansão',
            description: 'Ampliação da linha de produtos e modernização da fábrica.',
        },
        {
            year: '2024',
            title: 'Liderança',
            description: 'Referência em soluções personalizadas e sustentáveis.',
        },
    ];

    // Auto-play do carrossel (sempre ativo)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % companyPhotos.length);
        }, 4000); // Muda a cada 4 segundos

        return () => clearInterval(interval);
    }, [companyPhotos.length]);

    const nextPhoto = () => {
        setCurrentPhoto((prev) => (prev + 1) % companyPhotos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((prev) => (prev - 1 + companyPhotos.length) % companyPhotos.length);
    };

    return (
        <section id="institucional" className="section-container bg-gray-50">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    Sobre Nós
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                    Tradição e <span className="gradient-text">Inovação</span> em Embalagens Plásticas
                </h2>
            </div>

            {/* Carrossel de Fotos - GRANDE */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="glass rounded-3xl p-8 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossa Estrutura</h3>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        {/* Imagem - BEM MAIOR */}
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-200 relative">
                            <img
                                src={companyPhotos[currentPhoto].url}
                                alt={companyPhotos[currentPhoto].alt}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%2300a04e" width="800" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EFoto da Empresa%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>

                        {/* Botões de Navegação - GRANDES */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextPhoto}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicadores - GRANDES */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                            {companyPhotos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPhoto(index)}
                                    className={`h-4 rounded-full transition-all duration-300 ${currentPhoto === index ? 'bg-white w-12' : 'bg-white/60 w-4 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mt-6 text-center font-semibold">{companyPhotos[currentPhoto].alt}</p>
                </div>
            </div>

            {/* Missão, Visão, Valores - HORIZONTAL */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Missão */}
                <div className="glass-green rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                        <span className="text-4xl mr-3">🎯</span>
                        Nossa Missão
                    </h3>
                    <p className="text-gray-700 text-center">
                        Fornecer soluções em embalagens plásticas de alta qualidade, desenvolvidas com
                        tecnologia de ponta e atendimento personalizado, superando as expectativas de
                        nossos clientes e contribuindo para o sucesso de seus negócios.
                    </p>
                </div>

                {/* Visão */}
                <div className="glass-green rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                        <span className="text-4xl mr-3">🔭</span>
                        Nossa Visão
                    </h3>
                    <p className="text-gray-700 text-center">
                        Ser referência nacional em embalagens plásticas personalizadas, reconhecida pela
                        excelência técnica, inovação constante e compromisso com a sustentabilidade,
                        consolidando parcerias duradouras com nossos clientes.
                    </p>
                </div>

                {/* Valores */}
                <div className="glass-green rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                        <span className="text-4xl mr-3">💎</span>
                        Nossos Valores
                    </h3>
                    <ul className="space-y-2">
                        {[
                            'Qualidade sem compromissos',
                            'Inovação e tecnologia',
                            'Sustentabilidade ambiental',
                            'Ética e transparência',
                            'Foco no cliente',
                            'Melhoria contínua',
                        ].map((value, index) => (
                            <li key={index} className="flex items-center text-gray-700 justify-center">
                                <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Timeline - EDITORIAL NARRATIVE */}
            <div className="max-w-6xl mx-auto py-20 relative">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                        Nossa <span className="gradient-text">Jornada</span>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Uma história moldada por desafios, inovação e o compromisso inabalável com a excelência técnica.
                    </p>
                </div>

                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[60%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {/* 2013 - Fundação */}
                    <div className="group">
                        <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg aspect-video">
                            <img
                                src={getImagePath('/images/fabrica-1.jpg')}
                                alt="Fundação 2013"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-4xl font-bold text-white font-display">2013</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">O Início de um Sonho</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fundada em São Paulo, a Plásticos GT iniciou suas atividades com a visão de oferecer embalagens
                                superiores em PEAD e PP, focando inicialmente no mercado regional de cosméticos.
                            </p>
                        </div>
                    </div>

                    {/* 2018 - Expansão */}
                    <div className="group md:mt-12">
                        <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg aspect-video">
                            <img
                                src={getImagePath('/images/fabrica-3.jpg')}
                                alt="Expansão 2018"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-4xl font-bold text-white font-display">2018</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">Salto Tecnológico</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Implementamos nossa ferramentaria própria e modernizamos o parque industrial com sopradoras de alta precisão,
                                permitindo a criação de frascos exclusivos com design complexo.
                            </p>
                        </div>
                    </div>

                    {/* 2024 - Futuro */}
                    <div className="group">
                        <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg aspect-video">
                            <img
                                src={getImagePath('/images/fabrica-2.jpg')}
                                alt="Liderança 2024"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-4xl font-bold text-white font-display">2024</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">Moldando o Futuro</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Referência nacional em embalagens customizadas, servindo grandes indústrias com soluções sustentáveis,
                                acabamentos premium e agilidade produtiva incomparável.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
