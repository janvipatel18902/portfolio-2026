export default function Certificates() {
    return (
        <section id="certificates" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Section header */}
                <div className="mb-14">
                    <p className="text-sm uppercase tracking-widest text-neonYellow mb-2">
                        Certifications
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Certificates & Training
                    </h2>
                </div>

                {/* Certificates grid */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* Certificate card */}
                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonGreen transition">
                        <h3 className="text-lg font-semibold text-white mb-1">
                            AWS Cloud Practitioner (Training)
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Amazon Web Services
                        </p>
                        <p className="text-gray-500 text-sm">
                            Covered core AWS services, cloud fundamentals, security,
                            pricing models, and architectural best practices.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonGreen transition">
                        <h3 className="text-lg font-semibold text-white mb-1">
                            Full Stack Web Development
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Academic & Project-Based Training
                        </p>
                        <p className="text-gray-500 text-sm">
                            Hands-on experience with React, Node.js, REST APIs,
                            authentication, and deployment workflows.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonGreen transition">
                        <h3 className="text-lg font-semibold text-white mb-1">
                            Machine Learning Fundamentals
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Academic Coursework
                        </p>
                        <p className="text-gray-500 text-sm">
                            Studied supervised learning, model evaluation,
                            data preprocessing, and ML pipelines.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonGreen transition">
                        <h3 className="text-lg font-semibold text-white mb-1">
                            Mobile Application Development
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Internship Training
                        </p>
                        <p className="text-gray-500 text-sm">
                            Built production-ready Flutter applications with Firebase
                            and REST API integrations.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
