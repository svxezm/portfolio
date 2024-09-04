import Image from "next/image";
import csIcon from "/assets/images/icons/languages/c-sharp.png";
import reactIcon from "/assets/images/icons/languages/react.webp";
import vueIcon from "/assets/images/icons/languages/vue.webp";
import tsIcon from "/assets/images/icons/languages/typescript.png";
import cssIcon from "/assets/images/icons/languages/css.png";
import htmlIcon from "/assets/images/icons/languages/html.png";
import pyIcon from "/assets/images/icons/languages/python.webp";
import cppIcon from "/assets/images/icons/languages/cpp.png";
import cIcon from "/assets/images/icons/languages/c.webp";
import rustIcon from "/assets/images/icons/languages/rust.webp";
import nixIcon from "/assets/images/icons/languages/nix.webp";
import sqliteIcon from "/assets/images/icons/languages/sqlite.webp";

export default function LanguageBlock() {
    const languageInfos = {
        labels: [
            "Tenho conhecimento em",
            "Pretendo estudar"
        ],
        iconPaths: [
            [
                csIcon,
                reactIcon,
                vueIcon,
                tsIcon,
                cssIcon,
                htmlIcon
            ],
            [
                pyIcon,
                cppIcon,
                cIcon,
                rustIcon,
                nixIcon,
                sqliteIcon
            ]
        ],
        titles: [
            [
                "C#",
                "React",
                "Vue",
                "TypeScript",
                "CSS",
                "HTML"
            ],
            [
                "Python",
                "C++",
                "C",
                "Rust",
                "Nix",
                "SQLite"
            ]
        ]
    }

    const { labels, iconPaths, titles } = languageInfos;

    return (

    <section className={
        /*styles.languageContainer*/
        `flex flex-col lg:flex-row lg:justify-evenly items-baseline text-center mx-auto w-[80%]`
    }>
            {labels.map((label, index) => (
                <div
                    key={index}
                    className="flex flex-col flex-wrap mx-auto"
                >
                    <h3 className="w-full text-center">{label}</h3>
                    <div className={
                        `flex flex-wrap lg:justify-evenly m-auto mb-8 w-[80%]
                        justify-center`
                    }>
                        {iconPaths[index].map((icon, iconIndex) => (
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
                                    className="max-h-[80px] max-w-[80px]"
                                />
                                <span className="text-center">{titles[index][iconIndex]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
