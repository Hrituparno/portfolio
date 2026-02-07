const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "C++", "Java", "SQL", "JavaScript"]
    },
    {
        title: "AI & Machine Learning",
        skills: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Reinforcement Learning"]
    },
    {
        title: "AI Systems",
        skills: ["Autonomous Agents", "Multi-Agent Systems", "LLM Pipelines", "RAG"]
    },
    {
        title: "Tools & Frameworks",
        skills: ["CrewAI", "Flask", "FastAPI", "Gradio", "LangChain", "HuggingFace"]
    },
    {
        title: "Research Skills",
        skills: ["Literature Review", "Hypothesis Generation", "Experiment Design", "Technical Writing"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-zinc-100">Technical Arsenal</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-zinc-200 group-hover:text-blue-400 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
