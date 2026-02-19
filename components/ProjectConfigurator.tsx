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
        { id: 'cosmetic', name: 'Frasco Cosmético', icon: '💄', description: 'Para cremes, loções e produtos de beleza' },
        { id: 'food', name: 'Pote Alimentício', icon: '🍯', description: 'Aprovado para contato com alimentos' },
        { id: 'hygiene', name: 'Frasco Higiene', icon: '🧴', description: 'Shampoos, sabonetes e produtos de higiene' },
        { id: 'cleaning', name: 'Galão Limpeza', icon: '🧹', description: 'Produtos químicos e de limpeza' },
        { id: 'spray', name: 'Frasco Spray', icon: '💦', description: 'Sistema de spray profissional' },
        { id: 'custom', name: 'Projeto Customizado', icon: '⚙️', description: 'Desenvolvimento exclusivo' },
    ];

    const capacities = ['50ml', '100ml', '250ml', '500ml', '1L', '2L', '5L', 'Outro'];
    const colors = ['Branco', 'Transparente', 'Âmbar', 'Azul', 'Verde', 'Rosa', 'Preto', 'Colorido Personalizado'];
    const quantities = ['500 - 1.000', '1.000 - 5.000', '5.000 - 10.000', '10.000 - 50.000', 'Acima de 50.000'];

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Generate summary
        const selectedType = bottleTypes.find(t => t.id === config.type);
        const summary = `
SOLICITACAO DE ORCAMENTO - Plasticos GT

PRODUTO SOLICITADO:
Tipo de Frasco: ${selectedType?.name || 'Não selecionado'}
Capacidade: ${config.capacity}
Cor: ${config.color}
Quantidade Mensal: ${config.quantity} unidades

DADOS DO CLIENTE:
Nome: ${config.name}
Empresa: ${config.company}
Email: ${config.email}
Telefone: ${config.phone}

OBSERVACOES:
${config.observations || 'Nenhuma observação adicional'}
    `.trim();

        // Send to WhatsApp
        const message = encodeURIComponent(summary);
        window.open(`https://wa.me/5511994643577?text=${message}`, '_blank');

        // Reset form
        setConfig({
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
        setStep(1);
    };

    const progress = (step / 5) * 100;

    return (
        <section id="configurador" className="section-container bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        Solicite seu Orçamento
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                        Configurador de <span className="gradient-text">Orçamento</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Configure seu produto passo a passo e receba um orçamento personalizado
                        da nossa equipe de vendas.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Passo {step} de 5</span>
                        <span className="text-sm font-semibold text-primary-600">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Configuration Form */}
                <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Bottle Type */}
                        {step === 1 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Selecione o Tipo de Frasco</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {bottleTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setConfig({ ...config, type: type.id })}
                                            className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${config.type === type.id
                                                ? 'border-primary-500 bg-primary-50 shadow-lg scale-105'
                                                : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                                                }`}
                                        >
                                            <div className="text-4xl mb-3">{type.icon}</div>
                                            <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                                            <p className="text-sm text-gray-600">{type.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Capacity */}
                        {step === 2 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Escolha a Capacidade</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {capacities.map((capacity) => (
                                        <button
                                            key={capacity}
                                            type="button"
                                            onClick={() => setConfig({ ...config, capacity })}
                                            className={`p-6 rounded-2xl border-2 transition-all duration-300 font-semibold ${config.capacity === capacity
                                                ? 'border-primary-500 bg-primary-50 shadow-lg scale-105 text-primary-700'
                                                : 'border-gray-200 hover:border-primary-300 hover:shadow-md text-gray-700'
                                                }`}
                                        >
                                            {capacity}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Color */}
                        {step === 3 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Defina a Cor</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {colors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setConfig({ ...config, color })}
                                            className={`p-6 rounded-2xl border-2 transition-all duration-300 font-semibold ${config.color === color
                                                ? 'border-primary-500 bg-primary-50 shadow-lg scale-105 text-primary-700'
                                                : 'border-gray-200 hover:border-primary-300 hover:shadow-md text-gray-700'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 4: Quantity */}
                        {step === 4 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantidade Mensal Estimada</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {quantities.map((quantity) => (
                                        <button
                                            key={quantity}
                                            type="button"
                                            onClick={() => setConfig({ ...config, quantity })}
                                            className={`p-6 rounded-2xl border-2 transition-all duration-300 font-semibold ${config.quantity === quantity
                                                ? 'border-primary-500 bg-primary-50 shadow-lg scale-105 text-primary-700'
                                                : 'border-gray-200 hover:border-primary-300 hover:shadow-md text-gray-700'
                                                }`}
                                        >
                                            {quantity} unidades/mês
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 5: Contact Info */}
                        {step === 5 && (
                            <div className="animate-fade-in-up space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Seus Dados para Contato</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label">Nome Completo *</label>
                                        <input
                                            type="text"
                                            required
                                            value={config.name}
                                            onChange={(e) => setConfig({ ...config, name: e.target.value })}
                                            className="form-input"
                                            placeholder="Seu nome"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Empresa *</label>
                                        <input
                                            type="text"
                                            required
                                            value={config.company}
                                            onChange={(e) => setConfig({ ...config, company: e.target.value })}
                                            className="form-input"
                                            placeholder="Nome da empresa"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={config.email}
                                            onChange={(e) => setConfig({ ...config, email: e.target.value })}
                                            className="form-input"
                                            placeholder="seu@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Telefone *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={config.phone}
                                            onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                                            className="form-input"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">Observações Adicionais</label>
                                    <textarea
                                        value={config.observations}
                                        onChange={(e) => setConfig({ ...config, observations: e.target.value })}
                                        className="form-input min-h-[120px]"
                                        placeholder="Descreva detalhes específicos do seu projeto..."
                                    ></textarea>
                                </div>

                                {/* Summary */}
                                <div className="glass-green rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="text-xl mr-2">✓</span>
                                        Resumo do Orçamento
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Tipo:</strong> {bottleTypes.find(t => t.id === config.type)?.name}</p>
                                        <p><strong>Capacidade:</strong> {config.capacity}</p>
                                        <p><strong>Cor:</strong> {config.color}</p>
                                        <p><strong>Quantidade:</strong> {config.quantity} unidades/mês</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={step === 1}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${step === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                ← Voltar
                            </button>

                            {step < 5 ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    disabled={
                                        (step === 1 && !config.type) ||
                                        (step === 2 && !config.capacity) ||
                                        (step === 3 && !config.color) ||
                                        (step === 4 && !config.quantity)
                                    }
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${(step === 1 && !config.type) ||
                                        (step === 2 && !config.capacity) ||
                                        (step === 3 && !config.color) ||
                                        (step === 4 && !config.quantity)
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'btn-primary'
                                        }`}
                                >
                                    Próximo →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn-primary px-8"
                                >
                                    <span className="relative z-10">Solicitar Orçamento</span>
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
