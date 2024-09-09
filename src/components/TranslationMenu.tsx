import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function TranslationMenu() {
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    return (
        <>
            <div
                className="relative"
                onMouseLeave={() => setIsLangMenuOpen(false)}>
                <button
                    className="ml-6 inline-flex items-center"
                    onClick={toggleLangMenu}>
                    Traduções
                    <GlobeAltIcon className="ml-1 size-6 text-wine/50" />
                </button>
                <div
                    className={`
                        absolute end-0 flex flex-col 
                        overflow-hidden transition-all duration-300 bg-rose-300 
                        ${isLangMenuOpen ? "max-h-24 p-4": "max-h-0 p-0"}
                    `}
                >
                    <a href="#">Português</a>
                    <a href="#">English</a>
                </div>
            </div>
        </>
    )
}
