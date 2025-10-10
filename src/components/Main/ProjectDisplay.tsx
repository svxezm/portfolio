import { useTranslations } from "next-intl";
import { useScreenshot } from "@/hooks/useScreenshot";
import Image from "next/image";
import colorGenerator from "/assets/images/projects/color-generator.png";
import pls from "/assets/images/projects/pls.jpg";
import ticTacToe from "/assets/images/projects/tic-tac-toe.png";
import passwordGenerator from "/assets/images/projects/password-generator.webp";
import reactIcon from "/assets/images/icons/languages/react.svg";
import tsIcon from "/assets/images/icons/languages/typescript.svg";
import csharpIcon from "/assets/images/icons/languages/c-sharp.svg";
import rustIcon from "/assets/images/icons/languages/rust.svg";

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

    const projectInfo = [
        {
            title: t("colorGenerator"),
            description: tDesc("colorGenerator"),
            imagePath: colorGenerator,
            projectLink: "https://github.com/svxezm/color-generator",
            deployedLink: "https://color-generator-gqnc8z0th-igor-borges-projects-6e496d8b.vercel.app",
            languages: [reactIcon, tsIcon]
        },
        {
            title: t("pls"),
            description: tDesc("pls"),
            imagePath: pls,
            projectLink: "https://github.com/svxezm/pls",
            languages: [rustIcon]
        },
        {
            title: t("ticTacToe"),
            description: tDesc("ticTacToe"),
            imagePath: ticTacToe,
            projectLink: "https://github.com/svxezm/tic-tac-toe",
            deployedLink: "https://replit.com/join/yoieqhxyag-igorbkuhl",
            languages: [csharpIcon]
        },
        {
            title: t("passwordGenerator"),
            description: tDesc("passwordGenerator"),
            imagePath: passwordGenerator,
            projectLink: "https://github.com/svxezm/password_generator",
            deployedLink: "https://replit.com/join/lgjoasfsjg-igorbkuhl",
            languages: [csharpIcon]
        },
        {
            title: t("portfolio"),
            description: tDesc("portfolio"),
            imagePath: "",
            projectLink: "https://github.com/svxezm/portfolio",
            deployedLink: "#",
            languages: [reactIcon, tsIcon]
        },
    ];

    return (
        <section
            id="projects"
            className="w-full mx-auto lg:w-[50em]">
            <h3 className="pb-3">{projectsTitle}</h3>
                {projectInfo.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#f3d0fb40] dark:bg-[#631d4a40] w-full rounded-md p-4 mb-4 drop-shadow-lg"
                >
                    <div className="border-b border-b-[#450f57] mb-3 flex justify-between">
                        <h4>{project.title}</h4>
                    </div>
                    <div className="lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                        <Image
                            src={project.deployedLink === "#" ? useScreenshot() : project.imagePath}
                            width={390}
                            height={300}
                            alt={project.title}
                            title={project.title}
                            quality={100}
                            unoptimized
                            className={`
                                h-full w-full lg:h-[300px] lg:w-[390px]
                                ${project.deployedLink === "#" &&
                                    "lg:w-full object-cover"}
                            `}
                        />
                        <div className="p-3 flex flex-col">
                            <div>
                                <p className="mb-4">{project.description}</p>
                                {project.deployedLink && (
                                    <p>
                                        {deployed}
                                        <a
                                            href={project.deployedLink}
                                            target="_blank"
                                            className="underline hover:text-[#4c1048]"
                                        >
                                            {here}
                                        </a>.
                                    </p>
                                )}
                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    className="underline"
                                >
                                    {repository}
                                </a>
                            </div>
                            <div className="flex flex-row-reverse lg:mt-auto">
                                {project.languages.map((lang, langIndex) => {
                                    let iconTitle = (() => {
                                        switch(lang) {
                                            case reactIcon:
                                                return "React";
                                            case tsIcon:
                                                return "TypeScript";
                                            case csharpIcon:
                                                return "C#";
                                            default:
                                                return tAlts("alt");
                                        };

                                    })();

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
