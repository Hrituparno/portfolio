import { motion } from 'framer-motion';
import { Sparkles, Code, Brain, Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function ProfileHero() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="grid-overlay opacity-20" />
            
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image with Retro Effects */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Glowing border effect */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(0, 255, 204, 0.3)',
                                        '0 0 40px rgba(0, 255, 204, 0.6)',
                                        '0 0 20px rgba(0, 255, 204, 0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 border-4 border-cyan-400 z-10"
                                style={{ transform: 'translate(-10px, -10px)' }}
                            />
                            
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(157, 78, 221, 0.3)',
                                        '0 0 40px rgba(157, 78, 221, 0.6)',
                                        '0 0 20px rgba(157, 78, 221, 0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                className="absolute inset-0 border-4 border-purple-400 z-10"
                                style={{ transform: 'translate(10px, 10px)' }}
                            />
                            
                            {/* Profile Image - Using CSS to create avatar */}
                            <div className="relative z-20 overflow-hidden border-4 border-cyan-400 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                                <div className="relative aspect-square flex items-center justify-center">
                                    {/* Retro scan line effect overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none" style={{
                                        background: 'repeating-linear-gradient(0deg, rgba(0, 255, 204, 0.03) 0px, transparent 2px, transparent 4px)',
                                    }} />
                                    
                                    {/* Color overlay for retro effect */}
                                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 mix-blend-overlay" />
                                    
                                    {/* Stylized Avatar */}
                                    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-12">
                                        {/* Head */}
                                        <motion.div 
                                            className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 mb-8 relative"
                                            animate={{ 
                                                boxShadow: [
                                                    '0 0 30px rgba(0, 255, 204, 0.5)',
                                                    '0 0 50px rgba(157, 78, 221, 0.7)',
                                                    '0 0 30px rgba(0, 255, 204, 0.5)'
                                                ]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            {/* Eyes */}
                                            <div className="absolute top-12 left-8 w-4 h-4 bg-gray-900 rounded-full"></div>
                                            <div className="absolute top-12 right-8 w-4 h-4 bg-gray-900 rounded-full"></div>
                                            {/* Smile */}
                                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-6 border-b-4 border-gray-900 rounded-full"></div>
                                        </motion.div>
                                        
                                        {/* Body */}
                                        <div className="w-40 h-48 bg-gradient-to-b from-purple-400 to-cyan-400 relative" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}>
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 bg-gradient-to-t from-cyan-400/50 to-transparent"
                                            />
                                        </div>
                                        
                                        {/* Name Badge */}
                                        <motion.div 
                                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gray-900 border-2 border-cyan-400"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <span className="text-cyan-400 font-bold retro-text text-sm">HC</span>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Vignette effect */}
                                    <div className="absolute inset-0 z-10" style={{
                                        background: 'radial-gradient(circle, transparent 50%, rgba(10, 10, 20, 0.8) 100%)'
                                    }} />
                                </div>
                            </div>
                            
                            {/* Floating particles around image */}
                            <motion.div
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-8 -right-8 text-6xl z-30"
                                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 204, 0.6))' }}
                            >
                                🤖
                            </motion.div>
                            
                            <motion.div
                                animate={{ 
                                    y: [0, 20, 0],
                                    rotate: [0, -10, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-8 -left-8 text-6xl z-30"
                                style={{ filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.6))' }}
                            >
                                🧠
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Profile Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-cyan-400/50 bg-cyan-400/10 mb-6"
                            animate={{
                                boxShadow: [
                                    '0 0 10px rgba(0, 255, 204, 0.3)',
                                    '0 0 20px rgba(0, 255, 204, 0.5)',
                                    '0 0 10px rgba(0, 255, 204, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 font-bold retro-text text-sm">AI RESEARCH ENGINEER</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400 retro-text" style={{ textShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}>
                            MEET THE CREATOR
                        </h2>

                        <div className="space-y-4 text-cyan-100/80 text-lg leading-relaxed mb-8">
                            <p>
                                <span className="text-purple-400 font-bold">Hrituparno Chakraborty</span> is pioneering the future of autonomous AI systems. With expertise in multi-agent architectures and LLM pipelines, he's building the next generation of intelligent research agents.
                            </p>
                            
                            <p>
                                Currently mentoring future AI engineers at <span className="text-cyan-400 font-bold">MIT Pune (Kalvium)</span>, he combines academic excellence with hands-on innovation.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <motion.div 
                                className="text-center p-4 border-2 border-cyan-400/30 bg-gray-900/50"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 204, 0.8)' }}
                            >
                                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-cyan-400 retro-text">5+</div>
                                <div className="text-xs text-cyan-300/70 retro-text">Languages</div>
                            </motion.div>
                            
                            <motion.div 
                                className="text-center p-4 border-2 border-purple-400/30 bg-gray-900/50"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(157, 78, 221, 0.8)' }}
                            >
                                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-purple-400 retro-text">10+</div>
                                <div className="text-xs text-purple-300/70 retro-text">AI Projects</div>
                            </motion.div>
                            
                            <motion.div 
                                className="text-center p-4 border-2 border-pink-400/30 bg-gray-900/50"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 0, 110, 0.8)' }}
                            >
                                <Rocket className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-pink-400 retro-text">2</div>
                                <div className="text-xs text-pink-300/70 retro-text">Degrees</div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mb-8">
                            <motion.a
                                href="https://github.com/Hrituparno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border-2 border-cyan-400/50 bg-gray-900/50 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Github className="w-6 h-6 text-cyan-400" />
                            </motion.a>
                            
                            <motion.a
                                href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border-2 border-purple-400/50 bg-gray-900/50 hover:bg-purple-400/20 hover:border-purple-400 transition-all"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >
                                <Linkedin className="w-6 h-6 text-purple-400" />
                            </motion.a>
                            
                            <motion.a
                                href="mailto:hritupornochakraborty@gmail.com"
                                className="p-3 border-2 border-pink-400/50 bg-gray-900/50 hover:bg-pink-400/20 hover:border-pink-400 transition-all"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Mail className="w-6 h-6 text-pink-400" />
                            </motion.a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#retro-game"
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                🎮 Play Interactive Game
                            </motion.a>
                            
                            <motion.a
                                href="#contact"
                                className="btn-secondary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📧 Get In Touch
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
