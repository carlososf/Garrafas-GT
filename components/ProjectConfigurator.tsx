'use client';

import { useState } from 'react';

interface ProjectConfig {
    type: string;
    capacity: string;
    color: string;
    quantity: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    observations: string;
}

export default function ProjectConfigurator() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState<ProjectConfig>({
        type: '',
        capacity: '',
        color: '',
        quantity: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        observations: '',
    });

    const bottleTypes = [
        { id: 'cosmetic', name: 'Frasco Cosmético', icon: '💄' },
        { id: 'food', name: 'Pote Alimentício', icon: '🍯' },
        { id: 'hygiene', name: 'Frasco Higiene', icon: '🧴' },
        { id: 'cleaning', name: 'Galão Limpeza', icon: '🧹' },
        { id: 'spray', name: 'Frasco Spray', icon: '💦' },
        { id: 'custom', name: 'Projeto Especial', icon: '⚙️' },
    ];

    const capacities = ['70ml', '100ml', '250ml', '500ml', '1L', 'Outro'];
    const colors = ['Branco', 'Transparente', 'Azul', 'Verde', 'Preto', 'Personalizado'];
    const quantities = ['500 - 1.000', '1.000 - 5.000', '5.000 - 10.000', '10.000+'];

    const handleNext = () => step < 5 && setStep(step + 1);
    const handlePrev = () => step > 1 && setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const selectedType = bottleTypes.find(t => t.id === config.type);
        const summary = `ORÇAMENTO GT: \nProduto: ${selectedType?.name}\nCapacidade: ${config.capacity}\nCor: ${config.color}\nQtd: ${config.quantity}\nCliente: ${config.name} - ${config.company}`;
        window.open(`https://wa.me/5511994643577?text=${encodeURIComponent(summary)}`, '_blank');
    };

    return (
        <section id="configurador" className="bg-white py-[var(--section-padding)]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* LEFT: INFO */}
                    <div className="lg:col-span-5">
                        <span className="text-primary-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Configurador</span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] font-black uppercase mb-8 text-black">
                            Projete <br />
                            <span className="text-gray-300">sua solução</span> <br />
                            em segundos.
                        </h2>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-[2px] bg-primary-500 w-12"></div>
                            <span className="font-bold text-xs uppercase tracking-widest">Passo {step} / 05</span>
                        </div>
                    </div>

                    {/* RIGHT: FORM */}
                    <div className="lg:col-span-7 bg-gray-50 p-8 md:p-16 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-12">

                            {step === 1 && (
                                <div className="animate-fade-in grid grid-cols-2 gap-4">
                                    {bottleTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => { setConfig({ ...config, type: type.id }); handleNext(); }}
                                            className={`p-8 text-left border transition-all duration-500 ${config.type === type.id ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-100 hover:border-black'}`}
                                        >
                                            <div className="text-3xl mb-4">{type.icon}</div>
                                            <div className="font-black uppercase text-xs tracking-widest">{type.name}</div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {step === 2 && (
                                <div className="animate-fade-in grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {capacities.map((cap) => (
                                        <button
                                            key={cap}
                                            type="button"
                                            onClick={() => { setConfig({ ...config, capacity: cap }); handleNext(); }}
                                            className={`p-6 border font-black text-xs uppercase tracking-widest transition-all ${config.capacity === cap ? 'bg-black text-white' : 'bg-white hover:border-black'}`}
                                        >
                                            {cap}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {step === 3 && (
                                <div className="animate-fade-in grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {colors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => { setConfig({ ...config, color: color }); handleNext(); }}
                                            className={`p-6 border font-black text-xs uppercase tracking-widest transition-all ${config.color === color ? 'bg-black text-white' : 'bg-white hover:border-black'}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {step === 4 && (
                                <div className="animate-fade-in grid grid-cols-1 gap-4">
                                    {quantities.map((q) => (
                                        <button
                                            key={q}
                                            type="button"
                                            onClick={() => { setConfig({ ...config, quantity: q }); handleNext(); }}
                                            className={`p-6 border text-left font-black text-xs uppercase tracking-widest transition-all ${config.quantity === q ? 'bg-black text-white' : 'bg-white hover:border-black'}`}
                                        >
                                            {q} UNIDADES / MÊS
                                        </button>
                                    ))}
                                </div>
                            )}

                            {step === 5 && (
                                <div className="animate-fade-in space-y-6">
                                    <input
                                        type="text"
                                        placeholder="NOME"
                                        className="w-full bg-white border border-gray-100 p-6 text-xs font-bold focus:outline-none focus:border-black"
                                        onChange={(e) => setConfig({ ...config, name: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="EMPRESA"
                                        className="w-full bg-white border border-gray-100 p-6 text-xs font-bold focus:outline-none focus:border-black"
                                        onChange={(e) => setConfig({ ...config, company: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="EMAIL"
                                        className="w-full bg-white border border-gray-100 p-6 text-xs font-bold focus:outline-none focus:border-black"
                                        onChange={(e) => setConfig({ ...config, email: e.target.value })}
                                    />
                                    <button type="submit" className="w-full bg-primary-500 text-white p-6 font-black uppercase tracking-[0.2em] hover:bg-black transition-colors">
                                        Enviar Proposta Agora
                                    </button>
                                </div>
                            )}

                            {step > 1 && step < 5 && (
                                <button type="button" onClick={handlePrev} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">
                                    ← Voltar Passo
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
