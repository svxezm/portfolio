"use client"

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import TranslationMenu from "@/components/TranslationMenu";
import MainLayout from "@/components/MainLayout";
import starryBackground from "/public/starry-background.png";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 1024;

    const t = useTranslations("Home.header.navigation");

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

    useEffect(() => {
        const handleResizeWindow = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);

    return (
        <>
            <header className="h-24 w-full bg-rose-200 drop-shadow-lg flex items-center text-xl">
                <nav className="w-[70rem] px-4 lg:px-0 mx-auto flex justify-between items-center">
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
                style={
                    windowWidth >= breakpoint ? {
                        backgroundImage: `url(${starryBackground.src})`,
                        backgroundRepeat: "repeat-y",
                        backgroundAttachment: "scroll",
                        backgroundPosition: "top",
                        height: "100%"
                    } : {
                        height: "100%"
                    }
                }
            >
                <MainLayout />
            </main>
        </>
    );
}
