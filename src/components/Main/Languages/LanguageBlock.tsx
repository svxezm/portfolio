import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { supabase } from "@lib/supabase";
import { Info } from "lucide-react";
import LanguageItem from "@main/Languages/LanguageItem";
import Tooltip from "@src/components/Utils/Tooltip";

interface LanguageTable {
    labels: string[];
    title: string;
};

interface LanguageSection {
    label: string;
    description: string;
    titles: string[];
    icons: string[];
};

export default function LanguageBlock() {
    const [languageInfo, setLanguageInfo] = useState<LanguageSection[]>([]);

    const t = useTranslations("home.main.languages");
    const title = t("title");

    useEffect(() => {
        (async () => {
            const languageResponse = await fetch("/api/languages");
            const languages: LanguageTable[] = await languageResponse.json();

            const language: LanguageSection[] = languages.map((lang) => {
                const icons: string[] = lang.labels.map((lg) => {
                    const imageUrl = supabase.storage
                        .from("images")
                        .getPublicUrl(`icons/languages/${lg}.svg`);

                    return imageUrl.data.publicUrl;
                });
                const description = t.raw(`groups.${lang.title}`)?.description;

                return {
                    ...(description && { description }),
                    label: t(`groups.${lang.title}.title`),
                    titles: lang.labels,
                    icons
                };
            });
            setLanguageInfo(language);
        })();
    }, []);

    const infoTooltip = (content: string) => {
        return (
            <Tooltip text={content} width={64}>
                <div className="ml-2 scale-75 opacity-75 relative">
                    <Info />
                </div>
            </Tooltip>
        )
    }

    return (
        <section
            id="languages"
            className={
            `flex flex-col lg:justify-evenly items-baseline text-center
            mx-auto lg:w-full lg:px-8 mb-12 lg:mb-8`
        }>
            <div className="flex flex-col flex-wrap mx-auto lg:mx-0 w-full">
                <h3 className="w-full text-center lg:text-left mb-4 w-fit">{title}</h3>
                <div className="flex flex-col lg:flex-row justify-between">
                    {languageInfo?.map((info, index) => (
                        <div
                            key={index}
                            className={
                                `flex flex-col flex-wrap lg:justify-evenly m-auto mb-4 w-fit
                                justify-center lg:justify-start`
                            }
                        >
                            <div className="flex justify-center items-center">
                                <h4>{info.label}</h4>
                                {info.description && infoTooltip(info.description)}
                            </div>
                            <div className="flex flex-row">
                                {info.icons.map((icon, iconIndex) => (
                                    <div
                                        key={iconIndex}
                                        className="flex flex-col mx-2 lg:m-2"
                                    >
                                        <LanguageItem icon={icon} text={info.titles[iconIndex]} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
