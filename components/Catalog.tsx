'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

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
        colors: ['A combinar'],
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
        colors: ['A combinar'],
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
        colors: ['A combinar'],
        image: '/products/pote-250g.jpg',
        description: 'Pote compacto de 250g em PEAD.',
    },
    {
        id: 6,
        name: 'Frasco 300 ml (Index)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['300ml'],
        lid: 'Rosca R24/415',
        colors: ['A combinar'],
        image: '/products/frasco-300ml.jpg',
        description: 'Modelo Index com rosca R24/415.',
    },
    {
        id: 8,
        name: 'Frasco 500 ml (Index)',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['500ml'],
        lid: 'Rosca R28/410',
        colors: ['A combinar'],
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
        colors: ['A combinar'],
        image: '/products/frasco-1l.jpg',
        description: 'Frasco de 1 Litro modelo Index.',
    },
    {
        id: 14,
        name: 'Frasco 100 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['100ml'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/frasco 100ml.png',
        description: 'Frasco de 100ml, ideal para viagens.',
    },
    {
        id: 15,
        name: 'Frasco 200 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['200ml'],
        lid: 'Gargalo 24/410',
        colors: ['A combinar'],
        image: '/products/frasco 200ml.png',
        description: 'Frasco de 200ml, versátil.',
    },
    {
        id: 16,
        name: 'Frasco 250 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['250ml'],
        lid: 'Gargalo 24/410',
        colors: ['A combinar'],
        image: '/products/frasco 250.png',
        description: 'Frasco de 250ml com design elegante.',
    },
    {
        id: 17,
        name: 'Frasco Cilindro 355 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['355ml'],
        lid: 'Gargalo 24/415',
        colors: ['A combinar'],
        image: '/products/cilindro 355ml.png',
        description: 'Frasco cilíndrico de 355ml.',
    },
    {
        id: 26,
        name: 'Frasco Cilindro 300 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['300ml'],
        lid: '',
        colors: ['A combinar'],
        image: '/products/cilindro 300ml.png',
        description: 'Frasco cilíndrico de 300ml.',
    },
    {
        id: 18,
        name: 'Frasco Girafa 70 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['70ml'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/girafa 70ml.png',
        description: 'Modelo Girafa compacto de 70ml.',
    },
    {
        id: 19,
        name: 'Frasco Girafa 500 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['500ml'],
        lid: 'Gargalo 28/410',
        colors: ['A combinar'],
        image: '/products/frasco-500ml-girafa.jpg',
        description: 'Modelo Girafa de 500ml.',
    },
    {
        id: 20,
        name: 'Frasco Girafa 1 Litro',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['1L'],
        lid: 'Gargalo 28/410',
        colors: ['A combinar'],
        image: '/products/girafa 1lt.png',
        description: 'Modelo Girafa de 1 Litro.',
    },
    {
        id: 21,
        name: 'Frasco Oval 500 ml',
        category: 'Frascos',
        material: 'PEAD',
        volumes: ['500ml'],
        lid: 'Gargalo 28/410',
        colors: ['A combinar'],
        image: '/products/shampoo.png',
        description: 'Frasco para Shampoo de 500ml.',
    },
    {
        id: 22,
        name: 'Bisnaga 30g',
        category: 'Bisnagas',
        material: 'PEBD',
        volumes: ['30g'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/bisnaga 30g.png',
        description: 'Bisnaga flexível de 30g.',
    },
    {
        id: 23,
        name: 'Bisnaga 40g',
        category: 'Bisnagas',
        material: 'PEBD',
        volumes: ['40g'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/bisnaga 40g.png',
        description: 'Bisnaga flexível de 40g.',
    },
    {
        id: 24,
        name: 'Bisnaga 50g',
        category: 'Bisnagas',
        material: 'PEBD',
        volumes: ['50g'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/bisnaga 50g.png',
        description: 'Bisnaga flexível de 50g.',
    },
    {
        id: 25,
        name: 'Bisnaga 60g',
        category: 'Bisnagas',
        material: 'PEBD',
        volumes: ['60g'],
        lid: 'Gargalo 18',
        colors: ['A combinar'],
        image: '/products/bisnaga 60g.png',
        description: 'Bisnaga flexível de 60g.',
    },
    {
        id: 11,
        name: 'Bola de Sorvete 60gr',
        category: 'Projetos Especiais',
        material: 'PEAD',
        volumes: ['60g'],
        lid: 'Encaixe',
        colors: ['A combinar'],
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
        colors: ['A combinar'],
        image: '/products/cera.jpg',
        description: 'Desenvolvido para ceras depilatórias e automotivas.',
    },
];

const categories = ['Todos', 'Potes', 'Frascos', 'Bisnagas', 'Projetos Especiais'];

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
        <section id="catalogo" className="bg-gray-50 py-[var(--section-padding)]">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">
                            Our Portfolio
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-black uppercase">
                            Soluções <br />
                            <span className="text-gray-300">para cada</span> <br />
                            segmento.
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${selectedCategory === cat
                                        ? 'bg-black text-white border-black'
                                        : 'bg-transparent text-gray-400 border-gray-200 hover:border-black hover:text-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* GRID */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-white border border-gray-100 p-8 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            <div className="aspect-square bg-gray-50 mb-8 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={getImagePath(product.image)}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl opacity-10 font-black">GT</div>';
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-black text-white text-[8px] font-black uppercase tracking-widest px-3 py-1">
                                    {product.category}
                                </div>
                            </div>

                            <h3 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-primary-500 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
                                {product.material} • {product.volumes.join(', ')}
                            </p>

                            <button
                                onClick={() => {
                                    const message = `Olá! Gostaria de solicitar um orçamento para: ${product.name}`;
                                    window.open(`https://wa.me/5511994643577?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className="mt-auto w-full border-t border-gray-100 pt-6 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-colors hover:text-primary-500 flex items-center justify-between"
                            >
                                <span>Solicitar Orçamento</span>
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredProducts.length === 0 && (
                    <div className="py-32 text-center uppercase font-black text-gray-200 text-4xl">
                        No items found
                    </div>
                )}
            </div>
        </section>
    );
}
