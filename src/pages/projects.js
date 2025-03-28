// Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import ProjectCard from "../components/projectCard";

const projectList = [
    {
        title: 'Bidi.lt',
        description: 'A collaborative project focused on online auctions. Developed and maintained with the bidi.lt team.',
        image: '/files/bidilt.png',
        url: 'https://bidi.lt',
        animatedImage: '/files/bidigif.gif',
        isVideo: false,
    },
    {
        title: 'Live Chat Application',
        description: 'A personal project created as a final assignment at CodeAcademy, demonstrating my skills in web development.',
        image: '/files/helswordchat.png',
        url: 'https://baigemojofront.onrender.com/',
        animatedImage: '/files/chatappgif.gif',
        isVideo: false,
    },
    {
        title: 'Slot Machine',
        description: 'A lightweight slot machine application built to demonstrate core programming concepts and interactive UI design.',
        image: '/files/slot.png',
        url: 'https://zygisgithub.github.io/slots/',
        animatedImage: '/files/casinogif.gif',
        isVideo: false,
    },
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projectList.length);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-300">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

            <LayoutGroup>
                <div className="relative flex items-center justify-center space-x-6">

                    {/* Left preview */}
                    <motion.div
                        layout
                        className="w-1/4 hidden sm:block opacity-50 hover:opacity-80 transition cursor-pointer"
                        onClick={handlePrev}
                    >
                        <ProjectCard
                            {...projectList[(activeIndex - 1 + projectList.length) % projectList.length]}
                            small
                        />
                    </motion.div>

                    {/* Center main project */}
                    <motion.div layout className="w-full sm:w-1/2 z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                layout
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectCard {...projectList[activeIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Right preview */}
                    <motion.div
                        layout
                        className="w-1/4 hidden sm:block opacity-50 hover:opacity-80 transition cursor-pointer"
                        onClick={handleNext}
                    >
                        <ProjectCard
                            {...projectList[(activeIndex + 1) % projectList.length]}
                            small
                        />
                    </motion.div>
                </div>
            </LayoutGroup>
        </div>
    );
};

export default Projects;
