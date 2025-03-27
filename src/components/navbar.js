import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const nav = useNavigate();
    const location = useLocation();

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `
            px-4 py-2 rounded-md transition-all
            ${
            isActive
                ? 'text-blue-400 border border-blue-400 bg-gray-800/40'
                : 'border border-transparent hover:border-blue-400 hover:bg-gray-800/30'
        }
        `;
    };

    return (
        <div className='flex flex-col text-sm sm:text-xl justify-center sm:justify-start gap-4'>
            <h1
                className='text-2xl sm:text-4xl font-bold text-center sm:text-left'
                style={{ letterSpacing: '5px' }}
            >
                Žygimantas Buzas
            </h1>

            <div className='flex flex-wrap lg:flex-col sm:flex-row md:flex-row justify-around gap-4'>
                <div
                    onClick={() => nav('/')}
                    className={`hover:cursor-pointer  text-center ${getLinkStyle('/')}`}
                >
                    Home
                </div>
                <div
                    onClick={() => nav('/projects')}
                    className={`hover:cursor-pointer text-center ${getLinkStyle('/projects')}`}
                >
                    Projects
                </div>
                <div
                    onClick={() => nav('/about')}
                    className={`hover:cursor-pointer text-center ${getLinkStyle('/about')}`}
                >
                    About Me
                </div>
                <div
                    onClick={() => nav('/contact')}
                    className={`hover:cursor-pointer text-center ${getLinkStyle('/contact')}`}
                >
                    Contact Me
                </div>
            </div>
        </div>
    );
}

export default Navbar;
