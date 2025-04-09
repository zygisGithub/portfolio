// Projects.jsx
import React from 'react';
import { FolderKanban } from 'lucide-react';
import ProjectCard from '../components/projectCard';

const projectList = [
    {
        title: 'Bidi.lt',
        description:
            'A collaborative project focused on online auctions. Developed and maintained with the bidi.lt team.',
        image: '/files/bidilt.png',
        url: 'https://bidi.lt',
        animatedImage: '/files/bidigif.gif',
        isVideo: false,
    },
    {
        title: 'Live Chat Application',
        description:
            'A personal project created as a final assignment at CodeAcademy, demonstrating my skills in web development.',
        image: '/files/helswordchat.png',
        url: 'https://baigemojofront.onrender.com/',
        animatedImage: '/files/chatappgif.gif',
        isVideo: false,
    },
    {
        title: 'Slot Machine',
        description:
            'A lightweight slot machine application built to demonstrate core programming concepts and interactive UI design.',
        image: '/files/slot.png',
        url: 'https://zygisgithub.github.io/slots/',
        animatedImage: '/files/casinogif.gif',
        isVideo: false,
    },
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-gray-300">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <FolderKanban className="text-blue-400 w-6 h-6" />
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
                        Projects
                    </h1>
                </div>
                <p className="text-gray-400 max-w-2xl">
                    Here are some of the projects I've worked on—from real-world apps to technical experiments.
                </p>
            </div>

            {/* Projects grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
