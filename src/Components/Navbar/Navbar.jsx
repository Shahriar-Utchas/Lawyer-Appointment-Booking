import React from 'react';
import { NavLink } from 'react-router';

const getLinkClass = ({ isActive }) =>
    isActive
        ? 'text-green-600 font-semibold underline underline-offset-8 text-sm'
        : 'text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm';


const Navbar = () => {
    return (
        <div className="navbar px-4">
            {/* Logo on the Left */}
            <div className="navbar-start">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold text-gray-800 normal-case"
                >
                    <img src="C002-assets/logo.png" alt="logo" className="w-6 h-6" />
                    <span>Law.BD</span>
                </NavLink>
            </div>

            {/* Right side menu */}
            <div className="navbar-end">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="cursor-pointer px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 text-gray-600 font-medium"
                    >
                        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/Bookings" className={getLinkClass}>Bookings</NavLink></li>
                        <li><NavLink to="/blogs" className={getLinkClass}>Blogs</NavLink></li>
                        <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-8 px-1 text-gray-600 font-medium items-center">
                        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/Bookings" className={getLinkClass}>Bookings</NavLink></li>
                        <li><NavLink to="/blogs" className={getLinkClass}>Blogs</NavLink></li>
                        <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
