import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      {/* icon, line and text */}
      <div className="flex mt-35 ml-20">
        {/* left side, icon and vertical line */}
        <div className="flex flex-col items-center relative">
          {/* Top icon */}
          <Image
            src="/about-me-icon.svg"
            alt="icon"
            width={80}
            height={80}
            className="z-10 rounded-full"
          />

          {/* Vertical line */}
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

      {/* more about me text */}
      <section className="relative px-8 py-20">
        {/* Top container */}
        <div className=" w-[80%] mx-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 relative text-start border border-[#30363D]">
          <p className="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
            lobortis et libero sit amet congue. Donec quis odio at augue
            imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu
            maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor.Aenean tincidunt porttitor
            pulvinar. Aliquam fermentum consequat orci, sed euismod diam posuere
            ut. Vestibulum ante massa, rutrum eu enim consequat, tincidunt
            tincidunt eros.
          </p>
          <p className="mt-5 text-xl">
            {}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
            lobortis et libero sit amet congue. Donec quis odio at augue
            imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu
            maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor.
          </p>
        </div>

        <div className="relative">
          {/* wrapper with relative positioning */}
          <div className="relative w-230 ml-160 mx-auto mt-[-40px] z-20">
            {/* decor image on the left */}
            <div className="absolute -left-95 top-13">
              <Image
                src="/cloud-line-art.svg"
                alt="Side Icon"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>

            {/* bottom overlapping container */}
            <div className="bg-[#161B22] text-white p-15 rounded-xl shadow-md text-start border border-[#6E7681]">
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
    </div>
  );
}
