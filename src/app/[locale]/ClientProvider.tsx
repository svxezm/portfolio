"use client"

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

interface ClientProps {
    children: ReactNode;
    locale: any;
    messages: string;
}

export default function ClientProps({
    children, locale, messages
}: ClientProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
