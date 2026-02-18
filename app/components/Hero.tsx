import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-xs tracking-widest uppercase text-neonYellow">
            Open to Full-Time & Remote Roles
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-neonGreen">Janvi Patel</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Cloud Data Engineer ·{" "}
            <span className="text-neonPurple">AI & ML Engineer</span>
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            I design and build scalable cloud systems, data-driven platforms,
            and intelligent applications with a strong focus on performance,
            reliability, and clean architecture.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-6">
            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              className="
                relative inline-flex items-center justify-center
                px-7 py-3 rounded-md font-semibold
                text-white bg-black
                border border-neonGreen
                hover:text-neonGreen
                hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]
                transition-all duration-300
              "
            >
              Download Resume
            </a>

            <Link
              href="https://github.com/janvipatel18902"
              target="_blank"
              className="
                border border-gray-700
                px-6 py-3 rounded-md
                text-gray-200
                hover:border-neonGreen
                transition
              "
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/janviit/"
              target="_blank"
              className="
                border border-gray-700
                px-6 py-3 rounded-md
                text-gray-200
                hover:border-neonPurple
                transition
              "
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative hidden md:flex justify-center">

          {/* Ambient glow (background only) */}
          <div className="absolute inset-0 bg-gradient-to-br from-neonGreen/20 via-neonPurple/20 to-transparent blur-3xl rounded-full" />

          {/* Image frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">

            {/* Dark overlay to blend with theme */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            <Image
              src="/janvi.jpg"
              alt="Janvi Patel"
              width={420}
              height={520}
              className="object-cover relative z-0"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
