import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import FlyingSquares from "./components/background";

function App() {
    return (
        <div className="relative z-10 min-h-screen overflow-hidden text-gray-300">
            {/* Fullscreen background grid */}
            <FlyingSquares />

            {/* App Content */}
            <div className='relative z-10 flex flex-col p-8'>
                <div className='flex flex-col items-center sm:items-start sm:flex-row sm:justify-between mb-8'>
                    <h1 className='text-2xl sm:text-4xl font-bold text-center sm:text-left' style={{ letterSpacing: '5px' }}>
                        Žygimantas Buzas
                    </h1>
                </div>

                <Router>
                    <div className='flex flex-col sm:flex-row gap-8'>
                        <Navbar />
                        <main className='flex-grow'>
                            <Routes>
                                <Route element={<Home />} path='/' />
                                <Route element={<Projects />} path='/projects' />
                                <Route element={<About />} path='/about' />
                                <Route element={<Contact />} path='/contact' />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
