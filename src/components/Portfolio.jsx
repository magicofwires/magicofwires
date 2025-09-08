import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const projects = [
    {
        title: "Fintech Wallet App",
        category: "Finance",
        description: "A secure mobile wallet for peer-to-peer payments and cryptocurrency management.",
        imageKey: "A smartphone screen showing a modern fintech banking app interface"
    },
    {
        title: "Health & Fitness Tracker",
        category: "Wellness",
        description: "An app that tracks workouts, nutrition, and connects users with personal trainers.",
        imageKey: "A fitness app dashboard on a smartphone, displaying workout stats"
    },
    {
        title: "E-commerce Marketplace",
        category: "Retail",
        description: "A multi-vendor marketplace app for discovering and purchasing unique handmade goods.",
        imageKey: "An e-commerce app showcasing various products on a phone screen"
    },
];

const Portfolio = () => {
    const { toast } = useToast();
    
    const handleNotImplemented = () => {
        toast({
            title: "Feature In Progress",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            variant: "default",
        });
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Our Recent Work
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        We're proud of the solutions we've delivered. Here's a glimpse of our capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-slate-800 border-slate-700 overflow-hidden group h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <img  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" alt={project.title} src="https://images.unsplash.com/photo-1656909708546-cd07fe6ce1e6" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-purple-400 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                                    <p className="text-gray-400 flex-grow">{project.description}</p>
                                    <Button onClick={handleNotImplemented} variant="link" className="text-purple-400 p-0 mt-4 self-start hover:text-purple-300">
                                        View Case Study →
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <Button onClick={handleNotImplemented} size="lg" variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        Explore More Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;