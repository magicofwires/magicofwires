import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { useToast } from './ui/use-toast';
import { openInNewTab } from './../lib/utils';

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

    const handleLinkClick = (url) => {
        openInNewTab(url)
    };

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/magicofwires", name: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/magic-of-wires/", name: "LinkedIn" },
        { icon: Facebook, href: "https://www.facebook.com/magicofwires", name: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/magicofwires/", name: "Instagram" },
        { icon: Youtube, href: "https://www.youtube.com/@MagicOfWires", name: "Youtube" },
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <Smartphone className="w-7 h-7 text-teal-400" />
                        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-600">Magic Of Wires</span>
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map(link => (
                            <Link key={link.name} onClick={() => handleLinkClick(link.href)} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                <link.icon className="w-6 h-6" />
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; {currentYear} Magic Of Wires. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;