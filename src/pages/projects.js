// Projects.jsx
import React from 'react';
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
    // Add more projects here...
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-300">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
