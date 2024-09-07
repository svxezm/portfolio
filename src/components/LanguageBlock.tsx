import Image from "next/image";
import csIcon from "/assets/images/icons/languages/c-sharp.png";
import reactIcon from "/assets/images/icons/languages/react.webp";
import vueIcon from "/assets/images/icons/languages/vue.webp";
import tsIcon from "/assets/images/icons/languages/typescript.png";
import cssIcon from "/assets/images/icons/languages/css.png";
import htmlIcon from "/assets/images/icons/languages/html.png";

export default function LanguageBlock() {
    const languageInfos = {
        labels: [
            "Idiomas",
            "Linguagens"
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
                "🇧🇷 Português Brasileiro - nativo",
                "🇺🇸 Inglês - intermediário"
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

    <section className={
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
                            className="flex flex-col m-2"
                        >
                            <Image
                                src={icon}
                                alt={titles[index][iconIndex]}
                                title={titles[index][iconIndex]}
                                height="80"
                                width="80"
                                unoptimized
                                className="max-h-[80px] max-w-[80px]"
                            />
                            <span className="text-center">{titles[index][iconIndex]}</span>
                        </div>
                    ))}
                    </div>
                )}
                </div>
            ))}
        </section>
    )
}
