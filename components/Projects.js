import { useState, useEffect } from 'react';
import { Github, ExternalLink, Rocket, BookOpen, Stars, Globe } from 'lucide-react';
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
        <section id="projects" className="py-24 bg-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experimental implementations of agentic architectures and cognitive simulation models.
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlightProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`card group hover:shadow-2xl ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                        >
                            <div className={`flex ${project.featured ? 'flex-col lg:flex-row gap-8' : 'flex-col'}`}>
                                <div className={project.featured ? 'lg:w-2/3' : 'w-full'}>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs uppercase tracking-wider font-bold text-indigo-700">
                                            {project.type}
                                        </span>
                                        <div className="flex gap-2">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            {project.hasDemo && (
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 rounded-full hover:bg-indigo-50 transition-colors text-indigo-600">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.hasDemo && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                                        >
                                            <Rocket className="w-4 h-4" />
                                            Launch Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Hrituparno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
