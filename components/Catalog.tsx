'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    category: string;
    material: string;
    volumes: string[];
    lid: string;
    colors: string[];
    image: string;
    description: string;
}

const products: Product[] = [
    // BALDES INDUSTRIAIS - LINHA REDONDA
    {
        id: 1,
        name: 'Balde Industrial 2,2 Litros',
        category: 'Baldes Redondos',
        material: 'PP / PEAD',
        volumes: ['2,2L'],
        lid: 'Tampa com Lacre',
        colors: ['Branco', 'Transparente', 'Colorido'],
        image: '/products/balde-2l.webp',
        description: 'Compacto, ideal para amostras ou produtos de varejo. Perfeito para pequenos volumes.',
    },
    {
        id: 2,
        name: 'Balde Industrial 3,2 Litros',
        category: 'Baldes Redondos',
        material: 'PP',
        volumes: ['3,2L'],
        lid: 'Tampa Rosca Lacre',
        colors: ['Branco', 'Transparente'],
        image: '/products/balde-3l.webp',
        description: 'Muito utilizado no setor alimentício (sorvetes, doces). Aprovado para contato com alimentos.',
    },
    {
        id: 3,
        name: 'Balde Industrial 3,6 Litros',
        category: 'Baldes Redondos',
        material: 'PEAD',
        volumes: ['3,6L'],
        lid: 'Tampa Rosca Reforçada',
        colors: ['Branco', 'Colorido'],
        image: '/products/balde-3-6l.webp',
        description: 'Padrão para tintas e massas menores. Alta resistência química.',
    },
    {
        id: 4,
        name: 'Balde Industrial 12 Litros',
        category: 'Baldes Redondos',
        material: 'PEAD',
        volumes: ['12L'],
        lid: 'Tampa Rosca com Lacre',
        colors: ['Branco', 'Azul', 'Verde'],
        image: '/products/balde-12l.webp',
        description: 'Intermediário para produtos químicos e construção civil. Alça em plástico resistente.',
    },
    {
        id: 5,
        name: 'Balde Industrial 18 Litros',
        category: 'Baldes Redondos',
        material: 'PEAD',
        volumes: ['18L'],
        lid: 'Tampa Rosca / Sobre-tampa',
        colors: ['Branco', 'Transparente', 'Colorido'],
        image: '/products/balde-18l.webp',
        description: 'Padrão de mercado para tintas, óleos e grandes volumes de alimentos. Alça metálica opcional.',
    },
    {
        id: 6,
        name: 'Balde Industrial 20 Litros',
        category: 'Baldes Redondos',
        material: 'PEAD Reforçado',
        volumes: ['20L'],
        lid: 'Tampa Reforçada com Lacre',
        colors: ['Branco', 'Azul'],
        image: '/products/balde-20l.webp',
        description: 'Reforçado para transporte logístico pesado. Máxima resistência e durabilidade.',
    },

    // BALDES INDUSTRIAIS - LINHA RETANGULAR
    {
        id: 7,
        name: 'Balde Retangular 4 Litros',
        category: 'Baldes Retangulares',
        material: 'PEAD',
        volumes: ['4L'],
        lid: 'Tampa Rosca',
        colors: ['Branco', 'Azul', 'Verde'],
        image: '/products/balde-ret-4l.webp',
        description: 'Comum para produtos de limpeza ou químicos específicos. Otimizado para empilhamento.',
    },
    {
        id: 8,
        name: 'Balde Retangular 20 Litros',
        category: 'Baldes Retangulares',
        material: 'PEAD Reforçado',
        volumes: ['20L'],
        lid: 'Tampa com Sobre-tampa',
        colors: ['Branco', 'Azul'],
        image: '/products/balde-ret-20l.webp',
        description: 'Maximiza o empilhamento em pallets. Design pensado para otimização de espaço em estoques.',
    },

    // POTES E FRASCOS - LINHA DE INJEÇÃO
    {
        id: 9,
        name: 'Pote Hermético (Vários Tamanhos)',
        category: 'Potes e Frascos',
        material: 'PP',
        volumes: ['250ml', '500ml', '1L', '2L'],
        lid: 'Tampa com Lacre de Segurança',
        colors: ['Transparente', 'Branco'],
        image: '/products/pote-hermetico.webp',
        description: 'Sistema de lacre que garante que o produto não foi violado. Ideal para alimentos e farmacêuticos.',
    },
    {
        id: 10,
        name: 'Frasco de Boca Larga',
        category: 'Potes e Frascos',
        material: 'PP / PEAD',
        volumes: ['500ml', '1L', '2L'],
        lid: 'Tampa Rosca Larga',
        colors: ['Transparente', 'Branco', 'Âmbar'],
        image: '/products/frasco-boca-larga.webp',
        description: 'Facilitam o envase de pastosos, pós e grãos. Abertura ampla para fácil manuseio.',
    },

    // TAMPAS E FECHAMENTOS
    {
        id: 11,
        name: 'Tampa com Lacre de Segurança',
        category: 'Tampas e Fechamentos',
        material: 'PP',
        volumes: ['Universal'],
        lid: 'Seal - Lacre Inviolável',
        colors: ['Branco', 'Preto', 'Colorido'],
        image: '/products/tampa-lacre.webp',
        description: 'O bocal quebra ao abrir pela primeira vez. Máxima segurança contra violação.',
    },
    {
        id: 12,
        name: 'Tampa com Sobre-tampa',
        category: 'Tampas e Fechamentos',
        material: 'PP',
        volumes: ['Universal'],
        lid: 'Sistema Duplo',
        colors: ['Branco', 'Transparente'],
        image: '/products/tampa-sobre.webp',
        description: 'Para maior proteção contra vazamentos. Sistema de dupla vedação.',
    },
    {
        id: 13,
        name: 'Tampa para Bico Dosador',
        category: 'Tampas e Fechamentos',
        material: 'PP',
        volumes: ['Universal'],
        lid: 'Bico Dosador',
        colors: ['Branco', 'Preto'],
        image: '/products/tampa-dosador.webp',
        description: 'Utilizadas em baldes de lubrificantes e óleos. Dosagem precisa e controlada.',
    },

    // PROJETOS ESPECIAIS
    {
        id: 14,
        name: 'Projeto Customizado',
        category: 'Projetos Especiais',
        material: 'PP / PEAD / PET',
        volumes: ['Sob Medida'],
        lid: 'Personalizado',
        colors: ['Todas as Cores'],
        image: '/products/custom-project.webp',
        description: 'Desenvolvimento de moldes exclusivos. Design único para sua marca com IML ou Serigrafia.',
    },
];

const categories = ['Todos', 'Baldes Redondos', 'Baldes Retangulares', 'Potes e Frascos', 'Tampas e Fechamentos', 'Projetos Especiais'];

export default function Catalog() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            if (selectedCategory === 'Todos') {
                setFilteredProducts(products);
            } else {
                setFilteredProducts(products.filter(p => p.category === selectedCategory));
            }
            setIsAnimating(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedCategory]);

    return (
        <section id="catalogo" className="section-container bg-gray-50">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    Nosso Catálogo
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                    Soluções para Cada <span className="gradient-text">Segmento</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Embalagens plásticas de alta qualidade, desenvolvidas com tecnologia de ponta
                    e adaptadas às necessidades específicas do seu negócio.
                </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                            ? 'bg-primary-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'
                    }`}
            >
                {filteredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="product-card group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Product Image */}
                        <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 bg-primary-500 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-6xl">📦</div>
                            </div>
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                                <span className="text-xs font-semibold text-primary-600">{product.category}</span>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                            {/* Specifications */}
                            <div className="space-y-2 mb-4">
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-2">🔹</span>
                                    <div className="text-sm">
                                        <span className="font-semibold text-gray-700">Material:</span>
                                        <span className="text-gray-600 ml-1">{product.material}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-2">🔹</span>
                                    <div className="text-sm">
                                        <span className="font-semibold text-gray-700">Volumes:</span>
                                        <span className="text-gray-600 ml-1">{product.volumes.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-2">🔹</span>
                                    <div className="text-sm">
                                        <span className="font-semibold text-gray-700">Tampa:</span>
                                        <span className="text-gray-600 ml-1">{product.lid}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-2">🔹</span>
                                    <div className="text-sm">
                                        <span className="font-semibold text-gray-700">Cores:</span>
                                        <span className="text-gray-600 ml-1">{product.colors.join(', ')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => {
                                    const message = `Olá! Gostaria de solicitar um orçamento para: ${product.name}`;
                                    window.open(`https://wa.me/5511972362554?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className="w-full btn-primary text-sm py-3"
                            >
                                <span className="relative z-10">Solicitar Orçamento</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h3>
                    <p className="text-gray-600">Tente selecionar outra categoria</p>
                </div>
            )}

            {/* Custom Projects CTA */}
            <div className="mt-16 glass-green rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                    Precisa de um Projeto Customizado?
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    Desenvolvemos <strong>moldes exclusivos</strong> com nossa ferramentaria própria.
                    Oferecemos <strong>IML (In-Mould Labeling)</strong> e <strong>Serigrafia</strong> para
                    criar embalagens únicas para sua marca.
                </p>
                <a href="#configurador" className="btn-primary inline-block">
                    <span className="relative z-10">Solicitar Orçamento Personalizado</span>
                </a>
            </div>
        </section>
    );
}
