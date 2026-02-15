import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="research" className="py-24 relative">
            <div className="grid-overlay opacity-50" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 retro-text" style={{ textShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}>
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-cyan-400 mx-auto" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="space-y-6 text-cyan-100/80 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p>
                            Technical Mentor at MIT Pune (Kalvium) with strong focus on Applied AI and Autonomous Systems. Building multi-agent architectures, LLM-powered applications, and end-to-end AI pipelines. Experienced in designing agentic workflows, prompt engineering, and integrating LLMs into production systems.
                        </p>
                        <p>
                            Currently mentoring students in <span className="text-cyan-400 font-bold">Python, C++, and AI development</span> while actively building AI projects. Hands-on experience with LangChain, CrewAI, HuggingFace, and cloud deployment.
                        </p>
                        <p>
                            Transitioning into <span className="text-purple-400 font-bold">Applied AI / GenAI / Autonomous AI Engineering</span> roles. Strong foundation in machine learning, deep learning, and system design. Focused on building intelligent systems that reason, plan, and execute autonomously.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-cyan-400 retro-text">Core Focus Areas</h3>
                        <ul className="space-y-5">
                            {[
                                "Multi-Agent System Design & Orchestration",
                                "LLM Pipeline Engineering & Prompt Optimization",
                                "Autonomous Reasoning & Planning Architectures",
                                "End-to-End AI Workflow Implementation"
                            ].map((item, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-start text-cyan-100/90"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <span className="w-2 h-2 bg-cyan-400 mr-4 mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.8)' }} />
                                    <span className="text-base font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
