import "../globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { locales,  getMessages } from "@/src/i18n";
import ClientProvider from "./ClientProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfólio",
    description: "Página portfolio de Igor Borges Kühl"
};

interface LayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default async function RootLayout({
    children, params
}: LayoutProps) {
    const { locale } = params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body className={montserrat.className}>
                <ClientProvider locale={locale} messages={messages}>
                    {children}
                </ClientProvider>
            </body>
        </html>
    );
}
