import { useTranslations } from "next-intl";
import TranslationMenu from "@header/TranslationMenu";
import DarkModeButton from "@header/DarkModeButton";

export default function Header() {
    const t = useTranslations("home.header.navigation");

    const nav = {
        links: [
            t("about"),
            t("languages"),
            t("projects")
        ],
        ids: [
            "#about",
            "#languages",
            "#projects"
        ]
    }

    return (
        <header className="sticky top-0 z-10 h-24 w-full bg-rose-200 dark:bg-licorice drop-shadow-lg flex items-center text-xl">
            <nav className="w-[70rem] px-4 mx-auto flex justify-between items-center">
                <div className="flex items-baseline">
                    <TranslationMenu />
                    <DarkModeButton />
                </div>
                <div>
                    {nav.links.map((link, index) => (
                        <a
                            key={index}
                            href={nav.ids[index]}
                            className="ml-8 transition-all duration-300"
                        >{link}</a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
