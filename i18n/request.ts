export const locales = ["pt", "en"];

export async function getMessages(locale: string) {
    return (await import(`../content/${locale}.json`)).default;
};
