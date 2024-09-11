import React from 'react';

const Projects = () => {
    const handleProjectClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-gray-300">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Project 1: Siuntivezi.lt */}
                <div
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => handleProjectClick('https://siuntivezi.lt')}
                >
                    <img
                        src="/files/siuntivezi.png"
                        alt="Siuntivezi.lt"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Siuntivezi.lt</h3>
                        <p className="mb-4">
                            A collaborative project focused on logistics and delivery management.
                            Developed with team at CodeAcademy.
                        </p>
                        <button className="text-blue-400 hover:underline">
                            View Project
                        </button>
                    </div>
                </div>

                {/* Project 2: Helsword.org */}
                <div
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => handleProjectClick('http://www.helsword.org')}
                >
                    <img
                        src="/files/helswordchat.png"
                        alt="Helsword.org"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Live Chat Application</h3>
                        <p className="mb-4">
                            A personal project created as a final assignment at CodeAcademy,
                            demonstrating my skills in web development.
                        </p>
                        <button className="text-blue-400 hover:underline">
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
