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
          <h1 className="text-[#7EE787] text-5xl mt-1">About Me</h1>
          <p className="text-3xl w-240 mt-12">
            <span className="text-[#7EE787]">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Praesent
              imperdiet ante tortor,{" "}
            </span>
            sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit
            amet congue.
          </p>
        </div>
      </div>

      {/* mobile layout (hidden on desktop) */}
      <div className="lg:hidden px-6 mt-0 space-y-6">
        <h1 className="text-[#7EE787] text-4xl">About Me</h1>
        <p className="text-xl leading-relaxed">
          <span className="text-[#7EE787]">
            Lorem ipsum dolor sit amet. consectetur adipiscing elit. Praesent
            imperdiet ante tortor,
          </span>{" "}
          sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit
          amet congue.
        </p>
      </div>

      {/* section with overlapping containers */}
      <section className="relative px-6 lg:px-8 py-20">
        {/* top container - shared layout */}
        <div className="w-full lg:w-[80%] mx-auto bg-[#161B22] text-white p-6 lg:p-15 rounded-xl shadow-md z-10 relative text-start border border-[#30363D]">
          <p className="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
            lobortis et libero sit amet congue. Donec quis odio at augue
            imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu
            maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor. Aenean tincidunt porttitor
            pulvinar. Aliquam fermentum consequat orci, sed euismod diam posuere
            ut. Vestibulum ante massa, rutrum eu enim consequat, tincidunt
            tincidunt eros.
          </p>
          <p className="mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
            lobortis et libero sit amet congue. Donec quis odio at augue
            imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu
            maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent imperdiet ante tortor, sit amet mollis erat placerat
                suscipit. Nulla lobortis et libero sit amet congue. Donec quis
                odio at augue imperdiet posuere. Sed ullamcorper hendrerit
                auctor. In laoreet arcu maximus fringilla ornare. Sed quam leo,
                maximus a sodales scelerisque, lacinia vitae tortor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* final vertical line under everything */}
      <div className="hidden lg:flex ml-27">
        <div className="w-[4px] h-[250px] bg-gradient-to-b from-transparent to-[#EC6547]" />
      </div>
    </div>
  );
}
