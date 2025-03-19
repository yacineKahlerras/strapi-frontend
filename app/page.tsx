import MainSection from "@/components/MainSection";
import Navigation from "@/components/Navigation";

export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navigation />
      <MainSection />
    </main>
  );
}
