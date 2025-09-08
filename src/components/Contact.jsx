import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

const Contact = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly!",
        });
        e.target.reset();
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Let's Build Something Amazing
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Have an idea for an app? We'd love to hear about it.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                                <Input id="name" type="text" placeholder="Your Name" className="bg-slate-700 border-slate-600 text-white" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                                <Input id="email" type="email" placeholder="you@example.com" className="bg-slate-700 border-slate-600 text-white" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                            <Textarea id="message" placeholder="Tell us about your project..." className="bg-slate-700 border-slate-600 text-white min-h-[150px]" required />
                        </div>
                        <div className="text-center">
                            <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto">
                                Send Inquiry
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;