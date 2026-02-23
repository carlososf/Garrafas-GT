'use client';

import { getImagePath } from '@/lib/utils';

export default function ClientsCarousel() {
    const clients = [
        { name: 'Partner Alpha', logo: getImagePath('/images/clients/client-1.png') },
        { name: 'Partner Beta', logo: getImagePath('/images/clients/client-2.png') },
        { name: 'Partner Gamma', logo: getImagePath('/images/clients/client-3.png') },
        { name: 'Partner Delta', logo: getImagePath('/images/clients/client-4.png') },
        { name: 'Partner Epsilon', logo: getImagePath('/images/clients/client-5.png') },
        { name: 'Partner Zeta', logo: getImagePath('/images/clients/client-6.png') },
    ];

    return (
        <section className="bg-white py-24 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Trusted By Global Brands</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
                    {clients.map((client, i) => (
                        <div key={i} className="group cursor-default">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-8 md:h-12 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-black uppercase tracking-widest text-gray-400">${client.name}</span>`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
