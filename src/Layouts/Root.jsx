import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            <div className='px-4 md:px-8 lg:px-10 xl:px-15 2xl:px-48'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </>
    );
};

export default Root;