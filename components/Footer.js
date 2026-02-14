import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative py-12 border-t-2 border-cyan-400/30">
            <div className="grid-overlay opacity-20" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div 
                        className="mb-4 md:mb-0 text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-cyan-400/70 text-sm font-bold retro-text">
                            &copy; {new Date().getFullYear()} Hrituparno Chakraborty. All rights reserved.
                        </p>
                        <p className="text-purple-400/50 text-xs mt-1 font-mono">
                            Built with Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </motion.div>
                    <motion.div 
                        className="flex space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.a 
                            href="https://github.com/Hrituparno" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-cyan-400/70 hover:text-cyan-400 transition-colors text-sm font-bold retro-text"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            GitHub
                        </motion.a>
                        <motion.a 
                            href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-purple-400/70 hover:text-purple-400 transition-colors text-sm font-bold retro-text"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            LinkedIn
                        </motion.a>
                        <motion.a 
                            href="mailto:hritupornochakraborty@gmail.com" 
                            className="text-pink-400/70 hover:text-pink-400 transition-colors text-sm font-bold retro-text"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            Email
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
