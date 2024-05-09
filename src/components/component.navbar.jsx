import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../imgs/Component 40.png";
import { Link } from 'react-router-dom';
import { navbarData } from "../common/navbarData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="px-4 md:px-8 lg:px-20 py-6 pb-10 flex justify-between items-center">
            <img src={logo} alt="Logo" className="w-40 object-cover" />

            <div className="hidden md:flex items-center">
                {navbarData.map((item, index) => (
                    <Link to={item.link} key={index} className="mx-4 text-gray-800 hover:text-blue-700 transition-colors duration-300">{item.name}</Link>
                ))}
                <button className="bg-gradient-to-t from-blue-700 to-blue-900 text-white p-3 px-8 rounded-3xl">Login</button>
            </div>

            <div className="md:hidden">
                <button className="focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-8 h-8 text-gray-800 hover:text-blue-700 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            ""
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-0 left-0 w-full bg-white shadow-md z-10"
                    >
                        <div className="relative flex flex-col items-center py-4">
                            <button className="focus:outline-none absolute top-4 right-4 z-50" onClick={toggleMenu}>
                                <svg className="w-8 h-8 text-gray-800 hover:text-blue-700 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {navbarData.map((item, index) => (
                                <Link to={item.link} key={index} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 py-2" onClick={closeMenu}>{item.name}</Link>
                            ))}
                            <button className="bg-gradient-to-t from-blue-700 to-blue-900 text-white p-3 px-8 rounded-3xl mt-4" onClick={closeMenu}>Login</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
