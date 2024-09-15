import { useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import $ from "jquery";


export default function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        setDarkMode(!darkMode);
        $("html").toggleClass("dark");
    }

    return (
        <button
            onClick={changeTheme}
            className="rounded-full text-wine/50 dark:text-bubblegum/50 hover:text-wine p-2 transition">
        {darkMode === false ? (
            <Sun />
        ) : (
            <MoonStar />
        )}
        </button>
    )
}
