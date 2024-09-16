import TopContent from "@/components/Main/TopContent";
import LanguageBlock from "@/components/Main/LanguageBlock";
import ProjectDisplay from "@/components/Main/ProjectDisplay";

export default function MainLayout() {
    return (
        <div className={
            `lg:rounded-2xl bg-pink-light dark:bg-purple-dark w-screen lg:w-[70rem] p-8`
        }>
            <div className="w-[80%] mx-auto">
                <TopContent />
                <LanguageBlock />
                <ProjectDisplay />
            </div>
        </div>
    )
}
