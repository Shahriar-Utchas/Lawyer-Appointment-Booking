import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>My-Bookings</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                {/* Logo */}
                <a className="flex items-center gap-2 text-xl font-bold text-gray-800 btn btn-ghost normal-case">
                    <img src="C002-assets/logo.png" alt="logo" className="w-6 h-6" />
                    <span>Law.BD</span>
                </a>
            </div>

            {/* Center Nav - Large screen only */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
                    <li><a>Home</a></li>
                    <li><a>My-Bookings</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>

            {/* End */}
            <div className="navbar-end">
                <a className="btn bg-green-600 text-white hover:bg-green-700">Contact Now</a>
            </div>
        </div>
    );
};

export default Navbar;
