"use client"

import { ReactNode } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

const timeZone = "America/Sao_Paulo";

interface ClientProps {
    children: ReactNode;
    locale: string;
    messages: AbstractIntlMessages;
}

export default function ClientProps({
    children, locale, messages
}: ClientProps) {
    return (
        <NextIntlClientProvider timeZone={timeZone} locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
