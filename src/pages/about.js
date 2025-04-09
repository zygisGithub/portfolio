import React, { useState } from 'react';
import { UserRound, Eye, Download } from 'lucide-react';

const About = () => {
    const [showEnglishPreview, setShowEnglishPreview] = useState(false);
    const [showLithuanianPreview, setShowLithuanianPreview] = useState(false);

    return (
        <div className="max-w-4xl mx-auto px-6 text-gray-300">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-6 tracking-wider flex items-center gap-2 ">
                <UserRound className="text-blue-400 w-6 h-6"/>
                About Me
            </h1>

            <p className="mb-6">
                I began my programming journey at{' '}
                <span className="font-bold">
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codeacademy.lt"
              className="underline hover:text-blue-400"
          >
            CodeAcademy
          </a>
        </span>
                , where I gained extensive knowledge in both front-end and back-end development. I also developed valuable
                teamwork skills and acquired a range of other competencies. I completed the{' '}
                <span className="font-bold">
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codeacademy.lt/programavimo-kursai/typescript/"
              className="underline hover:text-blue-400"
          >
            Junior Front-End TypeScript
          </a>
        </span>{' '}
                course successfully with top grades and I am excited to continue advancing my programming career.
            </p>

            {/* CV Section */}
            <h3 className="text-2xl font-bold mb-4">My CV</h3>

            {/* English CV Buttons */}
            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">English Version</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14 max-w-md w-full">
                    <button
                        onClick={() => setShowEnglishPreview(true)}
                        className="min-w-[220px] w-full py-2 px-4 bg-blue-500/30 hover:bg-blue-600/30 rounded text-white font-medium text-center whitespace-nowrap flex items-center justify-center gap-2 group"
                    >
                        <Eye className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="truncate">Preview</span>
                    </button>
                    <a
                        href="/files/ZygimantasBuzasENCV.pdf"
                        download="Zygimantas Buzas.pdf"
                        className="min-w-[220px] w-full py-2 px-4 bg-gray-800/30 hover:bg-gray-700/30 rounded text-white font-medium text-center whitespace-nowrap flex items-center justify-center gap-2 group"
                    >
                        <Download className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="truncate">Download</span>
                    </a>
                </div>
            </div>

            {/* Lithuanian CV Buttons */}
            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Lithuanian Version</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14 max-w-md w-full">
                    <button
                        onClick={() => setShowLithuanianPreview(true)}
                        className="min-w-[220px] w-full py-2 px-4 bg-blue-500/30 hover:bg-blue-600/30 rounded text-white font-medium text-center whitespace-nowrap flex items-center justify-center gap-2 group"
                    >
                        <Eye className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="truncate">Preview</span>
                    </button>
                    <a
                        href="/files/ZygimantasBuzasLTCV.pdf"
                        download="Zygimantas Buzas.pdf"
                        className="min-w-[220px] w-full py-2 px-4 bg-gray-800/30 hover:bg-gray-700/30 rounded text-white font-medium text-center whitespace-nowrap flex items-center justify-center gap-2 group"
                    >
                        <Download className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="truncate">Download</span>
                    </a>
                </div>
            </div>

            {/* English CV Modal */}
            {showEnglishPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
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
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
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
