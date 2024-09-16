import TranslationMenu from "@/components/TranslationMenu";
import DarkModeButton from "@/components/DarkModeButton";

interface HeaderProps {
    nav: {
        links: string[],
        ids: string[],
    }
}

export default function Header({ nav }: HeaderProps) {

    return (
        <header className="h-24 w-full bg-rose-200 dark:bg-licorice drop-shadow-lg flex items-center text-xl">
            <nav className="w-[70rem] px-4 lg:px-0 mx-auto flex justify-between items-center">
                <div className="flex items-baseline">
                    <TranslationMenu />
                    <DarkModeButton />
                </div>
                <div>
                    {nav.links.map((link, index) => (
                        <a
                            key={index}
                            href={nav.ids[index]}
                            className="mr-8 transition-all duration-300"
                        >{link}</a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
