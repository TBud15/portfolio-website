export default function ProjectsDetails() {
  return (
    <div className="mt-8">
      {/* desktop layout */}
      <div className="hidden lg:block">
        {/* top card */}
        <div className="mx-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-80 mr-100">
          <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
            Tire Recycling UA (Freelance)
          </h2>
          <p>
            Designed and developed a complete website for a tire recycling
            company using React, Tailwind CSS, and next-intl for multilingual
            support. Collaborated with the client to deliver a modern,
            responsive interface aligned with their branding. Prioritized
            accessibility, performance, and mobile responsiveness to ensure
            smooth functionality across all devices. Integrated Google
            Analytics, SEO best practices and supported a Google Ads campaign.
          </p>
        </div>

        {/* decorative and overlapping cards */}
        <div className="absolute top-62 left-50 z-20">
          <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[681px] shadow-[0_4px_20px_rgba(255,182,120,0.3),0_6px_30px_rgba(255,162,120,0.2)]">
            <a
              href="https://www.tirerecycling.com.ua/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-[#FFA28B] text-xl font-bold mb-4">
                Tire Recycling UA
              </h2>
              <img
                src="/tire-rec-wb.png"
                alt="Tire Recycling Photo"
                width={581}
                height={327}
                className="rounded-md"
              />
              <p className="mt-4 text-[#FFB77C] text-xl">Deploy Link</p>
            </a>
          </div>
        </div>

        <div className="bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl w-100 ml-240 mt-10">
          <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
            Tire Recycling UA
          </h2>
          <p>
            Focused on clean, maintainable code and proper Next.js architecture,
            I ensured both static and server-rendered pages were optimized for
            performance and SEO visibility. The site renders correctly across
            all devices and is fully indexed by search engines. I also provided
            ongoing support to the client throughout their operations and
            advertising efforts.
          </p>
        </div>

        <div className="absolute top-208 left-60">
          <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[600px]">
            <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
              Candy Shop (Personal Project)
            </h2>
            <p className="text-xl">
              I built a full-stack e-commerce website for a fictional candy
              shop, combining a visually engaging frontend with a powerful
              backend architecture. The goal was to deliver a seamless shopping
              experience that includes product browsing, search, categorization,
              and checkout. I designed and implemented the frontend using
              Next.js and Tailwind CSS, while the backend was powered by Django
              and PostgreSQL for secure data handling. The admin panel enables
              product management, category creation, and stripe integration,
              allowing for full control of data from a single interface.
            </p>
          </div>
        </div>

        <div className="absolute top-190 left-27 z-1">
          <div className="w-[4px] h-[700px] bg-gradient-to-b from-[#EC6547] to-transparent" />
        </div>

        <div className="absolute top-210 left-27">
          <img
            src="/git-branch-productivity.svg"
            alt="Project screenshot"
            className="rounded-md"
          />
        </div>

        <div className="absolute top-230 left-230 z-11">
          <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[681px] shadow-[0_4px_20px_rgba(255,182,120,0.3),0_6px_30px_rgba(255,162,120,0.2)]">
            <a
              href="https://candy-shop-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-[#FFA28B] text-xl font-bold mb-4">
                Candy Shop
              </h2>
              <img
                src="/candy-shop-wb.png"
                alt="Candy Shop"
                width={581}
                height={327}
                className="rounded-md"
              />
              <p className="mt-4 text-[#FFB77C] text-xl">Deploy Link</p>
            </a>
          </div>
        </div>

        <div className="absolute x-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-60 mr-130 top-350">
          <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
            Candy Shop (Personal Project)
          </h2>
          <p>
            This project was built in my free time as a way to challenge myself
            with full-stack development and deepen my understanding of modern
            web technologies. It gave me hands-on experience with secure payment
            integrations using Stripe, managing global state with Redux, and
            server-side rendering for performance and SEO. Through this process,
            I significantly improved my ability to design scalable architecture
            and build user-friendly, responsive interfaces across the stack.
          </p>
        </div>
      </div>

      {/* mobile layout (only image + deploy) */}
      <div className="lg:hidden px-6 space-y-10 mt-10">
        {/* project 1 */}
        <div className="bg-[#161B22] text-white p-6 rounded-xl border border-[#6E7681] shadow-md">
          <a
            href="https://www.tirerecycling.com.ua/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tire-rec-wb.png"
              alt="Tire Recycling UA"
              className="rounded-md w-full mb-4"
            />
            <p className="text-[#FFA28B] text-xl">Deploy Link</p>
          </a>
        </div>

        {/* project 2 */}
        <div className="bg-[#161B22] text-white p-6 rounded-xl border border-[#6E7681] shadow-md">
          <a
            href="https://candy-shop-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/candy-shop-wb.png"
              alt="Candy Shop"
              className="rounded-md w-full mb-4"
            />
            <p className="text-[#FFA28B] text-xl">Deploy Link</p>
          </a>
        </div>
      </div>
    </div>
  );
}
