'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call - In production, replace with actual backend endpoint
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Send to WhatsApp as backup
            const message = `
🔔 NOVO CONTATO - PLÁSTICOS GT

👤 Nome: ${formData.name}
🏢 Empresa: ${formData.company}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
📋 Assunto: ${formData.subject}

💬 Mensagem:
${formData.message}
      `.trim();

            window.open(`https://wa.me/5511994643577?text=${encodeURIComponent(message)}`, '_blank');

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: '',
            });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="section-container bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        Entre em Contato
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
                        Vamos Conversar sobre seu <span className="gradient-text">Projeto</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nossa equipe está pronta para atender você. Preencha o formulário ou entre em contato
                        pelos nossos canais diretos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="glass-green rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                                Informações de Contato
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                                        <p className="text-gray-600">(11) 4002-8922</p>
                                        <p className="text-gray-600">(11) 98765-4321</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">contato@plasticosgt.com.br</p>
                                        <p className="text-gray-600">vendas@plasticosgt.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                                        <p className="text-gray-600">Rua das Indústrias, 1234</p>
                                        <p className="text-gray-600">São Paulo - SP, 01234-567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Redes Sociais</h3>
                            <div className="flex space-x-4">
                                {[
                                    { icon: '📘', name: 'Facebook', href: '#' },
                                    { icon: '📸', name: 'Instagram', href: '#' },
                                    { icon: '💼', name: 'LinkedIn', href: '#' },
                                    { icon: '▶️', name: 'YouTube', href: '#' },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all duration-300 group"
                                        title={social.name}
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label">Nome Completo *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="form-input"
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Empresa</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="form-input"
                                        placeholder="Nome da empresa"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="form-input"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Telefone *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="form-input"
                                        placeholder="(11) 972362554"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="form-label">Assunto *</label>
                                <select
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="form-input"
                                >
                                    <option value="">Selecione um assunto</option>
                                    <option value="Orçamento">Solicitar Orçamento</option>
                                    <option value="Projeto Customizado">Projeto Customizado</option>
                                    <option value="Dúvidas Técnicas">Dúvidas Técnicas</option>
                                    <option value="Parcerias">Parcerias</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>

                            <div>
                                <label className="form-label">Mensagem *</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="form-input min-h-[150px]"
                                    placeholder="Descreva sua necessidade ou dúvida..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading-spinner mr-2"></span>
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Mensagem'
                                    )}
                                </span>
                            </button>

                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in-up">
                                    ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in-up">
                                    ❌ Erro ao enviar mensagem. Por favor, tente novamente.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
