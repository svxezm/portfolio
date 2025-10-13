"use client"

import { useState, useEffect } from "react";
import Header from "@src/components/Header/Header";
import MainLayout from "@src/components/Main/MainLayout";
import starryBackground from "@images/starry-background.png";

export default function Home() {
    const [isWindowLarge, setIsWindowLarge] = useState(false);


    useEffect(() => {
        const breakpoint = 1024;

        if (window.innerWidth >= breakpoint) {
            setIsWindowLarge(true);
        }
    }, []);

    return (
        <>
            <Header />
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
