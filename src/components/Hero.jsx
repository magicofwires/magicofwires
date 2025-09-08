import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Hero = () => {
    const { toast } = useToast();

    const handleNotImplemented = () => {
        toast({
            title: "Feature In Progress",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            variant: "default",
        });
    };
    
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 bg-cover bg-center`}></div>
            <div className="absolute inset-0 bg-black/40"></div>

            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                    Wiring Innovation Into Mobile.
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
                    We specialize in building beautiful, high-performance native and cross-platform mobile applications that users love. Let's bring your vision to life.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                     <a href="#contact">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Start a Project
                        </Button>
                    </a>
                    <Button onClick={handleNotImplemented} size="lg" variant="outline" className="text-black border-purple-400 hover:bg-white-500/20 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        View Our Work
                    </Button>
                </div>
            </motion.div>
             <div className="absolute bottom-10">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-gray-400"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;