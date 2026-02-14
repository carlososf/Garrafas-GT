'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Catalog from '@/components/Catalog';
import Differentials from '@/components/Differentials';
import ClientsCarousel from '@/components/ClientsCarousel';
import Institutional from '@/components/Institutional';
import ProjectConfigurator from '@/components/ProjectConfigurator';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
            <Hero />
            <VideoSection />
            <Catalog />
            <Institutional />
            <Differentials />
            <ClientsCarousel />
            <ProjectConfigurator />
            <ContactForm />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
