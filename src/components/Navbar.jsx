"use client";

export default function Navbar() {
  return (
    <nav className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2 z-20 mt-10">
      <ul className="flex flex-wrap justify-center gap-8 bg-[#0D1117] px-6 py-2 rounded-full text-white text-lg font-medium shadow-md transition hover:shadow-[0_0_15px_4px_rgba(40,75,253,0.4)]">
        <li>
          <a href="#home" className="hover:text-[#284BFD] transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#284BFD] transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#284BFD] transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#284BFD] transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
