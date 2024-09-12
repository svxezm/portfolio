import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default function i18nMiddleware(request: NextRequest) {
    const { nextUrl } = request;

    const locales = ["pt", "en"];
    const defaultLocale = "pt";

    const preferredLocale = request.headers.get("accept-language")?.split(",")[0].split("-")[0] || defaultLocale;

    const locale = locales.includes(preferredLocale) ? preferredLocale : "en";

    if (!locales.some((loc) => nextUrl.pathname.startsWith(`/${loc}`))) {
        return NextResponse.redirect(new URL(`/${locale}${nextUrl.pathname}`, request.url));
    }

    return createMiddleware({
        locales,
        defaultLocale
    })(request);
}

export const config = {
    matcher: ["/", "/(pt|en)/:page*"],
};

