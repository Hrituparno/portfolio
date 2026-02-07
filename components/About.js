export default function About() {
    return (
        <section id="research" className="py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-zinc-100">Research Profile</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                        <p>
                            AI Research Engineer with experience in literature review, hypothesis generation,
                            experimentation, and evaluation. My work focuses on building autonomous systems
                            that can reason, plan, and execute complex tasks.
                        </p>
                        <p>
                            I serve as an <span className="text-zinc-200 font-medium">Academic Mentor at MIT Pune (Kalvium)</span>, where I guide
                            students in mastering Python, C++, and building real-world AI applications.
                        </p>
                        <p>
                            With a strong foundation in <span className="text-zinc-200 font-medium">Machine Learning, Deep Learning, and AI Systems</span>,
                            I aim to bridge the gap between theoretical research and scalable, production-ready AI solutions.
                        </p>
                    </div>

                    <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
                        <h3 className="text-xl font-semibold mb-6 text-zinc-200">Core Focus Areas</h3>
                        <ul className="space-y-4">
                            {[
                                "Autonomous Multi-Agent Systems",
                                "Large Language Model Pipelines",
                                "End-to-End AI Research Workflows",
                                "Applied Machine Learning"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-zinc-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
