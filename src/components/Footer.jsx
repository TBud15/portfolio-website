"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* background image */}
      <Image
        src="/footer-img-1.png"
        alt="Footer background"
        layout="responsive"
        width={1920}
        height={500}
        className="bg-green"
        priority
      />

      {/* icons absolutely positioned on top of image */}
      <div className="absolute top-50 left-190">
        <a
          href="https://www.linkedin.com/in/tymur-budahov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedIn-blue.png"
            alt="LinkedIn"
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className="absolute top-50 left-280">
        <a
          href="https://github.com/TBud15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github-blue.png" alt="GitHub" width={35} height={35} />
        </a>
      </div>

      {/* copyright txt */}
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xl text-[#939AFF]">
        © 2025 Tymur Budahov
      </p>
    </footer>
  );
}
