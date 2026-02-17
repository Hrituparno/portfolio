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
        <section id="skills" className="py-24 relative">
            <div className="grid-overlay opacity-20" />
            
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <motion.img
                            src="/naruto-guide.jpg"
                            alt="Naruto"
                            className="w-12 h-12 rounded-full object-cover"
                            animate={{ 
                                rotate: [0, 10, -10, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 140, 0, 0.6))' }}
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 retro-text" style={{ textShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}>
                            Technical Stack
                        </h2>
                        <motion.img
                            src="/naruto-guide.jpg"
                            alt="Naruto"
                            className="w-12 h-12 rounded-full object-cover"
                            animate={{ 
                                rotate: [0, -10, 10, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 140, 0, 0.6))' }}
                        />
                    </div>
                    <p className="text-cyan-200/70 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent systems
                    </p>
                    <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="card group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-purple-400 group-hover:text-purple-300 transition-colors retro-text">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={sIdx}
                                        className="px-4 py-2 text-sm bg-gray-800/50 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all cursor-default font-bold"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
