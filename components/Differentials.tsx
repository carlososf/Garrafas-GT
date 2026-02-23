'use client';

import { useEffect, useRef, useState } from 'react';

interface Differential {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

const differentials: Differential[] = [
    {
        icon: '🏭',
        title: 'Ferramentaria Própria',
        description: 'Controle total sobre o processo produtivo com nossa ferramentaria interna',
        features: [
            'Desenvolvimento de moldes customizados',
            'Redução de custos e prazos',
            'Ajustes rápidos e precisos',
            'Garantia de qualidade superior',
        ],
    },
    {
        icon: '📐',
        title: 'Projetos 3D',
        description: 'Modelagem tridimensional avançada para visualização antes da produção',
        features: [
            'Prototipagem virtual completa',
            'Simulação de encaixe e funcionalidade',
            'Aprovação visual antes da fabricação',
            'Redução de retrabalho',
        ],
    },
    {
        icon: '⚡',
        title: 'Rapidez na Entrega',
        description: 'Processos otimizados para atender prazos apertados sem comprometer qualidade',
        features: [
            'Produção ágil e eficiente',
            'Estoque estratégico de matéria-prima',
            'Logística integrada',
            'Atendimento prioritário',
        ],
    },
    {
        icon: '🔬',
        title: 'Qualidade Certificada',
        description: 'Controle rigoroso em todas as etapas do processo produtivo',
        features: [
            'Matéria-prima de primeira linha',
            'Testes de resistência e durabilidade',
            'Conformidade com normas técnicas',
            'Rastreabilidade completa',
        ],
    },
    {
        icon: '🌱',
        title: 'Sustentabilidade',
        description: 'Compromisso com o meio ambiente e práticas sustentáveis',
        features: [
            'Uso de materiais recicláveis',
            'Processo produtivo eco-eficiente',
            'Redução de desperdício',
            'Economia circular',
        ],
    },
    {
        icon: '🤝',
        title: 'Atendimento Personalizado',
        description: 'Equipe técnica dedicada a entender e solucionar suas necessidades',
        features: [
            'Consultoria técnica especializada',
            'Suporte pré e pós-venda',
            'Desenvolvimento conjunto',
            'Relacionamento de longo prazo',
        ],
    },
];

export default function Differentials() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        differentials.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...prev, index]);
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="diferenciais" ref={sectionRef} className="section-container bg-white">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    Por que escolher a GT?
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                    Nossos <span className="gradient-text">Diferenciais</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Tecnologia de ponta, expertise técnica e compromisso com a excelência
                    fazem da Plásticos GT a escolha ideal para seu negócio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {differentials.map((differential, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-300 
                       transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group
                       ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl 
                          flex items-center justify-center mb-6 group-hover:scale-110 
                          group-hover:rotate-6 transition-all duration-300 float-animation">
                            <span className="text-3xl">{differential.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                            {differential.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6">
                            {differential.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3">
                            {differential.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Removed Certifications Section as per user request */}

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        Pronto para transformar seu projeto em realidade?
                    </h3>
                    <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                        Nossa equipe técnica está pronta para desenvolver a solução perfeita para suas necessidades.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contato"
                            className="btn-primary bg-white text-primary-600 hover:bg-gray-50 w-full sm:w-auto"
                        >
                            <span className="relative z-10">Fale com Especialista</span>
                        </a>
                        <a
                            href="#configurador"
                            className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
                        >
                            Configurar Projeto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
