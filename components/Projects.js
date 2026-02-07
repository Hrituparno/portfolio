import { useState, useEffect } from 'react';
import { Github, ExternalLink, Play, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const highlightProjects = [
    {
        name: "Research AI Agent",
        description: "Autonomous AI system simulating human research workflow. Features arXiv literature ingestion, hypothesis generation, and Gemini LLM integration.",
        tags: ["Autonomous Agents", "Gemini API", "arXiv API", "Multi-Agent System"],
        githubUrl: "https://github.com/Hrituparno/research-ai-agent", // Placeholder
        demoUrl: null,
        hasDemo: false,
        type: "Agentic System"
    },
    {
        name: "AI News Research Assistant",
        description: "Multi-agent AI system for real-time news research using CrewAI and Serper API. Focuses on reasoning and structured outputs.",
        tags: ["CrewAI", "Serper API", "Multi-Agent System", "Research Helper"],
        githubUrl: "https://github.com/Hrituparno/ai-news-assistant", // Placeholder
        demoUrl: null,
        hasDemo: false,
        type: "Multi-Agent System"
    },
    {
        name: "Multilingual Translation Hub",
        description: "HuggingFace transformer models with interactive Gradio interface for real-time multi-language translation.",
        tags: ["HuggingFace", "Gradio", "Transformers", "NLP"],
        githubUrl: "https://github.com/Hrituparno/translation-hub", // Placeholder
        demoUrl: "https://huggingface.co/spaces/hrituparno/translation-hub", // Placeholder
        hasDemo: true,
        type: "Interactive App"
    }
];

export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Optional: Fetch other repos from GitHub API
        // fetch('https://api.github.com/users/Hrituparno/repos')
        //   .then(res => res.json())
        //   .then(data => setRepos(data));
    }, []);

    return (
        <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-zinc-100">Featured Research & Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlightProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-2 py-1 text-xs font-semibold text-blue-400 bg-blue-900/20 rounded-md border border-blue-900/50">
                                        {project.type}
                                    </span>
                                    <div className="flex space-x-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 hover:text-white transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-zinc-400 text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800/50 rounded border border-zinc-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.hasDemo && (
                                <div className="px-6 py-3 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center">
                                    <span className="text-xs text-zinc-500 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                                        Live Demo Available
                                    </span>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-medium text-blue-400 hover:underline flex items-center"
                                    >
                                        Launch <Play size={12} className="ml-1" />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
