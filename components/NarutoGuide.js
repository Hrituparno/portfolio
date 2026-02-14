import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NarutoGuide({ section, message, position = 'right' }) {
    const [isVisible, setIsVisible] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => setShowMessage(true), 500);
        return () => clearTimeout(timer);
    }, [section]);

    const narutoPositions = {
        right: { x: '85%', y: '50%' },
        left: { x: '5%', y: '50%' },
        top: { x: '50%', y: '10%' },
        bottom: { x: '50%', y: '85%' }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            className="fixed z-50 pointer-events-none"
            style={{
                left: narutoPositions[position].x,
                top: narutoPositions[position].y,
                transform: 'translate(-50%, -50%)'
            }}
        >
            {/* Naruto Character */}
            <motion.div
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative"
            >
                {/* Naruto Image Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <img
                        src="/naruto-guide.png"
                        alt="Naruto Guide"
                        className="w-full h-full object-contain"
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.6))',
                        }}
                        onError={(e) => {
                            // Fallback to emoji if image not found
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="text-8xl">🍜</div>';
                        }}
                    />
                </div>

                {/* Chakra Glow Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-orange-400 rounded-full blur-2xl -z-10"
                />
            </motion.div>

            {/* Speech Bubble */}
            {showMessage && message && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`absolute ${position === 'right' ? 'right-full mr-4' : 'left-full ml-4'} top-1/2 -translate-y-1/2 pointer-events-auto`}
                >
                    <div className="relative bg-gray-900/95 backdrop-blur-sm border-2 border-orange-400 p-4 max-w-xs">
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-400"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-400"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-400"></div>

                        {/* Speech bubble arrow */}
                        <div className={`absolute top-1/2 -translate-y-1/2 ${position === 'right' ? '-right-2' : '-left-2'}`}>
                            <div className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${position === 'right' ? 'border-l-8 border-l-orange-400' : 'border-r-8 border-r-orange-400'}`}></div>
                        </div>

                        <p className="text-orange-100 text-sm font-bold retro-text leading-relaxed">
                            {message}
                        </p>

                        {/* Naruto's catchphrase */}
                        <p className="text-orange-400 text-xs mt-2 font-bold retro-text">
                            - Believe it! 🍜
                        </p>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
