'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        empresa: [
            { label: 'Sobre Nós', href: '#institucional' },
            { label: 'Diferenciais', href: '#diferenciais' },
            { label: 'Certificações', href: '#institucional' },
            { label: 'Sustentabilidade', href: '#institucional' },
        ],
        produtos: [
            { label: 'Cosméticos', href: '#catalogo' },
            { label: 'Alimentício', href: '#catalogo' },
            { label: 'Higiene', href: '#catalogo' },
            { label: 'Limpeza', href: '#catalogo' },
        ],
        servicos: [
            { label: 'Projetos Customizados', href: '#configurador' },
            { label: 'Ferramentaria', href: '#diferenciais' },
            { label: 'Modelagem 3D', href: '#diferenciais' },
            { label: 'Consultoria Técnica', href: '#contato' },
        ],
        contato: [
            { label: 'Fale Conosco', href: '#contato' },
            { label: 'Solicitar Orçamento', href: '#contato' },
            { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
            { label: 'Email', href: 'mailto:contato@plasticosgt.com.br' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="relative w-48 h-14">
                                <Image
                                    src="/logo.png"
                                    alt="Plásticos GT - Qualidade que molda o futuro"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6">
                            Há mais de 25 anos fornecendo soluções em embalagens plásticas de alta qualidade,
                            com ferramentaria própria e projetos customizados para diversos segmentos industriais.
                        </p>

                        <div className="flex space-x-3">
                            {[
                                { icon: '📘', href: '#', label: 'Facebook' },
                                { icon: '📸', href: '#', label: 'Instagram' },
                                { icon: '💼', href: '#', label: 'LinkedIn' },
                                { icon: '▶️', href: '#', label: 'YouTube' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Produtos</h4>
                        <ul className="space-y-2">
                            {footerLinks.produtos.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <ul className="space-y-2">
                            {footerLinks.contato.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Plásticos GT. Todos os direitos reservados.
                        </p>

                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                Termos de Uso
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema.org Organization markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Plásticos GT',
                        description: 'Indústria de embalagens plásticas de alta qualidade',
                        url: 'https://www.plasticosgt.com.br',
                        logo: 'https://www.plasticosgt.com.br/logo.png',
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: '+55-11-4002-8922',
                            contactType: 'sales',
                            areaServed: 'BR',
                            availableLanguage: 'Portuguese',
                        },
                        sameAs: [
                            'https://www.facebook.com/plasticosgt',
                            'https://www.instagram.com/plasticosgt',
                            'https://www.linkedin.com/company/plasticosgt',
                        ],
                    }),
                }}
            />
        </footer>
    );
}
