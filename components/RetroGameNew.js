import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Star, Zap, Home } from 'lucide-react';
import Link from 'next/link';

const gameDialogues = [
    {
        id: 1,
        character: "🍜",
        name: "Naruto Uzumaki",
        text: "Hey there! I'm Naruto! Let me tell you about my friend Hrituparno - he's an awesome AI ninja! Want to learn about him?",
        options: ["Yeah! Tell me!", "What does he do?", "Show me his skills!"]
    },
    {
        id: 2,
        character: "🍜",
        name: "Naruto",
        text: "Hrituparno builds autonomous multi-agent systems - it's like having Shadow Clones that think for themselves! He's an AI Research Engineer!",
        options: ["That's amazing!", "Multi-agent systems?", "Tell me more!"]
    },
    {
        id: 3,
        character: "🍜",
        name: "Naruto",
        text: "He's got an M.Tech in Computer Science and teaches students at MIT Pune (Kalvium)! He's like a Sensei for Python, C++, and AI!",
        options: ["Impressive!", "What projects?", "Continue!"]
    },
    {
        id: 4,
        character: "🍜",
        name: "Naruto",
        text: "His main jutsu is ScholarPulse - an AI that reads research papers and generates hypotheses! It's like my Rasengan, but for research!",
        options: ["Awesome!", "What else?", "Show me more!"]
    },
    {
        id: 5,
        character: "🍜",
        name: "Naruto",
        text: "He also created Flash News - a multi-agent system for real-time news! It's faster than my ninja speed, dattebayo!",
        options: ["Cool!", "His skills?", "Keep going!"]
    },
    {
        id: 6,
        character: "🍜",
        name: "Naruto",
        text: "His ninja techniques include Python, C++, Java, Deep Learning, NLP, LangChain, HuggingFace, and more! He's mastered them all!",
        options: ["Incredible!", "His mission?", "What's his goal?"]
    },
    {
        id: 7,
        character: "🍜",
        name: "Naruto",
        text: "His ninja way is to bridge the gap between raw intelligence and autonomous action! Building the next generation of research agents!",
        options: ["Inspiring!", "How to contact?", "Final words?"]
    },
    {
        id: 8,
        character: "🍜",
        name: "Naruto",
        text: "Ready to team up? You can reach him at hritupornochakraborty@gmail.com or on LinkedIn and GitHub! Believe it!",
        options: ["Let's connect!", "Explore more!", "Unlock pages!"]
    }
];

export default function RetroGame() {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentDialogue, setCurrentDialogue] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [particles, setParticles] = useState([]);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [showQuickAccess, setShowQuickAccess] = useState(false);

    // Load game progress from localStorage on mount
    useEffect(() => {
        const savedProgress = localStorage.getItem('narutoQuestProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            setGameStarted(progress.gameStarted || false);
            setCurrentDialogue(progress.currentDialogue || 0);
            setScore(progress.score || 0);
            setShowScore(progress.showScore || false);
            setGameCompleted(progress.gameCompleted || false);
        }
    }, []);

    // Save game progress to localStorage whenever it changes
    useEffect(() => {
        const progress = {
            gameStarted,
            currentDialogue,
            score,
            showScore,
            gameCompleted
        };
        localStorage.setItem('narutoQuestProgress', JSON.stringify(progress));
    }, [gameStarted, currentDialogue, score, showScore, gameCompleted]);

    const dialogue = gameDialogues[currentDialogue];

    const handleChoice = (choiceIndex) => {
        // Award points based on choice quality
        let points = 100;
        if (choiceIndex === 0) points = 100; // Enthusiastic response
        if (choiceIndex === 1) points = 100; // Curious response
        if (choiceIndex === 2) points = 100; // Engaged response
        
        setScore(score + points);
        createParticles();
        
        if (currentDialogue < gameDialogues.length - 1) {
            setTimeout(() => {
                setCurrentDialogue(currentDialogue + 1);
            }, 300);
        } else {
            setGameCompleted(true);
            setShowScore(true);
        }
    };

    const jumpToDialogue = (index) => {
        setCurrentDialogue(index);
        setGameStarted(true);
        setShowScore(false);
        setShowQuickAccess(false);
    };

    const createParticles = () => {
        const newParticles = Array.from({ length: 15 }, (_, i) => ({
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
        setPagesUnlocked(false);
    };

    if (!gameStarted) {
        return (
            <section id="retro-game" className="py-24 relative overflow-hidden min-h-screen flex items-center">
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
                            <Gamepad2 className="w-20 h-20 text-orange-400" style={{ filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.6))' }} />
                        </motion.div>
                        
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-orange-400 retro-text" style={{ textShadow: '0 0 20px rgba(255, 140, 0, 0.5)' }}>
                            🍜 NARUTO'S QUEST 🍜
                        </h2>
                        
                        <p className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto">
                            Join Naruto on an adventure to learn about Hrituparno's AI journey! Complete the quest to unlock all portfolio pages! 🍜
                        </p>
                        
                        <div className="mb-8 p-4 border-2 border-orange-400/50 bg-orange-400/10 max-w-md mx-auto">
                            <p className="text-orange-300 text-sm retro-text">
                                🎮 Play once to unlock: About, Skills, Projects, Experience & Contact pages!
                            </p>
                            <p className="text-orange-300 text-xs retro-text mt-2">
                                💡 Earn 100 points per dialogue • Get ninja rank at the end!
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => setGameStarted(true)}
                                className="text-xl px-12 py-6 inline-flex items-center gap-3 bg-orange-500 text-white border-2 border-orange-400 hover:bg-orange-600 transition-all font-bold retro-text uppercase tracking-wider"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ 
                                    boxShadow: [
                                        '0 0 20px rgba(255, 140, 0, 0.3)',
                                        '0 0 40px rgba(255, 140, 0, 0.6)',
                                        '0 0 20px rgba(255, 140, 0, 0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Zap className="w-6 h-6" />
                                START QUEST
                            </motion.button>
                            
                            {gameCompleted && (
                                <motion.button
                                    onClick={() => setShowQuickAccess(true)}
                                    className="text-xl px-12 py-6 inline-flex items-center gap-3 bg-cyan-500 text-white border-2 border-cyan-400 hover:bg-cyan-600 transition-all font-bold retro-text uppercase tracking-wider"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Star className="w-6 h-6" />
                                    QUICK ACCESS
                                </motion.button>
                            )}
                        </div>
                        
                        <div className="mt-12 text-orange-300/70 retro-text text-sm">
                            🏆 Complete all 8 dialogues to unlock portfolio pages and earn your ninja rank!
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    // Quick Access Menu
    if (showQuickAccess) {
        return (
            <section id="retro-game" className="py-24 relative overflow-hidden min-h-screen flex items-center">
                <div className="grid-overlay opacity-20" />
                
                <div className="container px-4 mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-400 retro-text" style={{ textShadow: '0 0 20px rgba(255, 140, 0, 0.5)' }}>
                            🍜 QUICK ACCESS MENU 🍜
                        </h2>
                        
                        <p className="text-lg text-cyan-300 mb-8">
                            Jump directly to any topic about Hrituparno!
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {gameDialogues.map((dialogue, index) => (
                                <motion.button
                                    key={dialogue.id}
                                    onClick={() => jumpToDialogue(index)}
                                    className="p-4 bg-gray-900/50 border-2 border-orange-400/50 hover:border-orange-400 hover:bg-orange-400/20 transition-all text-left"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{dialogue.character}</span>
                                        <div>
                                            <div className="text-orange-400 font-bold retro-text text-sm">Topic {dialogue.id}</div>
                                            <div className="text-cyan-300 text-xs line-clamp-2">{dialogue.text}</div>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                        
                        <motion.button
                            onClick={() => setShowQuickAccess(false)}
                            className="px-8 py-3 bg-cyan-500 text-white border-2 border-cyan-400 hover:bg-cyan-600 transition-all font-bold retro-text"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← BACK TO START
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        );
    }

    if (showScore) {
        return (
            <section id="retro-game" className="py-24 relative overflow-hidden min-h-screen flex items-center">
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
                        
                        <h2 className="text-6xl font-bold mb-4 text-orange-400 retro-text" style={{ textShadow: '0 0 30px rgba(255, 140, 0, 0.8)' }}>
                            🍜 QUEST COMPLETE! 🍜
                        </h2>
                        
                        <p className="text-3xl text-cyan-300 mb-4">
                            Final Score: <span className="text-yellow-400 font-bold">{score}</span> 🏆
                        </p>
                        
                        {/* Achievement Badge based on score */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="inline-block mb-8"
                        >
                            {score === 800 ? (
                                <div className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 border-4 border-yellow-300">
                                    <div className="text-4xl mb-2">🥇</div>
                                    <div className="text-gray-900 font-bold retro-text text-xl">HOKAGE RANK!</div>
                                    <div className="text-gray-800 text-sm">Perfect Score - True Ninja!</div>
                                </div>
                            ) : score >= 600 ? (
                                <div className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 border-4 border-orange-300">
                                    <div className="text-4xl mb-2">🥈</div>
                                    <div className="text-white font-bold retro-text text-xl">JONIN RANK!</div>
                                    <div className="text-orange-100 text-sm">Elite Ninja Status</div>
                                </div>
                            ) : score >= 400 ? (
                                <div className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 border-4 border-cyan-300">
                                    <div className="text-4xl mb-2">🥉</div>
                                    <div className="text-white font-bold retro-text text-xl">CHUNIN RANK!</div>
                                    <div className="text-cyan-100 text-sm">Skilled Ninja</div>
                                </div>
                            ) : (
                                <div className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-400 border-4 border-green-300">
                                    <div className="text-4xl mb-2">🎖️</div>
                                    <div className="text-white font-bold retro-text text-xl">GENIN RANK!</div>
                                    <div className="text-green-100 text-sm">Beginner Ninja</div>
                                </div>
                            )}
                        </motion.div>
                        
                        <p className="text-xl text-orange-200/80 mb-8 max-w-2xl mx-auto">
                            You've completed Naruto's Quest! All portfolio pages are now unlocked in the navbar above! 🎉
                        </p>
                        
                        <div className="mb-12 p-4 border-2 border-cyan-400/50 bg-cyan-400/10 max-w-md mx-auto">
                            <p className="text-cyan-300 text-sm retro-text">
                                ✨ Check the navbar - new pages are now accessible!
                            </p>
                        </div>
                        
                        {/* Unlocked Pages Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                            <Link href="/about">
                                <motion.div
                                    className="p-6 bg-gray-900/50 border-2 border-orange-400 hover:bg-orange-400/20 transition-all cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-4xl mb-2">📖</div>
                                    <div className="text-orange-400 font-bold retro-text">ABOUT</div>
                                </motion.div>
                            </Link>

                            <Link href="/skills">
                                <motion.div
                                    className="p-6 bg-gray-900/50 border-2 border-cyan-400 hover:bg-cyan-400/20 transition-all cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-4xl mb-2">⚡</div>
                                    <div className="text-cyan-400 font-bold retro-text">SKILLS</div>
                                </motion.div>
                            </Link>

                            <Link href="/projects">
                                <motion.div
                                    className="p-6 bg-gray-900/50 border-2 border-purple-400 hover:bg-purple-400/20 transition-all cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-4xl mb-2">🚀</div>
                                    <div className="text-purple-400 font-bold retro-text">PROJECTS</div>
                                </motion.div>
                            </Link>

                            <Link href="/experience">
                                <motion.div
                                    className="p-6 bg-gray-900/50 border-2 border-pink-400 hover:bg-pink-400/20 transition-all cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-4xl mb-2">🎓</div>
                                    <div className="text-pink-400 font-bold retro-text">EXPERIENCE</div>
                                </motion.div>
                            </Link>

                            <Link href="/contact">
                                <motion.div
                                    className="p-6 bg-gray-900/50 border-2 border-green-400 hover:bg-green-400/20 transition-all cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-4xl mb-2">📧</div>
                                    <div className="text-green-400 font-bold retro-text">CONTACT</div>
                                </motion.div>
                            </Link>

                            <motion.div
                                onClick={resetGame}
                                className="p-6 bg-gray-900/50 border-2 border-yellow-400 hover:bg-yellow-400/20 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-4xl mb-2">🎮</div>
                                <div className="text-yellow-400 font-bold retro-text">PLAY AGAIN</div>
                            </motion.div>
                        </div>

                        <p className="text-orange-300/70 retro-text text-sm">
                            Click any page to explore! Use the HOME button to return here.
                        </p>
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
                        className="fixed w-4 h-4 bg-orange-400 rounded-full pointer-events-none"
                        style={{ 
                            left: '50%', 
                            top: '50%',
                            boxShadow: '0 0 20px rgba(255, 140, 0, 0.8)'
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
                    <div className="inline-block px-6 py-3 border-2 border-orange-400 bg-gray-900/80 backdrop-blur-sm">
                        <span className="text-orange-400 font-bold retro-text text-xl">
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
                    className="card relative border-orange-400/50"
                >
                    {/* Naruto Character and Dialogue - Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Naruto Character Display */}
                        <div className="flex flex-col items-center justify-center">
                            <motion.div
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative mb-4"
                            >
                                {/* Naruto Image */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40">
                                    <img
                                        src="/naruto-guide.jpg"
                                        alt="Naruto"
                                        className="w-full h-full object-contain rounded-full"
                                        style={{
                                            filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.6))',
                                        }}
                                        onError={(e) => {
                                            e.target.src = '/naruto-guide.png';
                                        }}
                                    />
                                </div>

                                {/* Chakra Glow Effect */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.7, 0.3]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-orange-400 rounded-full blur-2xl -z-10"
                                />
                            </motion.div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-orange-400 retro-text text-center">
                                {dialogue.name}
                            </h3>
                        </div>

                        {/* Dialogue Box */}
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="bg-gray-800/50 border-2 border-orange-400/50 p-6 relative h-full flex items-center"
                            >
                                <div className="absolute top-0 left-0 w-3 h-3 bg-orange-400"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-orange-400"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-400"></div>
                                
                                <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
                                    {dialogue.text}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Choice Buttons */}
                    <div className="space-y-4">
                        {dialogue.options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleChoice(index)}
                                className="w-full px-6 py-4 bg-transparent border-2 border-orange-400/50 text-orange-300 hover:bg-orange-400/20 hover:border-orange-400 transition-all font-bold retro-text text-left flex items-center gap-3 relative overflow-hidden group"
                                whileHover={{ x: 10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Animated background on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                />
                                
                                <motion.span 
                                    className="text-orange-400 text-xl"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    ▶
                                </motion.span>
                                <span className="relative z-10">{option}</span>
                                
                                {/* Sparkle effect on hover */}
                                <motion.span
                                    className="absolute right-4 text-yellow-400 opacity-0 group-hover:opacity-100"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    ✨
                                </motion.span>
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
                                        ? 'bg-orange-400' 
                                        : index < currentDialogue 
                                        ? 'bg-cyan-400' 
                                        : 'bg-gray-700'
                                }`}
                                style={index === currentDialogue ? { boxShadow: '0 0 10px rgba(255, 140, 0, 0.8)' } : {}}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
