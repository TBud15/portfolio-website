// projects component
"use client";
import Image from "next/image";
import ProjectDetails from "./ProjectsDetails";
import SkillsOverview from "./SkillsOverview";

export default function Projects() {
  return (
    <div>
      {/* desktop version */}
      <div className="hidden lg:flex mt-5">
        <div className="ml-24 flex flex-col items-center relative">
          <Image
            src="/portfolio-icon.svg"
            width={30}
            height={30}
            alt="Icon"
            className="z-10 drop-shadow-[0_0_12px_#FFA500]"
          />
          <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[4px] h-[250px] bg-gradient-to-b from-[#EC6547] to-transparent" />
        </div>
        <div className="ml-20">
          <h1 className="text-[#FFA28B] text-5xl mt-1" id="projects">
            Projects
          </h1>
        </div>
      </div>

      {/* mobile version */}
      <div className="lg:hidden px-6 mt-10">
        <h1 className="text-[#FFA28B] text-4xl">Projects</h1>
      </div>

      <div className="relative">
        <ProjectDetails />
      </div>

      <div>
        <SkillsOverview />
      </div>
    </div>
  );
}
