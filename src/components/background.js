import React, { useEffect, useState } from "react";

const SQUARE_COUNT = 30;

const FlyingSquares = () => {
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const newSquares = Array.from({ length: SQUARE_COUNT }, (_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const x = (Math.random() - 0.5) * 300 + "px";
            const y = (Math.random() - 0.5) * 300 + "px";
            const delay = Math.random() * 5;

            return {
                id: i,
                top: `${top}%`,
                left: `${left}%`,
                style: {
                    top: `${top}%`,
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    '--x': x,
                    '--y': y,
                },
            };
        });

        setSquares(newSquares);
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
