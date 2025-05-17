"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // linkedin animation
    gsap.fromTo(
      linkedinRef.current,
      { opacity: 0, x: 60, y: 60 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 }
    );

    // github animation
    gsap.fromTo(
      githubRef.current,
      { opacity: 0, x: 60, y: 60 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out", delay: 1 }
    );

    // line grow animation
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      { height: "20rem", duration: 1.4, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <section
      className="relative mb-10 lg:h-[700px] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-8 "
      style={{ backgroundImage: "url('/home-pattern.png')" }}
    >
      <Navbar />

      {/* fog top right */}
      <img
        src="/small-celestial-fog.svg"
        alt="Fog"
        className="hidden lg:block absolute top-[20%] left-[73%] w-110"
      />

      {/* moon below fog */}
      <img
        src="/moon-art.svg"
        alt="Moon Art"
        className="hidden lg:block absolute top-[50%] left-[45%] w-130"
      />

      {/* main content */}
      <div className="mt-10 lg:mt-50 lg:ml-20 lg:mt-10 flex flex-col items-center lg:items-start gap-6 z-10 text-center lg:text-left">
        {/* text block */}
        <div>
          <h1 className="text-3xl lg:text-7xl font-bold text-white mb-4">
            Hi!
          </h1>
          <h2 className="text-2xl lg:text-7xl font-bold text-white mb-8">
            I'm Tymur Budahov
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 lg:gap-5">
            <p className="text-lg lg:text-4xl text-gray-500">
              Finance graduate & Computer Science student
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tymur-budahov/"
              target="_blank"
              rel="noopener noreferrer"
              ref={linkedinRef}
            >
              <img src="/linkedin.png" alt="Linkedin" className="w-6 lg:w-12" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TBud15"
              target="_blank"
              rel="noopener noreferrer"
              ref={githubRef}
            >
              <img src="/github.png" alt="Github" className="w-6 lg:w-12" />
            </a>

            {/* Telegram */}
            {/* <a href="/asdasd" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.png" alt="Telegram" className="w-6 lg:w-12" />
            </a> */}
          </div>
        </div>

        {/* image + vertical line */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* vertical line -  only show on large screens */}
          <div className="hidden lg:flex flex-col items-center relative">
            <div className="w-4 h-4 rounded-full bg-[#B283F8] z-10" />
            <div
              ref={lineRef}
              className="absolute top-3 left-1/2 -translate-x-1/2 w-[4px] bg-gradient-to-b from-[#B283F8] to-[#85D996]"
              style={{ height: "20rem" }}
            />
            <div className="h-78" />
            <div className="text-[#85D996] z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* profile image */}
          <div className="w-[160px] lg:w-[250px] h-[160px] lg:h-[250px] rounded-full bg-[#3950C4] p-px mt-6 lg:mt-0 ml-0 lg:ml-13">
            <div className="w-full h-full rounded-full bg-[#0D1117] p-2">
              <Image
                src="/profile-photo.webp"
                alt="Author"
                width={200}
                height={200}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
