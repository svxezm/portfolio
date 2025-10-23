import { useTranslations } from "next-intl";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function TranslationMenu() {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const t = useTranslations("home.header");
  const translationText = t("translations");

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  return (
    <>
      <div
        className="relative"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false)
          setIsLangMenuOpen(false)
        }}
      >
        <button
          className="mr-6 inline-flex items-center"
          onClick={toggleLangMenu}
        >
          <GlobeAltIcon
            className={`
              mr-1 size-6
              ${isHover
                ? "text-wine dark:text-rose-200"
                : "text-wine/50 dark:text-bubblegum/50"
              }
            `}
          />
          <span className={`${isHover ? "dark:text-rose-200" : ""}`}>
            {translationText}
          </span>
        </button>
        <div
          className={`
            absolute end-0 flex flex-col rounded-b-lg w-full
            overflow-hidden transition-all duration-300 bg-rose-200 dark:bg-licorice
            ${isLangMenuOpen ? "max-h-24 p-4" : "max-h-0 p-0"}
          `}
        >
          <a href="/pt">Português</a>
          <a href="/en">English</a>
        </div>
      </div>
    </>
  );
}
