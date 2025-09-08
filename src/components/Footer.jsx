import React from 'react';
import { Smartphone, Linkedin, Twitter, Github } from 'lucide-react';
import { useToast } from './ui/use-toast';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { toast } = useToast();

    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast({
            title: "Feature In Progress",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            variant: "default",
        });
    };

    const socialLinks = [
        { icon: Twitter, href: "#", name: "Twitter" },
        { icon: Linkedin, href: "#", name: "LinkedIn" },
        { icon: Github, href: "#", name: "GitHub" },
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <Smartphone className="w-7 h-7 text-purple-400" />
                        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">InnovateApp</span>
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={handleNotImplemented} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                <link.icon className="w-6 h-6" />
                                <span className="sr-only">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; {currentYear} InnovateApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;