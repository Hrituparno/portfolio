import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Dynamic Glowing Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
                <div className="bg-glow top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30" />
                <div className="bg-glow bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full glass-button text-sm font-medium mb-8 text-zinc-300">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span>Ready for 2026 Research Cohorts</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-gradient">
                        Hrituparno <br /> Chakraborty
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-zinc-400 font-light mb-10 max-w-4xl mx-auto leading-tight">
                        Pioneering <span className="text-white font-medium">Autonomous Multi-Agent Systems</span> and LLM Micro-Architectures
                    </h2>

                    <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Bridge the gap between raw intelligence and autonomous action.
                        Engineering the next generation of research agents.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="group px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-all flex items-center shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Explore Systems
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="px-10 py-4 rounded-full glass-button text-white font-medium hover:scale-105 transition-all flex items-center"
                        >
                            <Download className="mr-2 w-5 h-5 opacity-70" />
                            Curriculum Vitae
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
            >
                <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
            </motion.div>
        </section>
    );
}
