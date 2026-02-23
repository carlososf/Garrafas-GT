'use client';

const differentials = [
    {
        id: '01',
        title: 'Ferramentaria Própria',
        description: 'Engenharia de precisão in-house para moldes customizados e ajustes milimétricos instantâneos.',
        icon: '🏭'
    },
    {
        id: '02',
        title: 'Ecossistema 3D',
        description: 'Modelagem avançada e prototipagem virtual que reduzem o time-to-market drasticamente.',
        icon: '📐'
    },
    {
        id: '03',
        title: 'Supply Chain Ágil',
        description: 'Logística integrada e estoque estratégico para garantir entregas em tempo recorde.',
        icon: '⚡'
    },
    {
        id: '04',
        title: 'Eco-Performance',
        description: 'Compromisso com polímeros recicláveis e processos de baixo impacto energético.',
        icon: '🌱'
    }
];

export default function Differentials() {
    return (
        <section id="diferenciais" className="bg-black py-[var(--section-padding)] overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-8">
                        <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">
                            Our Advantage
                        </span>
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-black uppercase text-white">
                            Engenharia <br />
                            <span className="text-primary-500">superior</span> <br />
                            em cada detalhe.
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                    {differentials.map((item) => (
                        <div key={item.id} className="bg-black p-12 transition-all duration-500 hover:bg-white group cursor-default">
                            <span className="block text-primary-500 text-xs font-black mb-12 tracking-widest group-hover:text-black">
                                {item.id} /
                            </span>
                            <div className="text-4xl mb-8 transform transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                                {item.icon}
                            </div>
                            <h3 className="text-white text-2xl font-black uppercase mb-6 group-hover:text-black transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="mt-24 flex flex-col items-center text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Ready to start?</p>
                    <a href="#contato" className="group flex flex-col items-center">
                        <span className="text-white text-4xl lg:text-7xl font-black uppercase mb-4 transition-all duration-500 group-hover:text-primary-500">
                            Falar com um Especialista
                        </span>
                        <div className="w-0 h-[4px] bg-primary-500 transition-all duration-500 group-hover:w-full"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
