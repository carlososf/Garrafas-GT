'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroHeight = window.innerHeight * 0.8; // Aproximadamente a altura do Hero

            // Navbar só aparece depois do Hero
            setShowNavbar(scrollPosition > heroHeight);

            // Muda estilo quando rola mais
            setIsScrolled(scrollPosition > heroHeight + 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Início' },
        { href: '#catalogo', label: 'Catálogo' },
        { href: '#diferenciais', label: 'Diferenciais' },
        { href: '#institucional', label: 'Institucional' },
        { href: '#configurador', label: 'Projetos Especiais' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!showNavbar
                ? '-translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
                } ${isScrolled
                    ? 'glass shadow-lg py-1'
                    : 'bg-primary-600 py-1'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Dual version */}
                    <Link href="#home" className="flex items-center space-x-2 group">
                        <div
                            className="relative transform transition-all duration-300 group-hover:scale-105"
                            style={{
                                width: 'var(--logo-navbar-width)',
                                height: 'var(--logo-navbar-height)',
                            }}
                        >
                            {/* Logo for GREEN background (white version) */}
                            <img
                                src="/Garrafas-GT/logo-white.png"
                                alt="Plásticos GT - Qualidade que molda o futuro"
                                className={`w-full h-full object-contain transition-opacity duration-300 absolute inset-0 ${isScrolled ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />
                            {/* Logo for WHITE background (color version) */}
                            <img
                                src="/Garrafas-GT/logo-color.png"
                                alt="Plásticos GT - Qualidade que molda o futuro"
                                className={`w-full h-full object-contain transition-opacity duration-300 absolute inset-0 ${isScrolled ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p className={`text-xs transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                                Qualidade que molda o futuro
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-1 text-sm font-medium transition-colors duration-300 relative group ${isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-white hover:text-green-200'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary-500' : 'bg-white'
                                    }`}></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href="#contato"
                            className={`inline-block text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${isScrolled
                                ? 'bg-primary-500 text-white hover:bg-primary-600'
                                : 'bg-white text-primary-600 hover:bg-gray-100'
                                }`}
                        >
                            Solicitar Orçamento
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                            }`}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'
                                    } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                            ></span>
                            <span
                                className={`w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'
                                    } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                            ></span>
                            <span
                                className={`w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'
                                    } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
                        }`}
                >
                    <div className="glass-green rounded-2xl p-6 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-white rounded-lg transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block btn-primary text-center text-sm"
                        >
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
