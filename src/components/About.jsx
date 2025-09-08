import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-300 mb-4">
                            InnovateApp is a passionate team of developers, designers, and strategists dedicated to the world of mobile technology. We believe that a great app is more than just code—it's an experience that connects businesses with their users in a meaningful way.
                        </p>
                        <p className="text-lg text-gray-300">
                            Our mission is to empower our clients by transforming their innovative ideas into powerful, user-centric mobile solutions. We thrive on challenges and are committed to excellence in every project we undertake.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative h-80 lg:h-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <img 
                            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl shadow-purple-900/40"
                            alt="A diverse team of software developers collaborating in a modern office"
                         src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;