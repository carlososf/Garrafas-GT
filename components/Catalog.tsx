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
    // POTES
    {
        id: 1,
        name: 'Pote de 1kg',
        category: 'Potes',
        material: 'PEAD',
        volumes: ['1kg'],
        lid: 'Diâmetro 102mm',
        colors: ['Branco', 'Transparente'],
        image: '/products/pote-1kg.jpg',
        description: 'Pote resistente em PEAD com tampa de 102mm.',
    },
    {
        id: 2,
        name: 'Pote de 500 gr',
        category: 'Potes',
        material: 'PEAD',
        volumes: ['500g'],
        lid: 'Diâmetro 92mm',
        colors: ['Branco', 'Transparente'],
        image: '/products/pote-500g.jpg',
        description: 'Pote de 500g em PEAD, ideal para diversos produtos.',
    },
    {
        id: 3,
        name: 'Pote de 250 gr',
        category: 'Potes',
        material: 'PEAD',
        volumes: ['250g'],
        lid: 'Diâmetro 92mm',
        colors: ['Branco', 'Transparente'],
        image: '/products/pote-250g.jpg',
        description: 'Pote compacto de 250g em PEAD.',
    },

    // FRASCOS
    {
        id: 4,
        name: 'Frasco 10 ml (Óleo Ungido)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['10ml'],
        lid: 'Padrão',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-10ml.jpg',
        description: 'Frasco pequeno para óleo ungido e amostras.',
    },
    {
        id: 5,
        name: 'Frasco 120 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['120ml'],
        lid: 'Padrão',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-120ml.jpg',
        description: 'Frasco versátil de 120ml em PEAD.',
    },
    {
        id: 6,
        name: 'Frasco 300 ml (Index)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['300ml'],
        lid: 'Rosca R24/415',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-300ml.jpg',
        description: 'Modelo Index com rosca R24/415.',
    },
    {
        id: 7,
        name: 'Frasco 400 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['400ml'],
        lid: 'Rosca R28/410',
        colors: ['Branco', 'Transparente'],
        image: '', // Imagem pendente
        description: 'Frasco de 400ml com rosca R28/410.',
    },
    {
        id: 8,
        name: 'Frasco 500 ml (Index)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['500ml'],
        lid: 'Rosca R28/410',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-500ml-index.jpg',
        description: 'Modelo Index de 500ml, muito popular.',
    },
    {
        id: 9,
        name: 'Frasco 1 Litro (Index)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['1L'],
        lid: 'Rosca R28/410',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-1l.jpg',
        description: 'Frasco de 1 Litro modelo Index.',
    },
    {
        id: 10,
        name: 'Frasco 500 ml (Girafa)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['500ml'],
        lid: 'Rosca R28/410',
        colors: ['Branco', 'Transparente'],
        image: '/products/frasco-500ml-girafa.jpg',
        description: 'Modelo Girafa com design diferenciado.',
    },

    // PROJETOS ESPECIAIS
    {
        id: 11,
        name: 'Bola de Sorvete 60gr',
        category: 'Projetos Especiais',
        material: 'PP',
        volumes: ['60g'],
        lid: 'Encaixe',
        colors: ['Variadas'],
        image: '/products/bola-sorvete.jpg',
        description: 'Embalagem formato bola para sorvetes.',
    },
    {
        id: 12,
        name: 'Embalagem para Cera',
        category: 'Projetos Especiais',
        material: 'Resistente ao Calor',
        volumes: ['Sob Consulta'],
        lid: 'Padrão',
        colors: ['Personalizado'],
        image: '/products/cera.jpg',
        description: 'Desenvolvido para ceras depilatórias e automotivas.',
    },
    {
        id: 13,
        name: 'Pote para Shimeji',
        category: 'Projetos Especiais',
        material: 'PP',
        volumes: ['Sob Consulta'],
        lid: 'Sem Tampa',
        colors: ['Transparente'],
        image: '/products/shimeji.jpg',
        description: 'Embalagem ideal para cogumelos Shimeji.',
    },
];

const categories = ['Todos', 'Potes', 'Frascos', 'Projetos Especiais'];

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

                            {/* Image Render */}
                            {product.image ? (
                                <div className="absolute inset-0 p-6 flex items-center justify-center">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-contain w-full h-full drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            // Fallback to emoji if image fails
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement?.parentElement;
                                            if (parent) {
                                                const fallback = document.createElement('div');
                                                fallback.className = 'absolute inset-0 flex items-center justify-center';
                                                fallback.innerHTML = '<div class="text-6xl">📦</div>';
                                                parent.appendChild(fallback);
                                            }
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl">📦</div>
                                </div>
                            )}

                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full z-10">
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
                                    window.open(`https://wa.me/5511994643577?text=${encodeURIComponent(message)}`, '_blank');
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
