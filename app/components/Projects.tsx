export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {[
            {
              title: "Cloud-Based Expense Tracker",
              desc: "Serverless expense tracking application using AWS services.",
              tech: "React, Node.js, AWS",
            },
            {
              title: "Kweather – Android Weather App",
              desc: "Android app with real-time weather and GPS features.",
              tech: "Java, Firebase, REST APIs",
            },
            {
              title: "MediTrack-Lite",
              desc: "Desktop application for medicine management and reminders.",
              tech: "Java, JavaFX, SQLite",
            },
            {
              title: "Fintech Platform",
              desc: "Canadian fintech platform developed during internship.",
              tech: "React, Node.js, Figma",
            },
          ].map((project) => (
            <div key={project.title} className="rounded-lg border border-gray-800 p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <span className="text-xs text-gray-500">Tech: {project.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
