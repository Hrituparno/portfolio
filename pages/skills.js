import Layout from '../components/Layout';
import Skills from '../components/Skills';
import NarutoGuide from '../components/NarutoGuide';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function SkillsPage() {
    return (
        <Layout>
            {/* Home Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-24 left-4 z-40"
            >
                <Link href="/">
                    <motion.button
                        className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white border-2 border-orange-400 hover:bg-orange-600 transition-all font-bold retro-text"
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ boxShadow: '0 0 20px rgba(255, 140, 0, 0.5)' }}
                    >
                        <Home className="w-5 h-5" />
                        HOME
                    </motion.button>
                </Link>
            </motion.div>

            {/* Naruto Guide */}
            <NarutoGuide 
                section="skills"
                message="These are Hrituparno's ninja techniques! Python, C++, AI... He's mastered them all, dattebayo!"
                position="right"
            />

            <Skills />
        </Layout>
    );
}
