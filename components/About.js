export default function About() {
    return (
        <section id="research" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            AI Research Engineer with experience in literature review, hypothesis generation,
                            experimentation, and evaluation. My work focuses on building autonomous systems
                            that can reason, plan, and execute complex tasks.
                        </p>
                        <p>
                            I serve as an <span className="text-gray-900 font-semibold">Academic Mentor at MIT Pune (Kalvium)</span>, where I guide
                            students in mastering Python, C++, and building real-world AI applications.
                        </p>
                        <p>
                            With a strong foundation in <span className="text-gray-900 font-semibold">Machine Learning, Deep Learning, and AI Systems</span>,
                            I aim to bridge the gap between theoretical research and scalable, production-ready AI solutions.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="text-2xl font-bold mb-8 text-gray-900">Core Focus Areas</h3>
                        <ul className="space-y-5">
                            {[
                                "Autonomous Multi-Agent Systems",
                                "Large Language Model Pipelines",
                                "End-to-End AI Research Workflows",
                                "Applied Machine Learning"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-4 mt-2 flex-shrink-0" />
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
