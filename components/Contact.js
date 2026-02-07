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
        <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-zinc-100">Get in Touch</h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            I'm currently open to full-time opportunities in AI Research and Engineering.
                            Whether you have a question about my research or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center text-zinc-400">
                                <MapPin className="w-5 h-5 mr-3 text-zinc-500" />
                                Pune, India (Open to relocation)
                            </div>
                            <div className="flex items-center text-zinc-400">
                                <Mail className="w-5 h-5 mr-3 text-zinc-500" />
                                hritupornochakraborty@gmail.com
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-100 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-100 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-100 outline-none transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
        </section>
    );
}
