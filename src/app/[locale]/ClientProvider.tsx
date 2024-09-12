"use client"

import { NextIntlClientProvider } from "next-intl";

interface ClientProps {
    children: ReactNode;
    locale: string;
    messages: string;
}

export default function ClientProvider({
    children, locale, messages
}: ClientProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
