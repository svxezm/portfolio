import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import frontEnd from "/public/certificates/front-end.jpg"
import fullStackPython from "/public/certificates/full-stack-python.jpg"
import Modal from "../Utils/Modal"

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
            name: t("certificates.frontEnd"),
            path: frontEnd
        },
        {
            name: t("certificates.fullStackPython"),
            path: fullStackPython
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
            mx-auto lg:w-full lg:px-8 mb-16 lg:mb-4`
        }>
            <h3
                className="mb-4"
            >{t("title")}</h3>
            <ul>
            {certificates.map((certificate, index) => (
                <li key={index}>
                    <button onClick={() => openModal(certificate)}>
                        {certificate.name}
                    </button>
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
