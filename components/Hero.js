import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-400 text-sm font-medium mb-6">
                        Available for Research Collaborations
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">
                        Hrituparno Chakraborty
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-zinc-400 font-light mb-8 max-w-3xl mx-auto">
                        AI Research Engineer building <span className="text-white font-normal">autonomous multi-agent systems</span>
                    </h2>

                    <p className="text-zinc-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Research-focused engineer with hands-on experience in LLM pipelines,
                        autonomous agents, and end-to-end AI research workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#projects"
                            className="group px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center"
                        >
                            View Research Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf" // Placeholder path
                            className="px-8 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-medium transition-colors flex items-center"
                        >
                            <Download className="mr-2 w-4 h-4" />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
