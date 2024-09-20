import { useTranslations } from "next-intl";
import Image from "next/image";
import colorGenerator from "/assets/images/projects/color-generator.png";
import ticTacToe from "/assets/images/projects/tic-tac-toe.png";
import passwordGenerator from "/assets/images/projects/password-generator.webp";
import portfolio from "/assets/images/projects/portfolio.webp";
import reactIcon from "/assets/images/icons/languages/react.webp";
import tsIcon from "/assets/images/icons/languages/typescript.png";
import csharpIcon from "/assets/images/icons/languages/c-sharp.png";

export default function ProjectDisplay() {
    const t = useTranslations("Home.main.projects.titles");
    const tTitle = useTranslations("Home.header.navigation");
    const tDesc = useTranslations("Home.main.projects.descriptions");
    const tLink = useTranslations("Home.main.projects.links");
    const tAlts = useTranslations("Home.main.projects.iconTitles");

    const projectsTitle = tTitle("projects");
    const deployed = tLink("deployed");
    const here = tLink("here");
    const repository = tLink("repository");

    const projInfos = {
        titles: [
            t("colorGenerator"),
            t("ticTacToe"),
            t("passwordGenerator"),
            t("portfolio")
        ],
        descriptions: [
            tDesc("colorGenerator"),
            tDesc("ticTacToe"),
            tDesc("passwordGenerator"),
            tDesc("portfolio")
        ],
        imagePaths: [
            colorGenerator,
            ticTacToe,
            passwordGenerator,
            portfolio
        ],
        projectLinks: [
            "https://github.com/svxezm/color-generator",
            "https://github.com/svxezm/tic-tac-toe",
            "https://github.com/svxezm/password-generator",
            "https://github.com/svxezm/portfolio"
        ], 
        deployedLinks: [
            "https://color-generator-gqnc8z0th-igor-borges-projects-6e496d8b.vercel.app",
            "https://replit.com/join/yoieqhxyag-igorbkuhl",
            "https://replit.com/join/lgjoasfsjg-igorbkuhl",
            "#"
        ],
        languages: [
            [reactIcon, tsIcon],
            [csharpIcon],
            [csharpIcon],
            [reactIcon, tsIcon]
        ]
    }

    const { titles, descriptions, imagePaths, projectLinks, deployedLinks, languages } = projInfos;

    return (
        <section
            id="projects"
            className="w-full mx-auto lg:w-[50em]">
            <h3 className="pb-3">{projectsTitle}</h3>
                {titles.map((title, index) => (
                <div
                    key={index}
                    className="bg-[#f3d0fb40] dark:bg-[#631d4a40] w-full rounded-md p-4 mb-4 drop-shadow-lg"
                >
                    <div className="border-b border-b-[#450f57] mb-3 flex justify-between">
                        <h4>{title}</h4>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            src={imagePaths[index]}
                            alt={titles[index]}
                            title={titles[index]}
                            quality={100}
                            unoptimized
                            className="h-full w-full lg:h-[300px] lg:w-[390px]"
                        />
                        <div className="p-3 flex flex-col">
                            <div>
                                <p className="mb-4">{descriptions[index]}</p>
                                <p>
                                    {deployed}
                                    <a
                                        href={deployedLinks[index]}
                                        target="_blank"
                                        className="underline hover:text-[#4c1048]"
                                    >
                                        {here}
                                    </a>.
                                </p>
                                <a
                                    href={projectLinks[index]}
                                    target="_blank"
                                    className="underline"
                                >
                                    {repository}
                                </a>
                            </div>
                            <div className="flex flex-row-reverse mt-auto">
                                {languages[index].map((lang, langIndex) => {
                                    let iconTitle = "";

                                    switch(lang) {
                                        case reactIcon:
                                            iconTitle = "React";
                                            break;
                                        case tsIcon:
                                            iconTitle = "TypeScript";
                                            break;
                                        case csharpIcon:
                                            iconTitle = "C#";
                                            break;
                                        default:
                                            iconTitle = tAlts("alt");
                                            break;
                                    };

                                    const altTitle = tAlts("main", { title: iconTitle });

                                    return (
                                        <Image
                                            key={langIndex}
                                            src={lang}
                                            alt={altTitle}
                                            title={altTitle}
                                            height="30"
                                            width="30"
                                            className="ml-2"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
