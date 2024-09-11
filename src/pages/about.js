import React, { useState } from 'react';

const About = () => {
    const [showEnglishPreview, setShowEnglishPreview] = useState(false);
    const [showLithuanianPreview, setShowLithuanianPreview] = useState(false);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-gray-300">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="mb-6">
                I began my programming journey at
                <span className="font-bold"><a target="_blank" rel="noopener noreferrer" href="https://codeacademy.lt"> CodeAcademy</a></span>,
                where I gained extensive knowledge in both front-end and back-end development. I also developed valuable
                teamwork skills and acquired a range of other competencies. I completed the
                <span className="font-bold"><a target="_blank" rel="noopener noreferrer" href="https://codeacademy.lt/programavimo-kursai/typescript/"> Junior Front-End TypeScript </a></span>
                courses successfully with top grades and I am excited to continue advancing my programming career.
            </p>


            <h3 className="text-2xl font-bold mb-4">My CV</h3>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">English Version</h4>
                <div className='flex gap-14'>
                    <button
                        onClick={() => setShowEnglishPreview(true)}
                        className="inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium mb-4"
                    >
                        Preview English CV
                    </button>
                    <a
                        href="/files/ZygimantasBuzasENCV.pdf"
                        download="Zygimantas Buzas.pdf"
                        className="inline-block text-center h-[100%] py-2 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
                    >
                        Download English CV
                    </a>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Lithuanian Version</h4>
                <div className='flex gap-14'>
                    <button
                        onClick={() => setShowLithuanianPreview(true)}
                        className="inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium mb-4"
                    >
                        Preview Lithuanian CV
                    </button>
                    <a
                        href="/files/ZygimantasBuzasLTCV.pdf"
                        download="Zygimantas Buzas.pdf"
                        className="inline-block text-center h-[100%] py-2 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
                    >
                        Download Lithuanian CV
                    </a>
                </div>
            </div>

            {/* English CV Modal */}
            {showEnglishPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
                        <h4 className="text-xl font-semibold mb-4">English CV</h4>
                        <iframe
                            src="/files/ZygimantasBuzasENCV.pdf"
                            title="English CV"
                            className="w-full h-96 mb-4 border-2 border-gray-700 rounded"
                        ></iframe>
                        <button
                            onClick={() => setShowEnglishPreview(false)}
                            className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white font-medium"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Lithuanian CV Modal */}
            {showLithuanianPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
                        <h4 className="text-xl font-semibold mb-4">Lithuanian CV</h4>
                        <iframe
                            src="/files/ZygimantasBuzasLTCV.pdf"
                            title="Lithuanian CV"
                            className="w-full h-96 mb-4 border-2 border-gray-700 rounded"
                        ></iframe>
                        <button
                            onClick={() => setShowLithuanianPreview(false)}
                            className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white font-medium"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
