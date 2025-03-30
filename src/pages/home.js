import React from 'react';
import { Laptop2, Server, Wrench } from 'lucide-react';

const Home = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 text-gray-300">
            {/* Intro */}
            <section className="mb-12 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-gray-400 mb-2">
                    MERN Stack Developer · Problem Solver · UI Enthusiast
                </p>
                <p className="text-md text-gray-400 italic max-w-2xl mx-auto">
                    "Code is not just about syntax — it's about bringing ideas to life."
                </p>
                <p className="text-lg mb-4 invisible h-[20px]">
                    Hi, I'm a passionate web developer specializing in the MERN stack. I enjoy turning complex problems
                    into intuitive, user-friendly solutions.
                </p>
            </section>


            {/* Tech Capabilities */}
            <section className="w-full mb-12">
                <h2 className="text-3xl font-bold mb-6">Tech Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                    <div className="bg-gray-800/30 p-6 rounded shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <Laptop2 className="text-blue-400 w-5 h-5"/>
                            <h3 className="text-2xl font-semibold">Frontend</h3>
                        </div>
                        <ul className="list-disc list-inside text-sm">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-gray-800/30 p-6 rounded shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <Server className="text-blue-400 w-5 h-5" />
                            <h3 className="text-2xl font-semibold">Backend</h3>
                        </div>
                        <ul className="list-disc list-inside text-sm">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-gray-800/30 p-6 rounded shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <Wrench className="text-blue-400 w-5 h-5" />
                            <h3 className="text-2xl font-semibold">Tools & Others</h3>
                        </div>
                        <ul className="list-disc list-inside text-sm">
                            <li>Git & GitHub</li>
                            <li>Postman</li>
                            <li>MongoDB Compass</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
