"use client"

import { NextIntlClientProvider } from "next-intl";

export default function ClientProvider({ children, locale, messages }) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
