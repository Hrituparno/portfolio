import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            role: "Academic Mentor – Computer Science",
            organization: "MIT Pune (Kalvium)",
            period: "Present",
            description: "Mentoring B.Tech students in Python & C++. Guiding AI and LLM-based real-world projects."
        }
    ];

    const education = [
        {
            degree: "M.Tech (CSE) – Computer Science & Engineering",
            institution: "MAKAUT",
            period: "2022 – 2024"
        },
        {
            degree: "B.Tech (EE) – Electrical Engineering",
            institution: "MAKAUT",
            period: "2018 – 2022"
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="grid-overlay opacity-30" />
            
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400 retro-text" style={{ textShadow: '0 0 20px rgba(157, 78, 221, 0.5)' }}>
                        Experience & Education
                    </h2>
                    <div className="w-20 h-1 bg-purple-400 mx-auto" style={{ boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)' }} />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center gap-3 retro-text">
                            <span className="w-8 h-1 bg-cyan-400" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}></span>
                            Experience
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="card"
                                    whileHover={{ x: 10 }}
                                >
                                    <h4 className="text-xl font-bold text-cyan-300 mb-2 retro-text">{exp.role}</h4>
                                    <h5 className="text-lg text-purple-400 font-bold mb-3">{exp.organization}</h5>
                                    <p className="text-sm text-cyan-400/70 font-bold mb-4 px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 inline-block retro-text">
                                        {exp.period}
                                    </p>
                                    <p className="text-cyan-100/80 leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3 retro-text">
                            <span className="w-8 h-1 bg-purple-400" style={{ boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)' }}></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="card"
                                    whileHover={{ x: 10 }}
                                >
                                    <h4 className="text-xl font-bold text-purple-300 mb-2 retro-text">{edu.degree}</h4>
                                    <h5 className="text-lg text-cyan-400 font-bold mb-3">{edu.institution}</h5>
                                    <p className="text-sm text-purple-400/70 font-bold inline-block px-3 py-1 bg-purple-400/10 border border-purple-400/30 retro-text">
                                        {edu.period}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
