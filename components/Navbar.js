import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#research' },
        { name: 'Game', href: '#retro-game' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b-2 border-cyan-400/30' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.div 
                        className="flex-shrink-0 flex items-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link href="/" className="text-2xl font-bold tracking-tight text-cyan-400 hover:text-cyan-300 transition-colors retro-text" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}>
                            HC.
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-bold text-cyan-300/70 hover:text-cyan-400 transition-colors retro-text"
                                    style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.3)' }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4 pl-8 border-l-2 border-cyan-400/30">
                            <motion.a
                                href="https://github.com/Hrituparno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400/70 hover:text-cyan-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400/70 hover:text-purple-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-cyan-400 hover:text-cyan-300 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-gray-900/95 backdrop-blur-md border-t-2 border-cyan-400/30"
                >
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-bold text-cyan-300/70 hover:text-cyan-400 hover:bg-cyan-400/10 retro-text border-l-2 border-transparent hover:border-cyan-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
}
