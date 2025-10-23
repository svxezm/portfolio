import "../globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { getMessages } from "@lib/request";
import ClientProvider from "./ClientProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfólio",
    description: "Página portfólio de Igor Borges Kühl"
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
    const locales = ["pt", "en"];

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages(locale);

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={montserrat.className}>
                <ThemeProvider
                    attribute="class"
                    enableSystem={true}
                    defaultTheme="light">
                    <ClientProvider locale={locale} messages={messages}>
                        {children}
                    </ClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
