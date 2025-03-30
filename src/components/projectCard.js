import React, { useRef } from 'react';

const ProjectCard = ({ title, description, image, url, animatedImage, isVideo = false, small = false }) => {
    const videoRef = useRef(null);

    const handleClick = () => {
        if (small) return;
        window.open(url, '_blank');
    };

    const handleMouseEnter = () => {
        if (isVideo) {
            videoRef.current?.play();
        }
    };

    const handleMouseLeave = () => {
        if (isVideo) {
            videoRef.current?.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={`relative bg-gray-800/30 rounded overflow-hidden shadow-lg cursor-pointer flex flex-col h-full transition-transform duration-300 ${
                small ? 'scale-90 hover:scale-95' : 'scale-100 hover:scale-105'
            }`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${small ? 'h-36' : 'h-48'} w-full overflow-hidden relative group`}>
                {/* Image or video */}
                {isVideo ? (
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover block grayscale group-hover:grayscale-0 transition-all duration-500"
                        muted
                        loop
                        preload="none"
                        poster={image}
                    >
                        <source src={animatedImage} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover block grayscale group-hover:grayscale-0 transition-all duration-500"
                        onMouseEnter={(e) => {
                            if (animatedImage) e.currentTarget.src = animatedImage;
                        }}
                        onMouseLeave={(e) => {
                            if (animatedImage) e.currentTarget.src = image;
                        }}
                    />
                )}

                {/* Subtle blue overlay */}
                <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
            </div>

            <div className={`p-4 text-gray-300 flex flex-col justify-between ${small ? 'text-sm' : ''}`}>
                <h3 className={`font-semibold ${small ? 'text-base mb-0' : 'text-xl mb-2'}`}>{title}</h3>
                {!small && (
                    <>
                        <p className="mb-4 min-h-[60px] sm:min-h-[72px] md:min-h-[80px]">{description}</p>
                        <button
                            className="text-blue-400 hover:underline self-start"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(url, '_blank');
                            }}
                        >
                            View Project
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
