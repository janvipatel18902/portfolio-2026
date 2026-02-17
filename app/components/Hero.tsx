import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Janvi <span className="text-accent">Patel</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400">
          Cloud Data Engineer · AI Engineer · Machine Learning Engineer
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
          I build scalable cloud-based systems, data-driven applications, and
          modern full-stack solutions with a strong focus on performance,
          reliability, and clean architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="/resume.pdf"
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Download Resume
          </a>

          <Link
            href="https://github.com/janvipatel18902"
            target="_blank"
            className="rounded-md border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/janviit/"
            target="_blank"
            className="rounded-md border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
