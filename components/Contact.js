import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    {/* Decorative Blob */}
                    <div className="bg-glow -top-20 -right-20 w-[300px] h-[300px] bg-purple-600/20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Collaborate</h2>
                            <p className="text-zinc-400 mb-10 leading-relaxed">
                                Open to full-time opportunities in AI Research and Engineering.
                                Ready to build the next generation of autonomous systems?
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center text-zinc-300 gap-4 p-4 rounded-xl glass-button">
                                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Location</p>
                                        <p className="font-medium">Pune, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-zinc-300 gap-4 p-4 rounded-xl glass-button">
                                    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Email</p>
                                        <a href="mailto:hritupornochakraborty@gmail.com" className="font-medium hover:text-white transition-colors">
                                            hritupornochakraborty@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-zinc-100 outline-none transition-all placeholder:text-zinc-700"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-zinc-100 outline-none transition-all placeholder:text-zinc-700"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-zinc-100 outline-none transition-all placeholder:text-zinc-700 resize-none"
                                        placeholder="How can we work together?"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold tracking-wide shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            >
                                {status === 'sending' ? (
                                    "Sending..."
                                ) : status === 'success' ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}
