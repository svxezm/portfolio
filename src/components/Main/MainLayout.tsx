import TopContent from "./TopContent";
import Qualifications from "./Qualifications";
import Idioms from "./Idioms";
import LanguageBlock from "./Languages/LanguageBlock";
import ProjectDisplay from "./ProjectDisplay";

export default function MainLayout() {
    return (
        <div className={
            `lg:rounded-2xl bg-pink-light dark:bg-purple-dark w-screen lg:w-[70rem] p-8`
        }>
            <div className="w-[80%] mx-auto">
                <TopContent />
                <Qualifications />
                <Idioms />
                <LanguageBlock />
                <ProjectDisplay />
            </div>
        </div>
    )
}
