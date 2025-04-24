import React from "react";
import { NavLink } from "react-router";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white py-10 px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Logo & Brand */}
                    <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                        <img src="C002-assets/logo.png" alt="logo" className="w-8 h-8" />
                        Law.BD
                    </NavLink>

                    {/* Nav Links */}
                    <div className="flex space-x-6 text-sm text-gray-300 font-medium">
                        <NavLink to="/" className="hover:text-white">Home</NavLink>
                        <NavLink to="/LawyerDetails/l" className="hover:text-white">My-Bookings</NavLink>
                        <NavLink to="/blogs" className="hover:text-white">Blogs</NavLink>
                        <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-xs border-t border-dotted border-gray-600 my-4" />

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-lg">
                        <a href="https://www.facebook.com/shahriar.utchas" target="_blank"><FaFacebookF className="text-blue-500 shover:text-blue-600" /></a>
                        <a href="https://github.com/Shahriar-Utchas" target="_blank"><FaGithub className="text-white hover:text-gray-400" /></a>
                        <a href="https://www.linkedin.com/in/shahriar-utchas" target="_blank"><FaLinkedinIn className="text-sky-600 hover:text-sky-700" /></a>
                        <a href="https://www.youtube.com/@shahriarutchas2560" target="_blank"><FaYoutube className="text-red-600 hover:text-red-700" /></a>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
