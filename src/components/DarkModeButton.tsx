import { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { MoonStar, Sun } from "lucide-react";

export default function DarkModeButton() {
    const { darkMode, switchTheme } = useDarkMode();

    return (
        <button
            onClick={switchTheme}
            className="rounded-full text-wine/50 dark:text-bubblegum/50 
            hover:text-amber-500 dark:hover:text-slate-300 p-2 transition">
        {darkMode === false ? (
            <Sun />
        ) : (
            <MoonStar />
        )}
        </button>
    )
}
