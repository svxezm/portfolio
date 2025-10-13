import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import frontEnd from "/public/certificates/front-end.jpg"
import fullStackPython from "/public/certificates/full-stack-python.jpg"
import Modal from "@utils/Modal"

interface CertificateProps {
    name: string;
    path: StaticImageData;
}

export default function Qualifications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCertificate, setCurrentCertificate] = useState<CertificateProps | null>(null);
    const t = useTranslations("Home.main.qualifications");

    const certificates = [
        {
            name: t("certificates.frontEnd.title"),
            path: frontEnd,
            date: t("certificates.frontEnd.date")
        },
        {
            name: t("certificates.fullStackPython.title"),
            path: fullStackPython,
            date: t("certificates.fullStackPython.date"),

        }
    ];

    const openModal = (certificate: CertificateProps) => {
        setCurrentCertificate(certificate);
        setIsModalOpen(true);
    };

    return (
        <section
        className={
            `lg:justify-evenly items-baseline text-center lg:text-left
            mx-auto lg:w-full lg:px-8 mb-16 lg:mb-8`
        }>
            <h3
                className="mb-4"
            >{t("title")}</h3>
            <ul>
            {certificates.map((certificate, index) => (
                <li
                  key={index}
                  className={`
                      mb-2 hover:text-rose-950 dark:hover:text-rose-200 cursor-pointer w-fit sm:m-auto lg:m-0
                  `}
                  onClick={() => openModal(certificate)}>
                    <h4 className="lg:text-left">{certificate.name}</h4>
                    <time className="italic text-sm text-center lg:text-left">{certificate.date}</time>
                </li>
            ))}
            </ul>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {currentCertificate && (
                <Image
                    src={currentCertificate.path}
                    alt="Certificate image"
                />
            )}
            </Modal>
        </section>
    )
}
