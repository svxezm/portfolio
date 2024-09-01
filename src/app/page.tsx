import Image from "next/image";
import TopContent from "@/components/TopContent/TopContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TopContent />
    </main>
  );
}
