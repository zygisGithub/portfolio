import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center rounded-lg p-8 bg-gray-800 text-gray-300">
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">
                    Hi, I'm a passionate web developer specializing in the MERN stack. I enjoy turning complex problems into intuitive, user-friendly solutions.
                </p>
            </section>

            <section className="w-full max-w-4xl mb-12">
                <h2 className="text-3xl font-bold mb-6">Tech Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                        <ul className="list-disc list-inside">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                        <ul className="list-disc list-inside">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Tools & Others</h3>
                        <ul className="list-disc list-inside">
                            <li>Git & GitHub</li>
                            <li>Postman</li>
                            <li>MongoDb Compass</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
