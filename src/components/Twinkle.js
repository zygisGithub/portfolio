import React, { useEffect, useState } from "react";

const STAR_COUNT = 100;

const TwinklingStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = Array.from({ length: STAR_COUNT }, (_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 3;
            const size = Math.random() * 2 + 1; // size between 1px and 3px

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
