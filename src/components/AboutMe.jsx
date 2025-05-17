"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      {/* desktop layout (hidden on mobile) */}
      <div className="hidden lg:flex mt-35 ml-20">
        {/* Left side: icon and vertical line */}
        <div className="flex flex-col items-center relative">
          <Image
            src="/about-me-icon.svg"
            alt="icon"
            width={80}
            height={80}
            className="z-10 rounded-full"
          />
          <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[4px] h-[250px] bg-gradient-to-b from-[#85D996] to-transparent" />
        </div>

        {/* right side text */}
        <div className="ml-20">
          <h1 className="text-[#7EE787] text-5xl mt-1" id="about">
            About Me
          </h1>
          <p className="text-3xl w-240 mt-12">
            <span className="text-[#7EE787]">
              I received my first Bachelor's degree in Finance from Florida
              Atlantic University, graduating with a 3.8 GPA, and I'm currently
              pursuing a degree in Computer Science at Florida International
              University.
            </span>{" "}
            I'm actively seeking roles in financial analysis, business
            analytics, or operations, where I can apply both my business
            background and technical skills to solve real-world problems.
          </p>
        </div>
      </div>

      {/* mobile layout (hidden on desktop) */}
      <div className="lg:hidden px-6 mt-0 space-y-6">
        <h1 className="text-[#7EE787] text-4xl">About Me</h1>
        <p className="text-xl leading-relaxed">
          <span className="text-[#7EE787]">
            I received my first Bachelor's degree in Finance from Florida
            Atlantic University, graduating with a 3.8 GPA, and I'm currently
            pursuing a degree in Computer Science at Florida International
            University.
          </span>{" "}
          I'm actively seeking roles in financial analysis, business analytics,
          or operations, where I can apply both my business background and
          technical skills to solve real-world problems.
        </p>
      </div>

      {/* section with overlapping containers */}
      <section className="relative px-6 lg:px-8 py-20">
        {/* top container - shared layout */}
        <div className="w-full lg:w-[80%] mx-auto bg-[#161B22] text-white p-6 lg:p-15 rounded-xl shadow-md z-10 relative text-start border border-[#30363D]">
          <p className="leading-relaxed text-xl">
            My finance education included coursework in Financial Analysis,
            Corporate Finance, Investments, and Quantitative Business Analysis,
            giving me a strong foundation in interpreting financial data,
            forecasting, and performance evaluation. I'm confident using tools
            like Excel, SQL (PostgreSQL), and Python for data analysis,
            reporting, and automation.
          </p>
          <p className="mt-5 text-xl">
            On the technical side, I've built full-stack applications using
            React, Next.js, Django (Python), Stripe, and Supabase, with a focus
            on clean architecture, secure authentication, and user-centered
            design. I enjoy working across the stack — from developing
            responsive frontends to building secure API routes and backend logic
            using modern web frameworks like Next.js.
          </p>
        </div>

        {/* bottom overlapping container with left icon only on desktop */}
        <div className="relative">
          <div className="relative w-full lg:w-230 lg:ml-160 mx-auto mt-[-40px] z-20">
            {/* Decorative icon (only for large screens) */}
            <div className="hidden lg:block absolute -left-95 top-13">
              <Image
                src="/cloud-line-art.svg"
                alt="Side Icon"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>

            {/* bottom overlapping container */}
            <div className="bg-[#161B22] text-white p-6 lg:p-15 rounded-xl shadow-md text-start border border-[#6E7681] mt-15 lg:mt-0">
              <p className="leading-relaxed text-xl">
                I enjoy exploring how systems work — whether it's improving
                digital experiences through user feedback or understanding
                complex processes in fields like civil aviation, which I follow
                closely in my free time. I'm always looking for opportunities to
                grow, take on new challenges, and contribute to meaningful,
                data-informed work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* final vertical line under everything */}
      <div className="hidden lg:flex ml-27">
        <div className="w-[4px] h-[100px] bg-gradient-to-b from-transparent to-[#EC6547]" />
      </div>
    </div>
  );
}
