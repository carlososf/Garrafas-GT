'use client';

import { useState } from 'react';

export default function ContactForm() {
    return (
        <section id="contato" className="bg-black py-[var(--section-padding)]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* INFO */}
                    <div className="lg:col-span-4">
                        <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
                            Get in Touch
                        </span>
                        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] font-black uppercase text-white mb-16">
                            Sua visão <br />
                            <span className="text-gray-500">começa aqui.</span>
                        </h2>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-primary-500 text-[10px] font-black uppercase tracking-widest mb-4">Central de Vendas</h4>
                                <p className="text-white text-xl font-bold uppercase">(11) 4002-8922</p>
                                <p className="text-gray-500 text-sm mt-2">Segunda a Sexta, 8h — 18h</p>
                            </div>
                            <div>
                                <h4 className="text-primary-500 text-[10px] font-black uppercase tracking-widest mb-4">Email Corporativo</h4>
                                <p className="text-white text-xl font-bold uppercase">comercial@plasticosgt.com.br</p>
                            </div>
                            <div>
                                <h4 className="text-primary-500 text-[10px] font-black uppercase tracking-widest mb-4">HQ Global</h4>
                                <p className="text-white text-xl font-bold uppercase">São Paulo / Brasil</p>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-8">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input
                                type="text"
                                placeholder="NOME"
                                className="bg-transparent border-b border-white/20 p-6 text-white text-xs font-bold focus:outline-none focus:border-primary-500 transition-colors uppercase placeholder:text-gray-700"
                            />
                            <input
                                type="text"
                                placeholder="CLIENTE / EMPRESA"
                                className="bg-transparent border-b border-white/20 p-6 text-white text-xs font-bold focus:outline-none focus:border-primary-500 transition-colors uppercase placeholder:text-gray-700"
                            />
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="bg-transparent border-b border-white/20 p-6 text-white text-xs font-bold focus:outline-none focus:border-primary-500 transition-colors uppercase placeholder:text-gray-700"
                            />
                            <input
                                type="tel"
                                placeholder="WHATSAPP / CELULAR"
                                className="bg-transparent border-b border-white/20 p-6 text-white text-xs font-bold focus:outline-none focus:border-primary-500 transition-colors uppercase placeholder:text-gray-700"
                            />
                            <textarea
                                placeholder="FALE SOBRE SEU PROJETO"
                                className="md:col-span-2 bg-transparent border-b border-white/20 p-6 text-white text-xs font-bold focus:outline-none focus:border-primary-500 transition-colors uppercase placeholder:text-gray-700 min-h-[150px]"
                            ></textarea>

                            <div className="md:col-span-2 flex justify-end">
                                <button type="submit" className="group flex items-center gap-6">
                                    <span className="text-white text-xl font-black uppercase tracking-widest group-hover:text-primary-500 transition-colors">
                                        Solicitar Briefing
                                    </span>
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                                        <span className="text-white text-2xl group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
