import Image from "next/image"
import styles from "./TopContent.module.css"
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
        <section className={styles.topContent}>
            <div className={styles.contactArea}>
                <h1 className="font-bold">Igor Borges Kühl</h1>
                <h2>Desenvolvedor</h2>
                <p className="my-4">
                    Estudo por conta própria pela internet com foco no aprendizado
                    para desenvolver páginas web e aplicativos cada ver melhores!
                </p>
                <p className="my-4">Contatos:</p>
                <div className={styles.social}>
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
                                className="pl-2"
                            >
                                {texts[index]}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.pictureArea}>
                <Image
                    src={profilePicture}
                    title="Foto de perfil"
                    alt="Foto de perfil"
                    className="rounded-full drop-shadow-md ml-14"
                />
            </div>
        </section>
    )
}
