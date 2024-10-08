import { useTranslations } from "next-intl";
import LanguageItem from "./LanguageItem";
import csIcon from "/assets/images/icons/languages/c-sharp.png";
import reactIcon from "/assets/images/icons/languages/react.webp";
import vueIcon from "/assets/images/icons/languages/vue.webp";
import tsIcon from "/assets/images/icons/languages/typescript.png";
import cssIcon from "/assets/images/icons/languages/css.png";
import htmlIcon from "/assets/images/icons/languages/html.png";

export default function LanguageBlock() {
    const t = useTranslations("Home.main.languages");

    const languageInfos = {
        labels: [
            t("titles.idioms"),
            t("titles.languages")
        ],
        iconPaths: [
            csIcon,
            reactIcon,
            vueIcon,
            tsIcon,
            cssIcon,
            htmlIcon
        ],
        titles: [
            [
                t("portuguese"),
                t("english")
            ],
            [
                "C#",
                "React",
                "Vue",
                "TypeScript",
                "CSS",
                "HTML"
            ]
        ]
    }

    const { labels, iconPaths, titles } = languageInfos;

    return (

    <section
        id="languages"
        className={
        `flex flex-col lg:justify-evenly items-baseline text-center 
        mx-auto lg:w-full lg:p-8`
    }>
        {labels.map((label, index) => (
            <div
                key={index}
                className="flex flex-col flex-wrap mx-auto lg:mx-0"
            >
                <h3 className="w-full text-center lg:text-left mb-4">{label}</h3>
                {index === 0 ? (
                    <div className="flex flex-col lg:text-left mb-8">
                    {titles[index].map((title, titleIndex) => (
                        <p
                            key={titleIndex}
                            className="text-lg"
                        >{title}</p>
                    ))}
                    </div>
                ) : (
                    <div className={
                        `flex flex-wrap lg:justify-evenly m-auto mb-8 w-[80%] lg:w-full
                        justify-center lg:justify-start`
                    }>
                    {iconPaths.map((icon, iconIndex) => (
                        <div
                            key={iconIndex}
                            className="flex flex-col mb-12 mx-2 lg:m-2"
                        >
                            <LanguageItem icon={icon} text={titles[index][iconIndex]} />
                        </div>
                    ))}
                    </div>
                )}
                </div>
            ))}
        </section>
    )
}
