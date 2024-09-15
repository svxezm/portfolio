import { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { MoonStar, Sun } from "lucide-react";

export default function DarkModeButton() {
    const { darkMode, switchTheme } = useDarkMode();

    const changeTheme = () => {
        switchTheme();
    }

    return (
        <button
            onClick={changeTheme}
            className="rounded-full text-wine/50 dark:text-bubblegum/50 hover:text-wine dark:hover:text-bubblegum p-2 transition">
        {darkMode === false ? (
            <Sun />
        ) : (
            <MoonStar />
        )}
        </button>
    )
}
