import Image from "next/image";
import csIcon from "/assets/images/icons/languages/c-sharp.webp";
import reactIcon from "/assets/images/icons/languages/react.webp";
import vueIcon from "/assets/images/icons/languages/vue.webp";
import jsIcon from "/assets/images/icons/languages/javascript.webp";
import cssIcon from "/assets/images/icons/languages/css.webp";
import htmlIcon from "/assets/images/icons/languages/html.webp";
import rustIcon from "/assets/images/icons/languages/rust.webp";
import pyIcon from "/assets/images/icons/languages/python.webp";
import cIcon from "/assets/images/icons/languages/c.webp";
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
                jsIcon,
                cssIcon,
                htmlIcon
            ],
            [
                rustIcon,
                pyIcon,
                cIcon,
                nixIcon,
                sqliteIcon
            ]
        ],
        titles: [
            [
                "C#",
                "React",
                "Vue",
                "JavaScript",
                "CSS",
                "HTML"
            ],
            [
                "Rust",
                "Python",
                "C",
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
                <div className="flex flex-col flex-wrap mx-auto">
                    <h3 className="w-full text-center">{label}</h3>
                    <div className={
                        `flex flex-wrap lg:justify-evenly m-auto mb-8 w-[80%]
                        justify-center`
                    }>
                        {iconPaths[index].map((icon, iconIndex) => (
                            <div className="flex flex-col m-2">
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
