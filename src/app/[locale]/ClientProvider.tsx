"use client"

import { ReactNode } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

interface ClientProps {
    children: ReactNode;
    locale: any;
    messages: AbstractIntlMessages;
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
