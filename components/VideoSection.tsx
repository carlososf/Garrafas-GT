'use client';

import { getImagePath } from '@/lib/utils';

export default function VideoSection() {
    return (
        <section className="relative py-16 bg-white overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-20"></div>

            <div className="section-container relative z-10">
                {/* Minimal Header */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-primary-50 px-5 py-2 rounded-full mb-4">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span className="text-primary-700 text-sm font-medium">Nossa Empresa</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">
                        Veja Como <span className="text-primary-500">Trabalhamos</span>
                    </h2>
                </div>

                {/* Floating Video Container */}
                <div
                    className="relative max-w-5xl mx-auto animate-fade-in-up animate-float"
                    style={{ animationDelay: '0.2s' }}
                >
                    {/* Lightweight Video Wrapper */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        {/* Video Element - Autoplay, Loop, Muted */}
                        <div className="relative aspect-video bg-gray-100">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={getImagePath('/video-thumbnail.jpg')}
                            >
                                <source src={getImagePath('/company-video.mp4')} type="video/mp4" />
                                <source src={getImagePath('/company-video.webm')} type="video/webm" />
                            </video>

                            {/* Subtle Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Minimal Border Accent */}
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 pointer-events-none"></div>
                    </div>

                    {/* Floating Stats - Minimal Design */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                        {[
                            { icon: '🏭', label: 'Fábrica', value: '5.000m²' },
                            { icon: '⚙️', label: 'Máquinas', value: '20+' },
                            { icon: '👥', label: 'Equipe', value: '100+' },
                            { icon: '🌍', label: 'Clientes', value: '500+' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center animate-fade-in-up"
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-bold text-gray-900 font-display">{stat.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Minimal CTA */}
                <div className="text-center mt-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-sm text-gray-500 mb-3">Quer conhecer nossa fábrica?</p>
                    <a
                        href="#contato"
                        className="inline-block px-6 py-2.5 bg-primary-500 text-white rounded-lg font-medium text-sm hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    >
                        Agendar Visita
                    </a>
                </div>
            </div>
        </section>
    );
}
