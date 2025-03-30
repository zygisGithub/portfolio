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
                ? "text-blue-400 border border-blue-400 bg-gray-800/40"
                : "border border-transparent hover:border-blue-400 hover:bg-gray-800/30"
        }
    `;
    };

    return (
        <div className="flex flex-col text-sm sm:text-xl justify-center sm:justify-start gap-4 lg:border-r lg:border-gray-700 lg:pr-6">


            <h1
                className="relative text-4xl font-bold text-center inline-block pb-2 after:content-[''] after:block after:h-[2px] after:w-full after:mx-auto after:mt-2 after:bg-blue-400 after:rounded-full "
                style={{letterSpacing: "5px"}}
            >
                <span className="text-blue-400">Žygimantas</span>{" "}
                <span className="text-white">Buzas</span>
            </h1>


            <div
                className="grid grid-cols-2 md:flex lg:flex md:flex-row lg:flex-col md:justify-center gap-4 justify-items-center">

                <div
                    onClick={() => nav("/")}
                    className={`hover:cursor-pointer text-center w-full ${getLinkStyle("/")}`}
                >
                    Home
                </div>
                <div
                    onClick={() => nav("/projects")}
                    className={`hover:cursor-pointer text-center w-full ${getLinkStyle(
                        "/projects"
                    )}`}
                >
                    Projects
                </div>
                <div
                    onClick={() => nav("/about")}
                    className={`hover:cursor-pointer text-center w-full ${getLinkStyle(
                        "/about"
                    )}`}
                >
                    About Me
                </div>
                <div
                    onClick={() => nav("/contact")}
                    className={`hover:cursor-pointer text-center w-full ${getLinkStyle(
                        "/contact"
                    )}`}
                >
                    Contact Me
                </div>
            </div>
        </div>
    );
}

export default Navbar;