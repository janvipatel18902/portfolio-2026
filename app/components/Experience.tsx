export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {[
            {
              role: "Cloud Data Engineer Intern",
              company: "TCS Canada · Toronto, ON",
              period: "December 2025 – Present",
              points: [
                "Built frontend components using React and backend services using Node.js.",
                "Designed REST APIs with Supabase and Clerk authentication.",
                "Worked on scalable, production-grade enterprise platforms.",
              ],
            },
            {
              role: "Full Stack Developer Intern",
              company: "Gokaddal Technologies · Toronto, ON",
              period: "May 2025 – August 2025",
              points: [
                "Developed a fintech platform for the Canadian market.",
                "Implemented RRSP, TFSA, and FHSA features.",
                "Led a team of 4 developers using Agile workflows.",
              ],
            },
            {
              role: "Mobile Application Developer Intern",
              company: "Tech Elecon",
              period: "January 2023 – October 2023",
              points: [
                "Led Flutter frontend development.",
                "Integrated Firebase and REST APIs.",
                "Delivered a Kaizen mobile application for internal use.",
              ],
            },
            {
              role: "Web Application Developer Intern",
              company: "Hatkesh InfoTech",
              period: "June 2022 – December 2022",
              points: [
                "Developed backend for a School Management System.",
                "Optimized SQL queries and ASP.NET integrations.",
              ],
            },
          ].map((exp) => (
            <div key={exp.role} className="relative pl-6 border-l border-gray-800">
              <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
