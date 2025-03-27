import React, { useRef } from 'react';

const ProjectCard = ({ title, description, image, url, animatedImage, isVideo = false }) => {
    const videoRef = useRef(null);

    const handleClick = () => {
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
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-full"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-48 overflow-hidden">
                {isVideo ? (
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover max-w-full block"
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
                        className="w-full h-full object-cover max-w-full block transition-all duration-300 overflow-hidden"
                        onMouseEnter={(e) => {
                            if (animatedImage) e.currentTarget.src = animatedImage;
                        }}
                        onMouseLeave={(e) => {
                            if (animatedImage) e.currentTarget.src = image;
                        }}
                    />
                )}
            </div>
            <div className="p-4 flex flex-col text-gray-300">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>
                <button
                    className="text-blue-400 hover:underline self-start"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        window.open(url, '_blank');
                    }}
                >
                    View Project
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
