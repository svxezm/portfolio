import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ["pt", "en"];

const middleware = createMiddleware({
    locales,
    defaultLocale: "pt",
});

export default function i18nMiddleware(request) {
    const pathname = request.nextUrl.pathname;
    const locale = pathname.split('/')[1];

    if (!locales.includes(locale)) {
        return NextResponse.redirect(new URL(`/${locales[0]}`, request.url));
    }

    return middleware(request);
}

export const config = {
    matcher: ["/", "/(pt|en)/:page*"],
};

