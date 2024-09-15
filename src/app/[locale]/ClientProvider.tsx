"use client"

import { ReactNode } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

const timeZone = "Ameria/Bahia";

interface ClientProps {
    children: ReactNode;
    locale: any;
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
