import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface LanguageItemProps {
    icon: StaticImageData;
    text: string;
}

export default function LanguageItem({ icon, text }: LanguageItemProps) {
    const [isHover, setIsHover] = useState(false);
    const size = 80;

    return (
        <div
            className="relative">
            <Image
                src={icon}
                alt={text}
                height={`${size}`}
                width={`${size}`}
                unoptimized
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`h-[${size}px] w-[${size}px] hover:scale-110`}
            />
            <span
                className={`absolute -translate-x-1/2 mt-2 whitespace-normal 
                    rounded-lg bg-purple-dark/75 dark:bg-licorice py-1.5 px-3 text-sm 
                    text-rose-200 transition-opacity select-none z-10 text-nowrap
                    ${!isHover ? "opacity-0" : "opacity-100"}
                `}>
                {text}
            </span>
        </div>
    )
}
