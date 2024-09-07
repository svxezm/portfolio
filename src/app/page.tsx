import Image from "next/image";
import MainLayout from "@/components/MainLayout";

export default function Home() {
    return (
        <>
            <header className="h-24 w-full bg-rose-200 drop-shadow-lg flex items-center justify-end">
                <nav className="mr-8">
                    <div>
                        <a href="#" className="mr-2">Português</a>
                        <a href="#">English</a>
                    </div>
                </nav>
            </header>
            <main
                className="h-full flex flex-col items-center justify-between p-0 lg:p-8 lg:p-24"
                style={{
                    backgroundImage: `url(/starry-background.png)`,
                    backgroundRepeat: "repeat-y",
                    backgroundAttachment: "scroll",
                    backgroundPosition: "top",
                    height: "100%"
                }}
            >
                <MainLayout />
            </main>
        </>
    );
}
