import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "C++", "Java", "SQL", "JavaScript"]
    },
    {
        title: "AI & Machine Learning",
        skills: ["Deep Learning", "Neural Networks", "NLP", "Reinforcement Learning"]
    },
    {
        title: "Agentic Engineering",
        skills: ["Autonomous Agents", "Multi-Agent Systems", "LLM Pipelines", "RAG"]
    },
    {
        title: "Frameworks",
        skills: ["CrewAI", "Flask", "FastAPI", "Gradio", "LangChain", "HuggingFace"]
    },
    {
        title: "Applied Research",
        skills: ["Literature Review", "Hypothesis Design", "Technical Writing"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center">Technical Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl p-8 hover:bg-zinc-800/30 transition-all group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-blue-400 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 text-sm rounded-full glass-button text-zinc-400 hover:text-white hover:border-blue-500/50 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
