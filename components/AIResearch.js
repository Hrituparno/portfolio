import { Cpu, BookOpen, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIResearch() {
    const highlights = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Autonomous Agents",
            description: "Building systems that can reason, plan, and execute complex tasks independently"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Research Workflows",
            description: "Simulating human research processes from literature review to hypothesis generation"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "LLM Integration",
            description: "Leveraging Gemini, GPT-4, and other models for intelligent decision-making"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Production Ready",
            description: "Bridging the gap between research prototypes and scalable AI solutions"
        }
    ];

    return (
        <section id="ai-research" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
            <div className="grid-overlay opacity-40" />
            
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400 retro-text" style={{ textShadow: '0 0 20px rgba(157, 78, 221, 0.5)' }}>
                        Research Focus
                    </h2>
                    <p className="text-cyan-200/70 text-lg max-w-2xl mx-auto">
                        Exploring the intersection of autonomous systems and artificial intelligence
                    </p>
                    <div className="w-20 h-1 bg-purple-400 mx-auto mt-6" style={{ boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-900/50 backdrop-blur-sm p-6 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all group"
                        >
                            <motion.div 
                                className="p-3 bg-cyan-400/10 border-2 border-cyan-400/50 text-cyan-400 inline-block mb-4 group-hover:bg-cyan-400 group-hover:text-gray-900 transition-colors"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-lg font-bold text-cyan-300 mb-2 retro-text">{item.title}</h3>
                            <p className="text-cyan-100/70 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
