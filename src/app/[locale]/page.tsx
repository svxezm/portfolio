"use client"

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import starryBackground from "/public/starry-background.png";

export default function Home() {
    const [isWindowLarge, setIsWindowLarge] = useState(false);

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
        const breakpoint = 1024;

        if (window.innerWidth >= breakpoint) {
            setIsWindowLarge(true);
        }
    }, []);

    return (
        <>
            <Header nav={nav} />
            <main
                className="h-full flex flex-col items-center justify-between p-0 lg:p-8 lg:p-24"
                style={
                    isWindowLarge === true ? {
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
