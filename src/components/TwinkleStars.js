import React, { useEffect, useState } from "react";

const BASE_STAR_COUNT = 100;

const TwinklingStars = () => {
    const [stars, setStars] = useState([]);

    const generateStars = (count) => {
        return Array.from({ length: count }, (_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 3;
            const size = Math.random() * 2 + 1;

            return {
                id: i,
                style: {
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                },
            };
        });
    };

    const updateStarCount = () => {
        const isSmallScreen = window.innerWidth < 640;
        const adjustedCount = isSmallScreen ? BASE_STAR_COUNT / 3 : BASE_STAR_COUNT;
        setStars(generateStars(adjustedCount));
    };

    useEffect(() => {
        updateStarCount();

        const handleResize = () => {
            clearTimeout(window.__resizeTimerStars);
            window.__resizeTimerStars = setTimeout(() => {
                updateStarCount();
            }, 150);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(window.__resizeTimerStars);
        };
    }, []);

    return (
        <div className="twinkling-stars">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={star.style}
                />
            ))}
        </div>
    );
};

export default TwinklingStars;
