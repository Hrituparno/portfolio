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
        <section id="ai-research" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Research Focus</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Exploring the intersection of autonomous systems and artificial intelligence
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 inline-block mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
