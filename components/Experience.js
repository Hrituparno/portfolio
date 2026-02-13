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
        <section id="experience" className="py-24 bg-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Experience & Education</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                            Experience
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="card">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h4>
                                    <h5 className="text-lg text-indigo-600 font-semibold mb-3">{exp.organization}</h5>
                                    <p className="text-sm text-gray-500 font-medium mb-4 px-3 py-1 bg-gray-100 rounded-full inline-block">
                                        {exp.period}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="card">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                                    <h5 className="text-lg text-purple-600 font-semibold mb-3">{edu.institution}</h5>
                                    <p className="text-sm text-gray-500 font-medium inline-block px-3 py-1 bg-gray-100 rounded-full">
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
