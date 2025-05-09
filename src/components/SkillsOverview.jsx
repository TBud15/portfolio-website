export default function SkillsOverview() {
  return (
    <div>
      <div className="mx-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-60 mr-130 mt-225">
        <h2 className="text-[#FFB77C] text-4xl font-bold mb-4">Skills</h2>

        <div className="mb-6">
          <h3 className="text-[#FFB77C] text-lg font-semibold mb-2">
            Frontend Development
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Experienced with React, Next.js, Tailwind CSS</li>
            <li>Responsive design and mobile-first approach</li>
            <li>Framer Motion animations and component structure</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#FFB77C] text-lg font-semibold mb-2">
            Backend & Fullstack
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Supabase, PostgreSQL, Prisma basics</li>
            <li>Authentication and secure paywall logic</li>
            <li>Stripe integration and protected API handling</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-[#FFB77C] text-lg font-semibold mb-2">
            Other Tools
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Figma-based UI implementation</li>
            <li>SEO awareness, Google Ads planning</li>
            <li>Github project structure and deployment with Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
