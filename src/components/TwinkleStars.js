import React, { useEffect, useState } from "react";

const BASE_STAR_COUNT = 100;

const TwinklingStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const isSmallScreen = window.innerWidth < 640;
        const adjustedCount = isSmallScreen ? BASE_STAR_COUNT / 3 : BASE_STAR_COUNT;

        const newStars = Array.from({ length: adjustedCount }, (_, i) => {
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

        setStars(newStars);
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
