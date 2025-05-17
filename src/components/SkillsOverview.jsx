export default function SkillsOverview() {
  return (
    <div>
      {/* desktop layout */}
      <div className="hidden lg:block mx-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-60 mr-130 mt-215">
        <h2 className="text-[#EFE828] text-4xl font-bold mb-4">Skills</h2>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Finance & Analytics
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Financial Analysis, Forecasting, Budgeting, Financial Reporting
            </li>
            <li>Excel, SQL (PostgreSQL), Python</li>
            <li>
              Quantitative Business Analysis, Investments, Corporate Finance,
              Financial Statement Analysis
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Frontend Development
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React, Next.js, Tailwind CSS, GSAP</li>
            <li>Responsive design & mobile-first layouts</li>
            <li>Framer Motion, GSAP animations & component organization</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Backend & Fullstack
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Django, PostgreSQL, Heroku, Supabase</li>
            <li>Authentication, secure Stripe checkout components</li>
            <li>Stripe integration, protected API routes</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Other Tools & Practices
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>SEO, Google Analytics</li>
            <li>Git - GitHub & Website deployment</li>
            <li>Figma UI basics</li>
          </ul>
        </div>
      </div>

      {/* mobile layout */}
      <div className="lg:hidden px-6 mt-12 bg-[#161B22] text-white p-6 rounded-xl shadow-md border border-[#30363D]">
        <h2 className="text-[#EFE828] text-3xl font-bold mb-6">Skills</h2>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Frontend Development
          </h3>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>React, Next.js, Tailwind CSS, GSAP</li>
            <li>Responsive & mobile-first</li>
            <li>Framer Motion UI</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Backend & Fullstack
          </h3>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Supabase, PostgreSQL, Heroku</li>
            <li>Auth + secure paywall via Stripe</li>
            <li>Stripe & API security</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F7FD5A] text-lg font-semibold mb-2">
            Other Tools
          </h3>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>SEO, Google Analytics</li>
            <li>Git - GitHub & website deployment</li>
            <li>Figma UIs basics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
