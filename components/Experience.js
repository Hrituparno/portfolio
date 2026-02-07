export default function Experience() {
    const experiences = [
        {
            role: "Academic Mentor – Computer Science",
            organization: "MIT Pune (Kalvium)",
            period: "Present",
            description: "Mentoring B.Tech students in Python & C++. Guiding AI and LLM-based real-world projects."
        }
    ];

    const education = [
        {
            degree: "M.Tech (CSE) – Computer Science & Engineering",
            institution: "MAKAUT",
            period: "2022 – 2024"
        },
        {
            degree: "B.Tech (EE) – Electrical Engineering",
            institution: "MAKAUT",
            period: "2018 – 2022"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Experience Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-zinc-100 flex items-center">
                            Experience
                        </h2>
                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-zinc-800">
                                    <div className="absolute top-0 left-[-4px] w-2 h-2 bg-blue-500 rounded-full" />
                                    <h3 className="text-xl font-bold text-zinc-200">{exp.role}</h3>
                                    <h4 className="text-lg text-blue-400 mb-2">{exp.organization}</h4>
                                    <p className="text-sm text-zinc-500 font-mono mb-4">{exp.period}</p>
                                    <p className="text-zinc-400">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-zinc-100 flex items-center">
                            Education
                        </h2>
                        <div className="space-y-12">
                            {education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-zinc-800">
                                    <div className="absolute top-0 left-[-4px] w-2 h-2 bg-purple-500 rounded-full" />
                                    <h3 className="text-xl font-bold text-zinc-200">{edu.degree}</h3>
                                    <h4 className="text-lg text-purple-400 mb-2">{edu.institution}</h4>
                                    <p className="text-sm text-zinc-500 font-mono">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
