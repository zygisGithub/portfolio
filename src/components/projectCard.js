// components/ProjectCard.jsx
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
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isVideo ? (
                <video
                    ref={videoRef}
                    className="w-full h-48 object-cover"
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
                    className="w-full h-48 object-cover"
                    onMouseEnter={animatedImage ? (e) => (e.currentTarget.src = animatedImage) : null}
                    onMouseLeave={animatedImage ? (e) => (e.currentTarget.src = image) : null}
                />
            )}
            <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 flex-1">{title}</h3>
                <p className="mb-4 flex-1">{description}</p>
                <button className="text-blue-400 hover:underline flex-1">View Project</button>
            </div>
        </div>
    );
};

export default ProjectCard;
