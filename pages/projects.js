import Layout from '../components/Layout';
import Projects from '../components/Projects';
import NarutoGuide from '../components/NarutoGuide';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <Layout>
            {/* Navigation Buttons */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-24 left-4 z-40 flex flex-col gap-3"
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
                
                <motion.button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white border-2 border-cyan-400 hover:bg-cyan-600 transition-all font-bold retro-text"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}
                >
                    <ArrowLeft className="w-5 h-5" />
                    BACK
                </motion.button>
            </motion.div>

            {/* Naruto Guide */}
            <NarutoGuide 
                section="projects"
                message="Check out these awesome projects! ScholarPulse is like my Shadow Clone Jutsu - it does research automatically!"
                position="left"
            />

            <Projects />
        </Layout>
    );
}
