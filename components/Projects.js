import { useState, useEffect } from 'react';
import { Github, ExternalLink, Rocket, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const highlightProjects = [
    {
        name: "ScholarPulse",
        description: "Autonomous AI system simulating human research workflow. Features arXiv literature ingestion, hypothesis generation, and Gemini LLM integration.",
        tags: ["Streamlit", "Django", "Gemini API", "Autonomous Agents"],
        githubUrl: "https://github.com/Hrituparno/scholarpulse",
        demoUrl: "https://scholarpulse.streamlit.app/",
        hasDemo: true,
        type: "Agentic System",
        featured: true
    },
    {
        name: "Flash News App",
        description: "Multi-agent engine for real-time news research. Native sub-path integration.",
        tags: ["Flask", "CrewAI", "Python"],
        githubUrl: "https://github.com/Hrituparno/Flask_News_App",
        demoUrl: "https://flask-news-app.vercel.app/",
        hasDemo: true,
        type: "Multi-Agent System"
    },
    {
        name: "Translation Hub",
        description: "Interactive Gradio interface for transformer-based NLP translation.",
        tags: ["HuggingFace", "Gradio", "NLP"],
        githubUrl: "https://github.com/Hrituparno/translation-hub",
        demoUrl: "https://huggingface.co/spaces/hrituparno/translation-hub",
        hasDemo: true,
        type: "Interactive App"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="grid-overlay opacity-30" />
            
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400 retro-text" style={{ textShadow: '0 0 20px rgba(157, 78, 221, 0.5)' }}>
                        Featured Projects
                    </h2>
                    <p className="text-cyan-200/70 text-lg max-w-2xl mx-auto">
                        Experimental implementations of agentic architectures and cognitive simulation models.
                    </p>
                    <div className="w-20 h-1 bg-purple-400 mx-auto mt-6" style={{ boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlightProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`card group ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                        >
                            <div className={`flex ${project.featured ? 'flex-col lg:flex-row gap-8' : 'flex-col'}`}>
                                <div className={project.featured ? 'lg:w-2/3' : 'w-full'}>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-4 py-1.5 border-2 border-cyan-400/50 text-xs uppercase tracking-wider font-bold text-cyan-400 retro-text bg-cyan-400/10">
                                            {project.type}
                                        </span>
                                        <div className="flex gap-2">
                                            <motion.a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 hover:bg-cyan-400/10 transition-colors text-cyan-400/70 hover:text-cyan-400 border-2 border-transparent hover:border-cyan-400/50"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.a>
                                            {project.hasDemo && (
                                                <motion.a 
                                                    href={project.demoUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-2 hover:bg-purple-400/10 transition-colors text-purple-400/70 hover:text-purple-400 border-2 border-transparent hover:border-purple-400/50"
                                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300 group-hover:text-cyan-400 transition-colors retro-text">
                                        {project.name}
                                    </h3>

                                    <p className="text-cyan-100/70 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-gray-800/50 text-purple-300 border border-purple-400/30 text-xs font-bold retro-text">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.hasDemo && (
                                        <motion.a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-3 transition-all retro-text"
                                            whileHover={{ x: 5 }}
                                        >
                                            <Terminal className="w-4 h-4" />
                                            Launch Project →
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/Hrituparno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
