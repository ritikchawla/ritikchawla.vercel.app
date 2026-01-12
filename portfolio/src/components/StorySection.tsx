import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiHeart, FiUsers, FiCode, FiGlobe, FiStar, FiCpu } from 'react-icons/fi';

const StorySection = () => {
    return (
        <section id="story" className="section-padding relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/3 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/3 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Story</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                        Every journey has a beginning. This is mine.
                    </p>
                </motion.div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="glass-card p-8 md:p-12 relative">
                        <span className="quote-mark">&ldquo;</span>
                        <blockquote className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                            The highest activity a human being can attain is learning for understanding,
                            because to understand is to be free.
                        </blockquote>
                        <cite className="block mt-4 text-lg text-indigo-500 dark:text-indigo-400 not-italic font-medium">
                            - Baruch Spinoza
                        </cite>
                    </div>
                </motion.div>

                {/* Story Timeline */}
                <div className="max-w-3xl mx-auto">
                    {[
                        {
                            icon: FiBook,
                            color: "text-indigo-500",
                            borderColor: "border-indigo-200 dark:border-indigo-800",
                            title: "The Quiet Observer",
                            content: [
                                "Growing up, I was the shy kid in the corner, more comfortable with books than people. My world was vast - filled with Harry Potter, Lord of the Rings, and the gentle hum of my first computer.",
                                "Computers didn't judge. They listened. They responded. They became my first real friends."
                            ]
                        },
                        {
                            icon: FiStar,
                            color: "text-purple-500",
                            borderColor: "border-purple-200 dark:border-purple-800",
                            title: "The Curious Mind",
                            content: [
                                "I have a sci-fi mind. I spent hours watching lectures by Brian Greene and Leonard Susskind, fascinated by the fabric of spacetime and the mysteries of the cosmos.",
                                "This curiosity led me to philosophy - Kant, Camus, Nietzsche, Kierkegaard. I was searching for my place in the world, my identity, my purpose."
                            ]
                        },
                        {
                            icon: FiUsers,
                            color: "text-orange-500",
                            borderColor: "border-orange-200 dark:border-orange-800",
                            title: "Opening Up",
                            content: [
                                "I realized that the most beautiful systems are built through connection. I joined communities, volunteered at QIndia to teach quantum computing.",
                                "The shy kid became someone who could fly to Jakarta to teach DevOps to 20+ engineers."
                            ]
                        },
                        {
                            icon: FiCode,
                            color: "text-green-500",
                            borderColor: "border-green-200 dark:border-green-800",
                            title: "The Builder",
                            content: [
                                "At GoTo Group, I build the systems that developers rely on. Internal developer portals, automated certificate management, AI-powered bots.",
                                "I'm also fascinated by Machine Learning - running models, reading whitepapers, understanding why things work."
                            ]
                        },
                        {
                            icon: FiGlobe,
                            color: "text-indigo-500",
                            borderColor: "",
                            title: "What's Next",
                            content: [
                                "I'm seeking my next chapter - challenging problems, brilliant minds, and continuous growth. I have the confidence to tackle any challenge and the humility to keep learning."
                            ]
                        }
                    ].map((chapter, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`mb-10 relative pl-8 ${chapter.borderColor ? `border-l-2 ${chapter.borderColor}` : ''}`}
                        >
                            <div className="timeline-dot top-0" />
                            <div className="flex items-center gap-3 mb-3">
                                <chapter.icon className={chapter.color} size={22} />
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{chapter.title}</h3>
                            </div>
                            {chapter.content.map((para, i) => (
                                <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    {para}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Values Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: FiBook, color: "from-indigo-500 to-purple-500", title: "Lifelong Learner", desc: "From systems to philosophy to ML, I never stop exploring." },
                        { icon: FiCpu, color: "from-purple-500 to-pink-500", title: "Systems Thinker", desc: "I see patterns everywhere, from code to cosmos." },
                        { icon: FiHeart, color: "from-orange-500 to-red-500", title: "Thoughtful Builder", desc: "Building systems with intention and care." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                <item.icon className="text-white" size={24} />
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StorySection;
