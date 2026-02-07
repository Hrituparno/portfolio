import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

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
        { name: 'Research', href: '#research' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-zinc-300 transition-colors">
                            Hrituparno.
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4 pl-6 border-l border-zinc-800">
                            <a
                                href="https://github.com/Hrituparno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-400 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
