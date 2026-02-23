'use client';

import { getImagePath } from '@/lib/utils';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="lg:col-span-4">
                        <img
                            src={getImagePath('/logo-white.png')}
                            alt="Plásticos GT"
                            className="h-12 w-auto mb-8 grayscale brightness-200"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.insertAdjacentHTML('afterbegin', '<span class="text-3xl font-black tracking-tighter block mb-8">PLÁSTICOS GT</span>');
                            }}
                        />
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Engenharia de precisão e qualidade que molda o futuro das embalagens plásticas desde 2013.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-8 grid md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">Navegação</h4>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                                <li><a href="#home" className="hover:text-primary-500 transition-colors">Home</a></li>
                                <li><a href="#catalogo" className="hover:text-primary-500 transition-colors">Catálogo</a></li>
                                <li><a href="#sobre" className="hover:text-primary-500 transition-colors">Institucional</a></li>
                                <li><a href="#contato" className="hover:text-primary-500 transition-colors">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">Soluções</h4>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sopro Inteligente</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Injeção Técnica</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ferramentaria</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projetos 3D</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">Newsletter</h4>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="SEU EMAIL"
                                    className="w-full bg-white/5 border-b border-white/20 py-4 px-0 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                                />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-500 font-bold uppercase tracking-widest text-[10px]">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <div>
                        © {currentYear} PLÁSTICOS GT. TODOS OS DIREITOS RESERVADOS.
                    </div>

                    {/* Credits required by rule */}
                    <div className="flex items-center gap-6">
                        <span className="opacity-50">DESENVOLVIDO POR</span>
                        <a href="https://www.uebistudio.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-opacity hover:opacity-100 opacity-80 group">
                            <span className="text-white group-hover:text-primary-500 transition-colors">UEBI STUDIO</span>
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                {/* Placeholder for UEBI logo */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                    <path d="M2 17L12 22L22 17" />
                                    <path d="M2 12L12 17L22 12" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
