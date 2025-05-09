"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="hidden lg:flex mt-25 ml-20 relative">
      {/* left side vertical lines and icon */}
      <div className="flex flex-col items-center relative z-10">
        {/* top line */}
        <div className="w-[4px] h-[150px] bg-gradient-to-b from-[#939AFF] to-transparent" />

        {/* icon */}
        <Image
          src="/call-icon.png"
          alt="Contact Icon"
          width={80}
          height={80}
          className="z-10 rounded-full my-2"
        />

        {/* bottom line */}
        <div className="w-[4px] h-[250px] bg-gradient-to-b from-[#939AFF] to-transparent" />
      </div>

      {/* right side text */}
      <div className="ml-20 z-10">
        <h1 className="text-[#939AFF] text-5xl mt-43">Contact</h1>
        <p className="text-3xl w-240 mt-12">
          <span className="text-[#939AFF]">Want to get in touch? </span>
          consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
          mollis erat placerat suscipit. Nulla lobortis et libero sit amet
          congue. Donec quis odio at augue imperdiet posuere. Sed ullamcorper
          hendrerit auctor.
        </p>
      </div>

      {/* absolute decorative fog image */}
      <Image
        src="/celestial-fog-small.png"
        alt="Celestial Fog"
        width={400}
        height={400}
        className="absolute top-[-20px] right-[400px] opacity-70 z-0"
      />
    </div>
  );
}
