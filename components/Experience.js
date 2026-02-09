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
        <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Experience Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                            Experience
                        </h2>
                        <div className="space-y-8">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl relative shadow-lg hover:border-zinc-700 transition-colors">
                                    <div className="absolute top-8 left-0 -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-zinc-950 rounded-full hidden md:block" />
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-blue-400 font-medium mb-4">{exp.organization}</h4>
                                    <p className="text-sm text-zinc-500 font-mono mb-4 px-3 py-1 bg-zinc-900 rounded-full inline-block border border-zinc-800">
                                        {exp.period}
                                    </p>
                                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education.map((edu, idx) => (
                                <div key={idx} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl relative shadow-lg hover:border-zinc-700 transition-colors">
                                    <div className="absolute top-8 left-0 -translate-x-1/2 w-4 h-4 bg-purple-500 border-4 border-zinc-950 rounded-full hidden md:block" />
                                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                    <h4 className="text-lg text-purple-400 font-medium mb-4">{edu.institution}</h4>
                                    <p className="text-sm text-zinc-500 font-mono inline-block px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
                                        {edu.period}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
