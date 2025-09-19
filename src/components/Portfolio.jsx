import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import keeper_promo from '../assets/keeper_promo.png';
import { openInNewTab } from './../lib/utils';

const projects = [
    {
        title: "Keeper: Offline Password Manager",
        category: "Data Security",
        description: "Keeper, an offline, secure solution for managing usernames, passwords, and other sensitive information",
        imageKey: "A smartphone screen showing a modern fintech banking app interface",
        image: keeper_promo,
        url: "https://play.google.com/store/apps/details?id=com.mohitum.keeper"
    }
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

    const handleLinkClick = (url) => {
        openInNewTab(url)
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                        Our Recent Work
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
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
                                    <img  className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-110" alt={project.title} src={project.image} />
                                    <div className="absolute inset-0 bg-slate-800/30 group-hover:bg-slate-800/10 transition-all duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-orange-500 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold text-blue-500 mb-2">{project.title}</h3>
                                    <p className="text-white flex-grow">{project.description}</p>
                                    <Button onClick={() => handleLinkClick(project.url)} variant="link" className="text-blue-500 p-0 mt-4 self-start hover:text-orange-500">
                                        Visit app on Google Play →
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <Button onClick={handleNotImplemented} size="lg" variant="outline" className="text-black border-blue-500 hover:bg-white-500/20 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        Explore More Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;