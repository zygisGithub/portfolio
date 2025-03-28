import React, { useEffect, useState } from "react";

const BASE_BLADE_COUNT = 300;
const NO_GRASS_ZONE_PERCENT = 20; // Width percentage of no-grass zone in center
const SMALL_SCREEN_BREAKPOINT = 640;

const Grass = () => {
    const [blades, setBlades] = useState([]);

    const generateBlades = (isSmallScreen) => {
        if (isSmallScreen) {
            setBlades([]); // No grass on small screens
            return;
        }

        const adjustedCount = BASE_BLADE_COUNT;
        const center = 50;
        const noGrassZoneHalf = NO_GRASS_ZONE_PERCENT / 2;

        const newBlades = [];
        let i = 0;

        while (newBlades.length < adjustedCount) {
            const left = Math.random() * 100;

            // Skip blades too close to center
            if (left > (center - noGrassZoneHalf) && left < (center + noGrassZoneHalf)) {
                continue;
            }

            const distanceFromCenter = Math.abs(left - center) / 50;
            const randomHeight = 40 + Math.random() * 60;
            const height = randomHeight * distanceFromCenter;

            const delay = Math.random() * 5;
            const duration = 3 + Math.random() * 2;

            newBlades.push({
                id: i++,
                style: {
                    left: `${left}%`,
                    height: `${height}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                },
            });
        }

        setBlades(newBlades);
    };

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < SMALL_SCREEN_BREAKPOINT;
            generateBlades(isSmallScreen);
        };

        handleResize(); // Initial run
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="grass-blades">
            {blades.map((blade) => (
                <div key={blade.id} className="grass-blade" style={blade.style} />
            ))}
        </div>
    );
};

export default Grass;
