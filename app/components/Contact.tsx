export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

        <p className="text-gray-400 mb-10">
          I’m open to full-time and remote opportunities in Cloud, AI, and
          Software Engineering roles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:janvipatel18902@gmail.com"
            className="bg-accent text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/janviit/"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-md text-gray-200 hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
