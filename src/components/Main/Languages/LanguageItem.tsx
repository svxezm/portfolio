import { useLanguage } from "@hooks/useLanguage";
import Image, { StaticImageData } from "next/image";
import Tooltip from "@utils/Tooltip";

interface LanguageItemProps {
  icon: string;
  text: string;
};

export default function LanguageItem({ icon, text }: LanguageItemProps) {
  const size = 80;
  text = useLanguage(text).format()

  return (
    <div className="relative">
      <Tooltip text={text}>
        <Image
          src={icon}
          alt={text}
          height={`${size}`}
          width={`${size}`}
          unoptimized
          className={`h-[${size}px] w-[${size}px] hover:scale-110`}
        />
      </Tooltip>
    </div>
  )
}
