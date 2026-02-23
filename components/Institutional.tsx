'use client';

import { getImagePath } from '@/lib/utils';

export default function Institutional() {
    return (
        <section id="institucional" className="bg-white py-[var(--section-padding)] overflow-hidden">
            <div className="container mx-auto px-6">

                {/* LARGE INTRO */}
                <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="inline-flex items-center gap-3 animate-fade-in">
                            <span className="w-12 h-[1px] bg-primary-500"></span>
                            <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-xs">
                                Our Heritage
                            </span>
                        </div>
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-black uppercase mb-0">
                            Uma história <br />
                            <span className="text-gray-300">moldada por</span> <br />
                            precisão.
                        </h2>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-primary-500 pl-8">
                            Desde 2013, a Plásticos GT redefine os padrões da indústria de sopro e injeção,
                            fundindo engenharia de ponta com agilidade brasileira.
                        </p>
                    </div>
                </div>

                {/* VISUAL COMPOSITION: ASYMMETRIC GRID */}
                <div className="grid lg:grid-cols-12 gap-6 mb-32">
                    <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden group relative">
                        <img
                            src={getImagePath('/images/fabrica-1.jpg')}
                            alt="Factory"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 flex items-center justify-center bg-gray-900 text-white font-black text-6xl">GT FACTORY</div>';
                            }}
                        />
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="h-1/2 bg-black p-12 flex flex-col justify-end group transition-all duration-500 hover:bg-primary-900">
                            <span className="text-primary-500 text-5xl font-black mb-4">11+</span>
                            <span className="text-white text-xs uppercase tracking-widest font-bold">Anos de Inovação Constante</span>
                        </div>
                        <div className="h-1/2 bg-primary-500 p-12 flex flex-col justify-end group transition-all duration-500 hover:shadow-2xl">
                            <h3 className="text-white text-3xl font-black uppercase leading-tight mb-4">Tecnologia de <br />Ponta</h3>
                            <p className="text-white/80 text-sm">Maquinário renovado anualmente para garantir a perfeição em cada milímetro.</p>
                        </div>
                    </div>
                </div>

                {/* MVV - MODERN MINIMALIST */}
                <div className="grid md:grid-cols-3 gap-16 border-t border-gray-100 pt-32">
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary-600">Nossa Missão</h4>
                        <p className="text-xl font-bold leading-snug">
                            Transformar polímeros em soluções estratégicas que agreguem valor percebido à marca de nossos clientes.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary-600">Nossa Visão</h4>
                        <p className="text-xl font-bold leading-snug">
                            Liderar o mercado latino-americano de embalagens técnicas através da sustentabilidade e design disruptivo.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary-600">Nossos Valores</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                            <li className="flex items-center gap-4 group cursor-default">
                                <span className="w-2 h-2 bg-primary-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                                <span className="group-hover:text-black transition-colors">Precisão Absoluta</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-default">
                                <span className="w-2 h-2 bg-primary-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                                <span className="group-hover:text-black transition-colors">Ética Radical</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-default">
                                <span className="w-2 h-2 bg-primary-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                                <span className="group-hover:text-black transition-colors">Eco-Engenharia</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
