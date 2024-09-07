import Image from "next/image"
import discordIcon from "/assets/images/icons/social/discord.webp";
import githubIcon from "/assets/images/icons/social/github.webp";
import linkedinIcon from "/assets/images/icons/social/linkedin.png";
import profilePicture from "/assets/images/foto-de-perfil.png";

export default function TopContent() {
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
        <section className={
            `mt-8 mb-16 flex items-center mx-auto
        lg:text-left lg:flex-row lg:p-8 lg:justify-evenly
            flex-col-reverse p-0 text-center`
        }>
            <div className={
                `flex flex-col w-[30em]`
            }>
                <h1 className="font-bold">Igor Borges Kühl</h1>
                <h2>Desenvolvedor</h2>
                <p className="my-4 lg:pr-12">
                    Estudo por conta própria pela internet com foco no aprendizado
                    para desenvolver páginas web e aplicativos cada ver melhores!
                </p>
                <p className="my-4">Contatos:</p>
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
