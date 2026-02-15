import { motion } from 'framer-motion';
import { ArrowRight, Download, Zap, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const newStars = Array.from({ length: 100 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 3,
        }));
        setStars(newStars);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Starfield Background */}
            <div className="stars">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Grid Overlay */}
            <div className="grid-overlay" />

            {/* Scan Line Effect */}
            <div className="scan-line" />

            {/* Floating Emojis */}
            <motion.div
                className="floating-emoji animate-float-slow"
                style={{ top: '15%', right: '10%' }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            >
                🍍
            </motion.div>

            <motion.div
                className="floating-emoji animate-float"
                style={{ bottom: '20%', left: '8%', fontSize: '3rem' }}
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
                ✋
            </motion.div>

            <motion.div
                className="floating-emoji"
                style={{ top: '40%', right: '15%', fontSize: '2.5rem' }}
                animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            >
                🚀
            </motion.div>

            <motion.div
                className="floating-emoji animate-float-slow"
                style={{ bottom: '30%', right: '20%', fontSize: '2rem' }}
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 3 }}
            >
                ⚡
            </motion.div>

            {/* Glowing Orbs */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-float-slow" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[100px] animate-float animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-[100px] animate-float-slow animation-delay-4000" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div 
                            className="inline-flex items-center gap-2 py-2 px-5 border-2 border-cyan-400/50 text-sm font-bold mb-8 text-cyan-400 retro-text bg-gray-900/30 backdrop-blur-sm"
                            animate={{ 
                                boxShadow: [
                                    '0 0 20px rgba(0, 255, 204, 0.3)',
                                    '0 0 40px rgba(0, 255, 204, 0.6)',
                                    '0 0 20px rgba(0, 255, 204, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="w-4 h-4" />
                            <span>Technical Mentor → Building AI Systems</span>
                        </motion.div>

                        <motion.h1 
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight retro-text"
                            style={{
                                color: '#e0e0ff',
                                textShadow: '0 0 30px rgba(0, 255, 204, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)'
                            }}
                            animate={{
                                textShadow: [
                                    '0 0 30px rgba(0, 255, 204, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
                                    '0 0 40px rgba(0, 255, 204, 0.7), 0 0 80px rgba(157, 78, 221, 0.5)',
                                    '0 0 30px rgba(0, 255, 204, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Hrituparno <br className="hidden sm:block" /> Chakraborty
                        </motion.h1>

                        <h2 className="text-xl md:text-3xl text-purple-300 font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
                            Building <span className="gradient-text font-bold">Autonomous AI Systems</span> with Multi-Agent Architectures and LLM Orchestration
                        </h2>

                        <p className="text-cyan-200/70 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Technical Mentor transitioning into Applied AI Engineering. Designing and implementing agentic systems, LLM pipelines, and autonomous research workflows.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <motion.a
                                href="https://scholarpulse.streamlit.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group btn-primary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Rocket className="w-5 h-5" />
                                Launch ScholarPulse
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="#projects"
                                className="btn-secondary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                        </div>

                        <motion.a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 transition-colors text-sm font-bold retro-text"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Retro Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-cyan-400/50 flex justify-center" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.3)' }}>
                    <motion.div 
                        className="w-1 h-2 bg-cyan-400 mt-2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
