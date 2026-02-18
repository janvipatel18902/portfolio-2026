export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-6 bg-black">
            <div className="max-w-5xl mx-auto">

                {/* Section header */}
                <div className="mb-14">
                    <p className="text-sm uppercase tracking-widest text-neonYellow mb-2">
                        Highlights
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Achievements
                    </h2>
                </div>

                {/* Achievements list */}
                <div className="space-y-6">

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonPurple transition">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Led a Team of 4 Developers (Fintech Platform)
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Successfully led the design and development of a fintech
                            platform for the Canadian market, coordinating frontend,
                            backend, and UI/UX delivery.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonPurple transition">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Built Cloud-Native Serverless Application
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Designed and implemented a serverless expense tracking
                            system using AWS Lambda, API Gateway, DynamoDB, and CI/CD.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonPurple transition">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Delivered Production-Grade Mobile Application
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Collaborated with a team of interns to deliver a Flutter-based
                            Kaizen application adopted internally by the organization.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 p-6 hover:border-neonPurple transition">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Multiple End-to-End Projects Across Web, Cloud & Mobile
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Completed and deployed full-stack, cloud-based, and mobile
                            applications covering real-world use cases.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
