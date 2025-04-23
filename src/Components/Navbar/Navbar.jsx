import React from 'react';
import { NavLink } from 'react-router';

const getLinkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-semibold' : 'text-gray-600';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 font-medium">
                        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/LawyerDetails/l" className={getLinkClass}>My-Bookings</NavLink></li>
                        <li><NavLink to="/blogs" className={getLinkClass}>Blogs</NavLink></li>
                        <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
                    </ul>
                </div>
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 btn btn-ghost normal-case">
                    <img src="C002-assets/logo.png" alt="logo" className="w-6 h-6" />
                    <span>Law.BD</span>
                </NavLink>
            </div>

            {/* Center - Desktop Only */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
                    <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/LawyerDetails/l" className={getLinkClass}>My-Bookings</NavLink></li>
                    <li><NavLink to="/blogs" className={getLinkClass}>Blogs</NavLink></li>
                    <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
                </ul>
            </div>

            {/* End */}
            <div className="navbar-end">
                <NavLink to="/contact" className="btn bg-green-600 text-white hover:bg-green-700">
                    Contact Now
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
