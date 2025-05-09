"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact">
      {/* dsktop layout */}
      <div className="hidden lg:flex mt-25 ml-20 relative">
        {/* left side vertical lines and icon */}
        <div className="flex flex-col items-center relative z-10">
          <div className="w-[4px] h-[150px] bg-gradient-to-b from-transparent to-[#939AFF]" />
          <Image
            src="/call-icon.png"
            alt="Contact Icon"
            width={80}
            height={80}
            className="z-10 rounded-full my-2"
          />
          <div className="w-[4px] h-[250px] bg-gradient-to-b from-[#939AFF] to-transparent" />
        </div>

        {/* right side text */}
        <div className="ml-20 z-10">
          <h1 className="text-[#939AFF] text-5xl mt-43">Contact</h1>
          <p className="text-3xl w-240 mt-12">
            <span className="text-[#939AFF]">Want to get in touch? </span>
            Feel free to reach out regarding collaboration, internship
            opportunities, or tech projects. I'm always open to connecting with
            others who share a passion for development.
          </p>

          {/* contact info */}
          <div className="mt-8 space-y-2 text-2xl">
            <p>
              <a
                href="mailto:tbudahov@gmail.com"
                className="text-[#939AFF] hover:underline"
              >
                tbudahov@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+17865468096"
                className="text-[#939AFF] hover:underline"
              >
                +1 (786) 546-8096
              </a>
            </p>
          </div>
        </div>

        {/* decorative fog image */}
        <Image
          src="/celestial-fog-small.png"
          alt="Celestial Fog"
          width={400}
          height={400}
          className="absolute top-[-20px] right-[400px] opacity-70 z-0"
        />
      </div>

      {/* mobile layout */}
      <div className="lg:hidden px-6 mt-20 bg-[#161B22] text-white p-6 rounded-xl shadow-md border border-[#30363D] text-center">
        <h1 className="text-[#939AFF] text-4xl mb-4">Contact</h1>
        <Image
          src="/call-icon.png"
          alt="Contact Icon"
          width={60}
          height={60}
          className="mx-auto mb-4 rounded-full"
        />
        <p className="text-xl mb-6">
          <span className="text-[#939AFF] font-semibold">
            Want to get in touch?{" "}
          </span>
          Reach out anytime for collaborations, opportunities, or just to chat!
        </p>

        {/* contact info mobile */}
        <div className="space-y-2 text-xl">
          <p>
            <a
              href="mailto:tbudahov@gmail.com"
              className="text-[#939AFF] hover:underline"
            >
              tbudahov@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+17865468096"
              className="text-[#939AFF] hover:underline"
            >
              +1 (786) 546-8096
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
