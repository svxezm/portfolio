import Image from "next/image"
import discordIcon from "/assets/images/icons/social/discord.webp";
import whatsappIcon from "/assets/images/icons/social/whatsapp.webp";
import githubIcon from "/assets/images/icons/social/github.webp";
import profilePicture from "/assets/images/foto-de-perfil.png";

export default function TopContent() {
    const contactInfo = {
        iconPaths: [
            discordIcon,
            whatsappIcon,
            githubIcon
        ],
        titles: [
            "Discord",
            "WhatsApp",
            "Github"
        ],
        urls: [
            "https://discord.com/users/1201863684117504020",
            "https://wa.me/5551995826812",
            "https://github.com/monitzz"
        ],
        texts: [
            "igorbkuhl",
            "+55 51 99582-6812",
            "svxezm"
        ]
    }

    const { iconPaths, titles, urls, texts } = contactInfo;

    return (
        <section className={
            `mt-8 mb-16 flex items-center w-[90%] mx-auto
            lg:text-left lg:flex-row lg:p-8
            flex-col-reverse p-0 text-center`
        }>
            <div className={
                `flex flex-col w-[30em]`
            }>
                <h1 className="font-bold">Igor Borges Kühl</h1>
                <h2>Desenvolvedor</h2>
                <p className="my-4">
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
                            className="flex items-center"
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
                `w-80 mx-auto`
            }>
                <Image
                    src={profilePicture}
                    title="Foto de perfil"
                    alt="Foto de perfil"
                    className="w-[90%] rounded-full drop-shadow-lg lg:ml-12 md:mx-auto md:mb-8"
                />
            </div>
        </section>
    )
}
