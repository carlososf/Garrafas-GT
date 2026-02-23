'use client';

import { useState, useEffect } from 'react';
import { getImagePath } from '@/lib/utils';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Catalogo', href: '#catalogo' },
        { label: 'Institucional', href: '#institucional' },
        { label: 'Diferenciais', href: '#diferenciais' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className={`relative flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-2xl ${isScrolled ? 'glass shadow-2xl scale-95' : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <a href="#home" className="relative z-10 block group">
                        <img
                            src={getImagePath('/logo.png')}
                            alt="Plásticos GT"
                            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<span class="font-black text-2xl tracking-tighter">PLÁSTICOS <span class="text-primary-500">GT</span></span>';
                            }}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-bold uppercase tracking-widest text-black hover:text-primary-600 transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <a
                            href="#contato"
                            className="px-6 py-3 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg transition-all duration-300 hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1"
                        >
                            Solicitar Orçamento
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-10 w-10 h-10 flex flex-col justify-center gap-1.5"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`w-full h-[2px] bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-[2px] bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-[2px] bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
                        }`}>
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-black uppercase tracking-tighter hover:text-primary-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-10 py-5 bg-primary-500 text-white font-bold uppercase tracking-widest rounded-xl"
                        >
                            Orçamento Já
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
