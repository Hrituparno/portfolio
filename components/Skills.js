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
        <section id="skills" className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technical Stack</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent systems
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="card group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 text-sm rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all cursor-default"
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
