import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Rocket } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-medium mb-8 text-indigo-700">
                            <Sparkles className="w-4 h-4" />
                            <span>Ready for 2026 Research Cohorts</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
                            Hrituparno <br className="hidden sm:block" /> Chakraborty
                        </h1>

                        <h2 className="text-xl md:text-3xl text-gray-600 font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
                            Pioneering <span className="gradient-text font-semibold">Autonomous Multi-Agent Systems</span> and LLM Micro-Architectures
                        </h2>

                        <p className="text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                            Bridging the gap between raw intelligence and autonomous action. Engineering the next generation of research agents.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a
                                href="https://scholarpulse.streamlit.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group btn-primary flex items-center gap-2"
                            >
                                <Rocket className="w-5 h-5" />
                                Launch ScholarPulse
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#projects"
                                className="btn-secondary flex items-center gap-2"
                            >
                                View Projects
                            </a>
                        </div>

                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
