"use client"

import { ReactNode } from "react";
import {
  NextIntlClientProvider,
  AbstractIntlMessages
} from "next-intl";

const timeZone = "America/Sao_Paulo";

interface Client {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export default function ClientProvider({
  children, locale, messages
}: Client) {
  return (
    <NextIntlClientProvider
      timeZone={timeZone}
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}
