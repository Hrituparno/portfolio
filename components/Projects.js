import { useState, useEffect } from 'react';
import { Github, ExternalLink, Play, BookOpen, Stars, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const highlightProjects = [
    {
        name: "ScholarPulse",
        description: "Autonomous AI system simulating human research workflow. Features arXiv literature ingestion, hypothesis generation, and Gemini LLM integration.",
        tags: ["Streamlit", "Django", "Gemini API", "Autonomous Agents"],
        githubUrl: "https://github.com/Hrituparno/scholarpulse",
        demoUrl: "https://hrituparno-scholarpulse-app-nya41k.streamlit.app/",
        hasDemo: true,
        type: "Agentic System",
        className: "md:col-span-8 md:row-span-2" // Large featured item
    },
    {
        name: "Flash News App",
        description: "Multi-agent engine for real-time news research. Native sub-path integration.",
        tags: ["Flask", "CrewAI", "Python"],
        githubUrl: "https://github.com/Hrituparno/Flask_News_App",
        demoUrl: "/flashnews/",
        hasDemo: true,
        type: "Multi-Agent System",
        className: "md:col-span-4 md:row-span-1"
    },
    {
        name: "Translation Hub",
        description: "Interactive Gradio interface for transformer-based NLP translation.",
        tags: ["HuggingFace", "Gradio", "NLP"],
        githubUrl: "https://github.com/Hrituparno/translation-hub",
        demoUrl: "https://huggingface.co/spaces/hrituparno/translation-hub",
        hasDemo: true,
        type: "Interactive App",
        className: "md:col-span-4 md:row-span-1"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">System Portfolio</h2>
                        <p className="text-zinc-500 text-lg">
                            Experimental implementations of agentic architectures and cognitive simulation models.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm text-zinc-400">
                            <Stars className="w-4 h-4 text-yellow-500" />
                            <span>All Open Source</span>
                        </div>
                    </div>
                </div>

                <div className="bento-grid">
                    {highlightProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${project.className} glass-card group rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden`}
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                                        {project.type}
                                    </span>
                                    <div className="flex gap-2">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        {project.hasDemo && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-blue-400">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs font-mono text-zinc-500">
                                            #{tag.replace(/\s+/g, '').toLowerCase()}
                                        </span>
                                    ))}
                                </div>

                                {project.hasDemo && (
                                    <a
                                        href={project.demoUrl}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform"
                                    >
                                        Launch System <Play className="w-3 h-3 fill-current" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
