"use client"

import TranslationMenu from "@/components/TranslationMenu";
import MainLayout from "@/components/MainLayout";

export default function Home() {
    const nav = {
        links: [
            "Sobre",
            "Linguagens",
            "Projetos"
        ],
        ids: [
            "#about",
            "#languages",
            "#projects"
        ]
    }

    return (
        <>
            <header className="h-24 w-full bg-rose-200 drop-shadow-lg flex items-center text-xl">
                <nav className="w-[70rem] mx-auto flex justify-between items-center">
                    <div>
                    {nav.links.map((link, index) => (
                        <a
                            key={index}
                            href={nav.ids[index]}
                            className={`
                                mr-8 hover:font-medium transition-all duration-300 
                                before:content-['#'] before:text-wine before:mr-1 
                                before:opacity-0 before:hover:opacity-50 
                                before:transition-all before:duration-300
                            `}
                        >{link}</a>
                    ))}
                        </div>
                    <TranslationMenu />
                </nav>
            </header>
            <main
                className="h-full flex flex-col items-center justify-between p-0 lg:p-8 lg:p-24"
                style={{
                    backgroundImage: `url(/starry-background.png)`,
                    backgroundRepeat: "repeat-y",
                    backgroundAttachment: "scroll",
                    backgroundPosition: "top",
                    height: "100%"
                }}
            >
                <MainLayout />
            </main>
        </>
    );
}
