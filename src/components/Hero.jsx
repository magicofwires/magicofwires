import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import mow_logo from '../assets/mow_logo.png';
import info_header from '../assets/info_header.png';

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
        <section id="home" class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-screen">
            <div class="absolute inset-0 overflow-hidden">

                <div class="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-slate-900 opacity-50"></div>
                <div class="absolute -bottom-64 -right-64 w-[900px] h-[900px] rounded-full bg-slate-600 opacity-30"></div>


                <svg class="absolute right-0 top-0 h-full w-1/2 opacity-20" viewBox="0 0 800 800">
                    <path d="M100 100 H300 V300 H500" stroke="#3B82F6" stroke-width="2" fill="none"/>
                    <path d="M200 200 H400 V500 H700" stroke="#60A5FA" stroke-width="2" fill="none"/>
                    <path d="M50 500 H300 V700 H600" stroke="#93C5FD" stroke-width="2" fill="none"/>
                </svg>
            </div>


            <div class="container mx-auto px-6 py-24 ">


            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400">
                    Wiring Innovation Into Mobile.
                </h1>
</motion.div>

                <div class="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}

            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} 
                >
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-white mb-10">
                    Your Vision. Our Code. Limitless Possibilities. <br/>
                    We specialize in building beautiful, high-performance native and cross-platform mobile applications that users love. Let's bring your vision to life.
                </p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

                    <div class="bg-slate-600 rounded-2xl p-3 shadow-md text-center">
                        <div class="text-3xl mb-1">📱</div>
                        <h3 class="font-semibold text-white">
                            Mobile Apps
                        </h3>
                    </div>

                    <div class="bg-slate-600 rounded-2xl p-3 shadow-md text-center">
                        <div class="text-3xl mb-1">💡</div>
                        <h3 class="font-semibold text-white">
                            Innovation
                        </h3>
                    </div>

                    <div class="bg-slate-600 rounded-2xl p-3 shadow-md text-center">
                        <div class="text-3xl mb-1">🛡️</div>
                        <h3 class="font-semibold text-white">
                            Quality
                        </h3>
                    </div>

                    <div class="bg-slate-600 rounded-2xl p-3 shadow-md text-center">
                        <div class="text-3xl mb-1">🚀</div>
                        <h3 class="font-semibold text-white">
                            Delivery
                        </h3>
                    </div>

                </div>

                {/* CTA Buttons */}
                <div class="flex flex-wrap gap-4">

                    <a href="#contact">
                        <Button size="lg" className="bg-blue-500 hover:bg-orange-500 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Start a Project
                        </Button>
                    </a>

                    <a href="#portfolio">
                       <Button onClick={handleNotImplemented} size="lg" variant="outline" className="text-black border-blue-500 hover:bg-white-500/20 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        View Our Work
                    </Button>

                    </a>

                </div>

            </motion.div>


            {/* RIGHT SIDE IMAGE */}
            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} 
                >
                <img className="max-w-full w-[900px] object-contain" src={info_header} alt='Magic Of Wires Logo' />
        
            </motion.div>

        </div>

    </div>


    {/* <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-screen">
            <div class="absolute inset-0 overflow-hidden">

                <div class="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-slate-900 opacity-50"></div>
                <div class="absolute -bottom-64 -right-64 w-[900px] h-[900px] rounded-full bg-slate-600 opacity-30"></div>


                <svg class="absolute right-0 top-0 h-full w-1/2 opacity-20" viewBox="0 0 800 800">
                    <path d="M100 100 H300 V300 H500" stroke="#3B82F6" stroke-width="2" fill="none"/>
                    <path d="M200 200 H400 V500 H700" stroke="#60A5FA" stroke-width="2" fill="none"/>
                    <path d="M50 500 H300 V700 H600" stroke="#93C5FD" stroke-width="2" fill="none"/>
                </svg>
            </div>

            <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">

                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img className="w-80 max-w-xl mb-10" src={mow_logo} alt='Magic Of Wires Logo' />
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400">
                            Wiring Innovation Into Mobile.
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white mb-10">
                            Your Vision. Our Code. Limitless Possibilities. <br/>
                            We specialize in building beautiful, high-performance native and cross-platform mobile applications that users love. Let's bring your vision to life.
                        </p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-3">
                                    📱
                                </div>
                                <p class="font-semibold text-white">
                                    Mobile Apps
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-3">
                                    💡
                                </div>
                                <p class="font-semibold text-white">
                                    Innovation
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-3">
                                    🛡️
                                </div>
                                <p class="font-semibold text-white">
                                    Quality
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-3">
                                    🚀
                                </div>
                                <p class="font-semibold text-white">
                                    Delivery
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="absolute bottom-0 w-96 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                        <div class="relative w-72 h-[580px] bg-gradient-to-b from-blue-700 to-blue-950 rounded-[3rem] shadow-2xl border-4 border-blue-300">
                            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full"></div>
                            <div class="p-6 pt-16">
                                <div class="bg-blue-600/30 rounded-xl p-4 mb-4">
                                    <div class="h-4 bg-blue-300 rounded w-1/2 mb-2"></div>
                                    <div class="h-3 bg-blue-300/60 rounded"></div>
                                </div>
                                <div class="bg-blue-600/20 rounded-xl p-4 mb-4">
                                    <div class="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600"></div>
                                </div>
                                <div class="grid grid-cols-3 gap-3 mb-4">
                                    <div class="h-20 bg-blue-500/30 rounded-lg"></div>
                                    <div class="h-20 bg-blue-500/30 rounded-lg"></div>
                                    <div class="h-20 bg-blue-500/30 rounded-lg"></div>
                                </div>
                                <div class="bg-blue-600/20 rounded-xl p-4">
                                    <div class="h-24 rounded-lg bg-gradient-to-r from-orange-400 to-blue-500"></div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute left-0 top-24 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                            &lt;/&gt;
                        </div>
                        <div class="absolute right-0 top-32 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                            ⚙️
                        </div>
                        <div class="absolute left-10 bottom-32 bg-white p-4 rounded-2xl shadow-xl">
                            📊 Analytics
                        </div>
                        <div class="absolute right-10 bottom-24 bg-white p-4 rounded-2xl shadow-xl">
                            📈 Growth
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

</section>
    );
};

export default Hero;