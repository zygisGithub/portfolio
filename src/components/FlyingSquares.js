import React, { useEffect, useState } from "react";

const BASE_SQUARE_COUNT = 30;

const FlyingSquares = () => {
    const [squares, setSquares] = useState([]);

    const generateSquares = (count) => {
        return Array.from({ length: count }, (_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const x = (Math.random() - 0.5) * 300 + "px";
            const y = (Math.random() - 0.5) * 300 + "px";
            const delay = Math.random() * 5;

            return {
                id: i,
                style: {
                    top: `${top}%`,
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    '--x': x,
                    '--y': y,
                },
            };
        });
    };

    const updateSquareCount = () => {
        const isSmallScreen = window.innerWidth < 640;
        const adjustedCount = isSmallScreen ? BASE_SQUARE_COUNT / 3 : BASE_SQUARE_COUNT;
        setSquares(generateSquares(adjustedCount));
    };

    useEffect(() => {
        updateSquareCount();

        const handleResize = () => {
            clearTimeout(window.__resizeTimer);
            window.__resizeTimer = setTimeout(() => {
                updateSquareCount();
            }, 150);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(window.__resizeTimer);
        };
    }, []);

    return (
        <div className="flying-squares">
            {squares.map((square) => (
                <div
                    key={square.id}
                    className="flying-square"
                    style={square.style}
                />
            ))}
        </div>
    );
};

export default FlyingSquares;
