import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Cloud, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const services = [
    {
        icon: Smartphone,
        title: "iOS & Android Development",
        description: "Native app development for flawless performance, user experience, and deep integration with iOS and Android platforms.",
    },
    {
        icon: Layers,
        title: "Cross-Platform Apps",
        description: "Efficiently build and deploy apps on multiple platforms with a single codebase using technologies like React Native and Flutter.",
    },
    {
        icon: Code,
        title: "UI/UX Design",
        description: "Creating intuitive, engaging, and aesthetically pleasing user interfaces that provide a seamless user journey.",
    },
    {
        icon: Cloud,
        title: "Backend & API Integration",
        description: "Robust backend development and seamless API integration to power your mobile application's features and data.",
    },
];

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-600">
                        Our Expertise
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        We offer a comprehensive suite of services to take your mobile app from concept to reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.1, delay: index * 0.1 }}
                        >
                            <Card className="bg-slate-800 border-slate-700 h-full text-center hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-2">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-teal-500/10 rounded-full mb-4">
                                        <service.icon className="w-10 h-10 text-teal-400" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-100">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;