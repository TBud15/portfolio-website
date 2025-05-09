"use client";
import Image from "next/image";
import ProjectDetails from "./ProjectsDetails";
import SkillsOverview from "./SkillsOverview";

export default function Projects() {
  return (
    <div>
      <div className="flex mt-5">
        {/* left side portfolio icon with vertical line */}
        <div className="ml-24 flex flex-col items-center relative">
          {/* Icon */}
          <Image
            src="/portfolio-icon.svg"
            width={30}
            height={30}
            alt="Icon"
            className="z-10 drop-shadow-[0_0_12px_#FFA500]"
          />

          {/* vartical glowing line (absolute inside flex column) */}
          <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[4px] h-[250px] bg-gradient-to-b from-[#EC6547] to-transparent" />
        </div>

        {/* right side content */}
        <div className="ml-20">
          <h1 className="text-[#FFA28B] text-5xl mt-1">Projects</h1>
        </div>
      </div>

      {/* project links, details */}
      <div className="relative">
        <ProjectDetails />
      </div>

      {/* skills overview */}
      <div>
        <SkillsOverview />
      </div>
    </div>
  );
}
