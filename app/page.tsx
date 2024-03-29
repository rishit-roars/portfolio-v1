import { About } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Works } from "@/components/main/projects1";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
    
      <div className="w-full h-full justify-center z-100 items-center flex">
      <Experience/>
      </div>
    <div className="w-full h-full flex justify-center ">

    <Works />
    </div>
      </div>
    </main>
  );
}
