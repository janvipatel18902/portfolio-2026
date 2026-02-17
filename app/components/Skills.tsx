export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Frontend",
              items: ["React", "Next.js", "JavaScript / TypeScript", "Tailwind CSS"],
            },
            {
              title: "Backend",
              items: ["Node.js", "REST APIs", "Java", "Python"],
            },
            {
              title: "Cloud & DevOps",
              items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
            },
            {
              title: "Databases & Tools",
              items: ["SQL", "Supabase", "Git & GitHub", "Postman"],
            },
          ].map((skill) => (
            <div key={skill.title} className="rounded-lg border border-gray-800 p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {skill.title}
              </h3>
              <ul className="space-y-2 text-gray-400">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
