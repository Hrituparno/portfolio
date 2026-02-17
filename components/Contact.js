import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="grid-overlay opacity-20" />
            
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <motion.img
                            src="/naruto-guide.jpg"
                            alt="Naruto"
                            className="w-12 h-12 rounded-full object-cover"
                            animate={{ 
                                rotate: [0, 10, -10, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 140, 0, 0.6))' }}
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 retro-text" style={{ textShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}>
                            Get In Touch
                        </h2>
                        <motion.img
                            src="/naruto-guide.jpg"
                            alt="Naruto"
                            className="w-12 h-12 rounded-full object-cover"
                            animate={{ 
                                rotate: [0, -10, 10, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 140, 0, 0.6))' }}
                        />
                    </div>
                    <p className="text-cyan-200/70 text-lg max-w-2xl mx-auto">
                        Open to full-time opportunities in AI Research and Engineering
                    </p>
                    <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-purple-400 retro-text">Let's Collaborate</h3>
                        <p className="text-cyan-100/80 mb-8 leading-relaxed">
                            Ready to build the next generation of autonomous systems? I'm always interested in discussing new opportunities and innovative projects.
                        </p>

                        <div className="space-y-4">
                            <motion.div 
                                className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-400/30 hover:border-cyan-400 transition-all"
                                whileHover={{ x: 10 }}
                            >
                                <div className="p-3 bg-cyan-400/10 border-2 border-cyan-400/50 text-cyan-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-cyan-400/70 font-bold uppercase tracking-wider mb-1 retro-text">Location</p>
                                    <p className="font-bold text-cyan-300">Pune, India</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-sm border-2 border-purple-400/30 hover:border-purple-400 transition-all"
                                whileHover={{ x: 10 }}
                            >
                                <div className="p-3 bg-purple-400/10 border-2 border-purple-400/50 text-purple-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-purple-400/70 font-bold uppercase tracking-wider mb-1 retro-text">Email</p>
                                    <a href="mailto:hritupornochakraborty@gmail.com" className="font-bold text-purple-300 hover:text-purple-400 transition-colors">
                                        hritupornochakraborty@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-cyan-400 mb-2 retro-text">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-cyan-400/30 focus:border-cyan-400 text-cyan-100 outline-none transition-all placeholder-cyan-400/30 font-mono"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-cyan-400 mb-2 retro-text">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-cyan-400/30 focus:border-cyan-400 text-cyan-100 outline-none transition-all placeholder-cyan-400/30 font-mono"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-cyan-400 mb-2 retro-text">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-cyan-400/30 focus:border-cyan-400 text-cyan-100 outline-none transition-all resize-none placeholder-cyan-400/30 font-mono"
                                    placeholder="How can we work together?"
                                ></textarea>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            whileHover={{ scale: status === 'sending' || status === 'success' ? 1 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'sending' ? (
                                "Sending..."
                            ) : status === 'success' ? (
                                "Message Sent!"
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
