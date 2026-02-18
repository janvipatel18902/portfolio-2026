import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-white">
          Janvi<span className="text-neonGreen">.</span>
        </span>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-base font-medium text-gray-300">
          {["Skills", "Experience", "Projects", "Education", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-neonGreen transition"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
