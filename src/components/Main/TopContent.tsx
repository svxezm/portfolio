import { useTranslations } from "next-intl";
import Image from "next/image"
import discordIcon from "@social_icons/discord.webp";
import githubIcon from "@social_icons/github.webp";
import linkedinIcon from "@social_icons/linkedin.png";
import profilePicture from "@images/foto-de-perfil.jpg";

export default function TopContent() {
    const t = useTranslations("Home.main.top");

    const subtitle = t("subtitle");
    const resume = t("resume");
    const contacts = t("contacts");

    const contactInfo = {
        iconPaths: [
            githubIcon,
            discordIcon,
            linkedinIcon
        ],
        titles: [
            "Github",
            "Discord",
            "Linkedin"
        ],
        urls: [
            "https://github.com/svxezm",
            "https://discord.com/users/1201863684117504020",
            "https://www.linkedin.com/in/igor-borges-k%C3%BChl-09b001257/"
        ],
        texts: [
            "svxezm",
            "igorbkuhl",
            "Igor Borges Kühl"
        ]
    }

    const { iconPaths, titles, urls, texts } = contactInfo;

    return (
        <section
            id="about"
            className={
            `mt-8 mb-16 lg:mb-0 flex items-center mx-auto
            lg:text-left lg:flex-row lg:p-8 lg:justify-evenly
            flex-col-reverse p-0 text-center`
        }>
            <div className={
                `flex flex-col w-[30em]`
            }>
                <h1 className="font-bold">Igor Borges Kühl</h1>
                <h2>{subtitle}</h2>
                <p className="my-4 lg:pr-12">
                    {resume}
                </p>
                <h3 className="my-4">{contacts}</h3>
                <div className={
                    `text-left mx-auto lg:m-0`
                }>
                    {titles.map((title, index) => (
                        <div
                            key={index}
                            className="flex items-center mb-1"
                        >
                            <Image
                                src={iconPaths[index]}
                                alt={title}
                                title={title}
                                height="25"
                                width="25"
                                priority
                                className={index === 0 ? "invert-0 dark:invert" : ""}
                            />
                            <a
                                href={urls[index]}
                                target="_blank"
                                className="ml-2"
                            >
                                {texts[index]}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={
                `w-80`
            }>
                <Image
                    src={profilePicture}
                    title="Foto de perfil"
                    alt="Foto de perfil"
                    className="lg:w-full rounded-full drop-shadow-lg lg:mx-auto mb-8 lg:m-0"
                />
            </div>
        </section>
    )
}
