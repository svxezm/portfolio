import TopContent from "@/components/TopContent";
import LanguageBlock from "@/components/LanguageBlock";

export default function MainLayout() {
    return (
        <div className={
            `md:rounded-2xl bg-[#ffe5ed] w-screen md:w-[90%] p-8`
        }>
            <TopContent />
            <LanguageBlock />
        </div>
    )
}
