import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface LanguageItemProps {
    icon: StaticImageData;
    alt: string;
}

    export default const LanguageItem: React.FC<LanguageItemProps> = ({ icon, text }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="relative">
            <Image
                src={icon.src}
                alt={text}
                height="80"
                width="80"
                unoptimized
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="max-h-[80px] max-w-[80px] hover:scale-110"
            />
            <span
                className={`absolute -translate-x-1/2 mt-2 whitespace-normal 
                    rounded-lg bg-purple-dark/75 py-1.5 px-3 text-sm 
                    text-rose-200 transition-opacity select-none z-10 
                    ${!isHover ? "opacity-0" : "opacity-100"}
                `}>
                {text}
            </span>
        </div>
    )
}
