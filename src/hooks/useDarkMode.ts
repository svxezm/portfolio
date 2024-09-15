import { useState, useEffect } from "react";

export default function useDarkMode(initialState) {
    const [darkMode, setDarkMode] = useState(true);
    const html = document.querySelector("html");

    useEffect(() => {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        if (darkMode && html.classList.length === 0) {
            html.classList.add("dark");
        }
    }, []);

    const switchTheme = () => {
        setDarkMode(!darkMode)
        html.classList.toggle("dark");
    }

    return {
      darkMode,
      setDarkMode,
      switchTheme
    };
}
