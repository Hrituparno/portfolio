import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

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
        <section id="contact" className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Open to full-time opportunities in AI Research and Engineering
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's Collaborate</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Ready to build the next generation of autonomous systems? I'm always interested in discussing new opportunities and innovative projects.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</p>
                                    <p className="font-medium text-gray-900">Pune, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:hritupornochakraborty@gmail.com" className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                                        hritupornochakraborty@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="card">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 outline-none transition-all resize-none"
                                    placeholder="How can we work together?"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
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
