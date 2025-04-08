import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, FolderKanban, UserRound, Mail } from "lucide-react";

function Navbar() {
    const nav = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/", icon: <Home size={20} /> },
        { label: "Projects", path: "/projects", icon: <FolderKanban size={20} /> },
        { label: "About Me", path: "/about", icon: <UserRound size={20} /> },
        { label: "Contact Me", path: "/contact", icon: <Mail size={20} /> },
    ];

    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        return `
            hover:cursor-pointer flex items-center gap-2 justify-center w-full px-4 py-2 transition-all
            ${isActive ? "bg-blue-400/20 text-blue-400" : "hover:bg-blue-400/10"}
        `;
    };

    return (
        <div className="flex flex-col text-sm sm:text-xl gap-6 lg:pr-6 lg:border-r-2 lg:border-blue-400/30">

            {/* Name / Title */}
            <h1
                className="relative text-4xl font-bold text-center inline-block pb-2 after:content-[''] after:block after:h-[2px] after:w-full after:mx-auto after:mt-2 after:bg-blue-400/30 after:rounded-full"
                style={{ letterSpacing: "5px" }}
            >
                <span className="text-blue-400">Žygimantas</span>{" "}
                <span className="text-white">Buzas</span>
            </h1>

            {/* Navigation Links */}
            <div className="overflow-hidden rounded-md lg:border-2 lg:border-blue-400/30 w-full">
                <div className="grid grid-cols-2 md:flex lg:flex md:flex-row lg:flex-col md:justify-center justify-items-center w-full">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            onClick={() => nav(item.path)}
                            className={getLinkClasses(item.path)}
                        >
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
