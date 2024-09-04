import TopContent from "@/components/TopContent";
import LanguageBlock from "@/components/LanguageBlock";
import ProjectDisplay from "@/components/ProjectDisplay";

export default function MainLayout() {
    return (
        <div className={
            `lg:rounded-2xl bg-[#ffe5ed] w-screen lg:w-[70rem] p-8`
        }>
            <TopContent />
            <LanguageBlock />
            <ProjectDisplay />
        </div>
    )
}
