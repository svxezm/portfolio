import Image from "next/image";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <main
    className="flex flex-col items-center justify-between p-0 md:p-8 lg:p-24"
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
  );
}
