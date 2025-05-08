"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-[700px] bg-cover bg-center bg-no-repeat flex items-center px-8"
      style={{ backgroundImage: "url('/home-pattern.png')" }}
    >
      {/* fog top right */}
      <img
        src="/small-celestial-fog.svg"
        alt="Fog"
        className="absolute top-40 ml-350 w-110"
      />

      {/* moon below fog */}
      <img
        src="/moon-art.svg"
        alt="Moon Art"
        className="absolute top-100 ml-220 w-130"
      />

      {/*  main content block with text and vertical line underneath */}
      <div className="ml-20 flex flex-col items-start gap-6 z-10 mt-[15%]">
        {/* txt block */}
        <div>
          <h1 className="text-7xl font-bold text-white mb-4">Hi!</h1>
          <h2 className="text-7xl font-bold text-white mb-8">
            I'm Tymur Budahov
          </h2>
          <div className="flex items-center gap-5">
            <p className="text-4xl text-gray-500">Aspiring Software Engineer</p>
            {/* icons next to asp swe eng text */}
            <img src="/linkedin.png" alt="Linkedin" className="w-12" />
            <img src="/github.png" alt="Github" className="w-12" />
            <img src="/telegram.png" alt="Telegram" className="w-12" />
          </div>
        </div>

        {/* vertical line element (centered within itself) */}
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center relative">
            {/* top circle */}
            <div className="w-4 h-4 rounded-full bg-green-400 z-10" />

            {/* static line */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[4px] h-50 bg-gradient-to-b from-green-400 to-blue-500" />

            {/* spacer to align arrow */}
            <div className="h-49" />

            {/* arrow itself */}
            <div className="text-blue-400 z-10">
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

          {/* personal image */}
          <div className="w-[250px] h-[250px] rounded-full bg-[#3950C4] p-px">
            <div className="w-full h-full rounded-full bg-[#0D1117] p-2">
              <Image
                src="/intro-photo.jpg"
                alt="Author"
                width={200}
                height={200}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
