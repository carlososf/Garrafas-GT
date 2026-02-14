import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Plásticos GT | Soluções em Embalagens Plásticas Sopradas e Injetadas",
    description: "Indústria de embalagens plásticas de alta qualidade. Frascos, potes e embalagens personalizadas para cosméticos, alimentos, higiene e limpeza. Ferramentaria própria e projetos customizados.",
    keywords: "embalagens plásticas, frascos plásticos, potes plásticos, PEAD, embalagens sopradas, embalagens injetadas, ferramentaria, moldes customizados, cosméticos, alimentos, higiene, limpeza",
    authors: [{ name: "Plásticos GT" }],
    openGraph: {
        title: "Plásticos GT | Soluções em Embalagens Plásticas",
        description: "Qualidade que molda o futuro. Embalagens plásticas personalizadas com ferramentaria própria.",
        type: "website",
        locale: "pt_BR",
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased custom-scrollbar">
                {children}
            </body>
        </html>
    );
}
