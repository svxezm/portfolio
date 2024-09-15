import { useState, useEffect } from "react";

export default function useDarkMode(initialState) {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const html = document.querySelector("html");
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (darkMode && html.classList.length === 0) {
            html.classList.add("dark");
        }
    }, [darkMode]);

    const switchTheme = () => {
        const html = document.querySelector("html");
        setDarkMode(!darkMode)
        html.classList.toggle("dark");
    }

    return {
      darkMode,
      switchTheme
    };
}
