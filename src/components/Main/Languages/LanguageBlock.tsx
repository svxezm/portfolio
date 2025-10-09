import { useTranslations } from "next-intl";
import LanguageItem from "./LanguageItem";
import tsIcon from "/assets/images/icons/languages/typescript.svg";
import reactIcon from "/assets/images/icons/languages/react.svg";
import rustIcon from "/assets/images/icons/languages/rust.svg";
import cIcon from "/assets/images/icons/languages/c.svg";
import cppIcon from "/assets/images/icons/languages/cpp.svg";
import csharpIcon from "/assets/images/icons/languages/c-sharp.svg";

export default function LanguageBlock() {
    const t = useTranslations("Home.main.languages");
    const title = t("titles.languages");

    const languageInfo = [
        {
            label: "Main",
            icons: [
                tsIcon,
                reactIcon,
                rustIcon
            ],
            titles: [
                "TypeScript",
                "React",
                "Rust"
            ]
        },
        {
            label: "Functional",
            icons: [
                cIcon,
                cppIcon,
                csharpIcon
            ],
            titles: [
                "C",
                "C++",
                "C#"
            ]
        }
    ];

    return (
        <section
            id="languages"
            className={
            `flex flex-col lg:justify-evenly items-baseline text-center
            mx-auto lg:w-full lg:px-8 mb-12 lg:mb-8`
        }>
            <div className="flex flex-col flex-wrap mx-auto lg:mx-0 w-full">
                <h3 className="w-full text-center lg:text-left mb-4 w-fit">{title}</h3>
                <div className="flex flex-col lg:flex-row justify-between">
                    {languageInfo.map((info, index) => (
                        <div
                            key={index}
                            className={
                                `flex flex-col flex-wrap lg:justify-evenly m-auto mb-4 w-fit
                                justify-center lg:justify-start`
                            }
                        >
                            <h4>{info.label}</h4>
                            <div className="flex flex-row">
                                {info.icons.map((icon, iconIndex) => (
                                    <div
                                        key={iconIndex}
                                        className="flex flex-col mx-2 lg:m-2"
                                    >
                                        <LanguageItem icon={icon} text={info.titles[iconIndex]} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
