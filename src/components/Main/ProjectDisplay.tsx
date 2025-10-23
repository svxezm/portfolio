import { useState, useEffect } from "react";
import { getImage } from "@lib/request";
import { useScreenshot } from "@hooks/useScreenshot";
import { useLanguage } from "@hooks/useLanguage";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Project {
    title: string;
    description: string | unknown;
    repository_url: string;
    deployed_url: string;
    languages: string;
    image_title: string;
}

export default function ProjectDisplay() {
    const [projects, setProjects] = useState<Project[]>([]);

    const t = useTranslations("home.main.projects");
    const tAlts = useTranslations("home.main.projects.iconTitles");

    const sectionTitle = t("title");
    const deployed = t("links.deployed");
    const here = t("links.here");
    const repository = t("links.repository");
    const descriptions = Object.values(t.raw("descriptions"));

    useEffect(() => {
        (async () => {
            const fetchProjects = async () => {
                const response = await fetch("/api/projects");
                const results: Project[] = await response.json();

                const handledProjects = results.map((result, index) => {
                    return {
                        ...result,
                        description: descriptions[index]
                    }
                });
                setProjects(handledProjects);
            };
            await fetchProjects();
        })();
    }, []);

    const portfolioImage = useScreenshot();

    return (
        <section
            id="projects"
            className="w-full mx-auto lg:w-[50em]">
            <h3 className="pb-3">{sectionTitle}</h3>
            {projects.map((project, index) => {
                const projectImage = project.deployed_url === "#"
                    ? portfolioImage : getImage(`/projects/${project.image_title}`);

                return (
                    <div
                        key={index}
                        className="bg-[#f3d0fb40] dark:bg-[#631d4a40] w-full rounded-md p-4 mb-4 drop-shadow-lg"
                    >
                        <div className="border-b border-b-[#450f57] mb-3 flex justify-between">
                            <h4>{project.title}</h4>
                        </div>
                        <div className="lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                            <Image
                                src={projectImage}
                                width={390}
                                height={300}
                                alt={project.title}
                                title={project.title}
                                quality={100}
                                unoptimized
                                className={`
                                    h-full w-full lg:h-[300px] lg:w-[390px]
                                    ${project.deployed_url === "#" &&
                                        "lg:w-full object-cover"}
                                `}
                            />
                            <div className="p-3 flex flex-col">
                                <div>
                                    <p className="mb-4">{project.description as string}</p>
                                    {project.deployed_url && (
                                        <p>
                                            {deployed}
                                            <a
                                                href={project.deployed_url}
                                                target="_blank"
                                                className="underline hover:text-[#4c1048]"
                                            >
                                                {here}
                                            </a>.
                                        </p>
                                    )}
                                    <a
                                        href={project.repository_url}
                                        target="_blank"
                                        className="underline"
                                    >
                                        {repository}
                                    </a>
                                </div>
                                <div className="flex flex-row-reverse lg:mt-auto">
                                    {project.languages.split(",").map((lang, langIndex) => {
                                        const iconTitle = useLanguage().format(lang, tAlts("alt"));
                                        const altTitle = tAlts("main", { title: iconTitle });

                                        return (
                                            <Image
                                                key={langIndex}
                                                src={getImage(`icons/languages/${lang}.svg`)}
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
                );
            })}
        </section>
    )
}
