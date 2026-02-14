import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Star, Zap, Code, Brain, Rocket } from 'lucide-react';

const gameDialogues = [
    {
        id: 1,
        character: "🤖",
        name: "AI Bot",
        text: "Greetings, traveler! I'm an AI agent created by Hrituparno. Want to know about my creator?",
        options: ["Tell me about him!", "What does he do?", "Show me his skills!"]
    },
    {
        id: 2,
        character: "🧠",
        name: "Neural Network",
        text: "Hrituparno is an AI Research Engineer who builds autonomous multi-agent systems. He's like a wizard, but for AI!",
        options: ["That's cool! What else?", "Multi-agent systems?", "Continue..."]
    },
    {
        id: 3,
        character: "🎓",
        name: "Professor Bot",
        text: "He holds an M.Tech in Computer Science and mentors students at MIT Pune (Kalvium) in Python, C++, and AI applications!",
        options: ["Impressive!", "What projects has he built?", "Tell me more!"]
    },
    {
        id: 4,
        character: "🚀",
        name: "ScholarPulse AI",
        text: "I'm ScholarPulse - his flagship project! I simulate human research workflows, ingest arXiv papers, and generate hypotheses using Gemini LLM!",
        options: ["Amazing!", "What else did he create?", "Show me more!"]
    },
    {
        id: 5,
        character: "⚡",
        name: "Flash News Bot",
        text: "I'm Flash News! A multi-agent system for real-time news research. Hrituparno built me using CrewAI and Flask!",
        options: ["Awesome!", "What are his skills?", "Continue!"]
    },
    {
        id: 6,
        character: "💻",
        name: "Code Master",
        text: "His tech stack? Python, C++, Java, Deep Learning, NLP, LangChain, HuggingFace, and more! He's a full-stack AI engineer!",
        options: ["Incredible!", "What's his mission?", "Tell me his goal!"]
    },
    {
        id: 7,
        character: "🌟",
        name: "Vision AI",
        text: "His mission: Bridge the gap between raw intelligence and autonomous action. Building the next generation of research agents!",
        options: ["That's inspiring!", "How can I contact him?", "Final thoughts?"]
    },
    {
        id: 8,
        character: "📧",
        name: "Contact Bot",
        text: "Ready to collaborate? Find him at hritupornochakraborty@gmail.com or connect on LinkedIn and GitHub!",
        options: ["Let's connect!", "View Projects", "Play Again!"]
    }
];

export default function RetroGame() {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentDialogue, setCurrentDialogue] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [particles, setParticles] = useState([]);

    const dialogue = gameDialogues[currentDialogue];

    const handleChoice = (choiceIndex) => {
        // Add points for interaction
        setScore(score + 100);
        
        // Create particle effect
        createParticles();
        
        // Move to next dialogue
        if (currentDialogue < gameDialogues.length - 1) {
            setTimeout(() => {
                setCurrentDialogue(currentDialogue + 1);
            }, 300);
        } else {
            // Game completed
            setShowScore(true);
        }
    };

    const createParticles = () => {
        const newParticles = Array.from({ length: 10 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
        }));
        setParticles(newParticles);
        setTimeout(() => setParticles([]), 1000);
    };

    const resetGame = () => {
        setCurrentDialogue(0);
        setScore(0);
        setShowScore(false);
        setGameStarted(true);
    };

    if (!gameStarted) {
        return (
            <section id="retro-game" className="py-24 relative overflow-hidden">
                <div className="grid-overlay opacity-20" />
                
                <div className="container px-4 mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block mb-6"
                        >
                            <Gamepad2 className="w-20 h-20 text-cyan-400" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 204, 0.6))' }} />
                        </motion.div>
                        
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-cyan-400 retro-text" style={{ textShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}>
                            RETRO QUEST
                        </h2>
                        
                        <p className="text-xl text-purple-300 mb-8 max-w-2xl mx-auto">
                            Play an interactive 90s-style game to learn about Hrituparno's journey in AI!
                        </p>
                        
                        <motion.button
                            onClick={() => setGameStarted(true)}
                            className="btn-primary text-xl px-12 py-6 inline-flex items-center gap-3"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ 
                                boxShadow: [
                                    '0 0 20px rgba(0, 255, 204, 0.3)',
                                    '0 0 40px rgba(0, 255, 204, 0.6)',
                                    '0 0 20px rgba(0, 255, 204, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="w-6 h-6" />
                            START GAME
                        </motion.button>
                        
                        <div className="mt-12 flex justify-center gap-8 text-cyan-400/70">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                <span className="retro-text text-sm">Interactive Story</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="w-5 h-5" />
                                <span className="retro-text text-sm">Learn About AI</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code className="w-5 h-5" />
                                <span className="retro-text text-sm">Retro Style</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    if (showScore) {
        return (
            <section id="retro-game" className="py-24 relative overflow-hidden">
                <div className="grid-overlay opacity-20" />
                
                <div className="container px-4 mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="inline-block mb-6"
                        >
                            <Star className="w-24 h-24 text-yellow-400" style={{ filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))' }} />
                        </motion.div>
                        
                        <h2 className="text-6xl font-bold mb-4 text-cyan-400 retro-text" style={{ textShadow: '0 0 30px rgba(0, 255, 204, 0.8)' }}>
                            QUEST COMPLETE!
                        </h2>
                        
                        <p className="text-3xl text-purple-300 mb-8">
                            Final Score: <span className="text-yellow-400 font-bold">{score}</span> 🏆
                        </p>
                        
                        <p className="text-xl text-cyan-200/80 mb-12 max-w-2xl mx-auto">
                            You've learned about Hrituparno's AI journey! Ready to collaborate on the next generation of autonomous systems?
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={resetGame}
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Gamepad2 className="w-5 h-5" />
                                Play Again
                            </motion.button>
                            
                            <motion.a
                                href="#projects"
                                className="btn-secondary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Rocket className="w-5 h-5" />
                                View Projects
                            </motion.a>
                            
                            <motion.a
                                href="#contact"
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📧 Get In Touch
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="retro-game" className="py-24 relative overflow-hidden min-h-screen flex items-center">
            <div className="grid-overlay opacity-20" />
            
            {/* Particle effects */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, scale: 0, x: '50%', y: '50%' }}
                        animate={{ 
                            opacity: 0, 
                            scale: 2,
                            x: `${particle.x}%`,
                            y: `${particle.y}%`
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none"
                        style={{ 
                            left: '50%', 
                            top: '50%',
                            boxShadow: '0 0 20px rgba(0, 255, 204, 0.8)'
                        }}
                    />
                ))}
            </AnimatePresence>
            
            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                {/* Score Display */}
                <motion.div 
                    className="text-right mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="inline-block px-6 py-3 border-2 border-cyan-400 bg-gray-900/80 backdrop-blur-sm">
                        <span className="text-cyan-400 font-bold retro-text text-xl">
                            SCORE: {score}
                        </span>
                    </div>
                </motion.div>

                {/* Game Screen */}
                <motion.div
                    key={currentDialogue}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="card relative"
                >
                    {/* Character Display */}
                    <div className="text-center mb-8">
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-8xl mb-4 inline-block"
                            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 204, 0.5))' }}
                        >
                            {dialogue.character}
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-purple-400 retro-text">
                            {dialogue.name}
                        </h3>
                    </div>

                    {/* Dialogue Box */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="bg-gray-800/50 border-2 border-cyan-400/50 p-6 mb-8 relative"
                    >
                        <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-400"></div>
                        
                        <p className="text-cyan-100 text-lg leading-relaxed">
                            {dialogue.text}
                        </p>
                    </motion.div>

                    {/* Choice Buttons */}
                    <div className="space-y-4">
                        {dialogue.options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleChoice(index)}
                                className="w-full px-6 py-4 bg-transparent border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/20 hover:border-purple-400 transition-all font-bold retro-text text-left flex items-center gap-3"
                                whileHover={{ x: 10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="text-cyan-400">▶</span>
                                {option}
                            </motion.button>
                        ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-8 flex justify-center gap-2">
                        {gameDialogues.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 ${
                                    index === currentDialogue 
                                        ? 'bg-cyan-400' 
                                        : index < currentDialogue 
                                        ? 'bg-purple-400' 
                                        : 'bg-gray-700'
                                }`}
                                style={index === currentDialogue ? { boxShadow: '0 0 10px rgba(0, 255, 204, 0.8)' } : {}}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
