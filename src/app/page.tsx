"use client"

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";

export default function Home() {
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    return (
        <>
            <header className="h-24 w-full bg-rose-200 drop-shadow-lg flex items-center justify-end">
                <nav className="mr-8 relative">
                    <button onClick={toggleLangMenu}>Idiomas</button>
                    <div
                    className={`
                        absolute end-0 flex flex-col 
                        overflow-hidden transition-all duration-300 bg-rose-300 
                        ${isLangMenuOpen ? "max-h-72 p-4" : "max-h-0 p-0"}
                    `}>
                        <a href="#" className="mr-2">Português</a>
                        <a href="#">English</a>
                    </div>
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
