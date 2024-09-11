import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const nav = useNavigate();
    const location = useLocation();

    const getLinkStyle = (path) => {
        return location.pathname === path ? 'text-bold text-blue-500' : '';
    };

    return (
        <div className='flex flex-row sm:flex-col text-sm sm:text-xl justify-center sm:justify-start gap-4'>
            <div
                onClick={() => nav('/')}
                className={`hover:cursor-pointer ${getLinkStyle('/')}`}>
                Home
            </div>
            <div
                onClick={() => nav('/projects')}
                className={`hover:cursor-pointer ${getLinkStyle('/projects')}`}>
                Projects
            </div>
            <div
                onClick={() => nav('/about')}
                className={`hover:cursor-pointer ${getLinkStyle('/about')}`}>
                About Me
            </div>
            <div
                onClick={() => nav('/contact')}
                className={`hover:cursor-pointer ${getLinkStyle('/contact')}`}>
                Contact Me
            </div>
        </div>
    );
}

export default Navbar;
