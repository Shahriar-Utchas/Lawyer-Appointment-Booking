import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <>
            {/* Global Spinner Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60">
                    <div className="flex space-x-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            )}


            {/* Main Layout (not affected by spinner) */}
            <div className={`px-4 md:px-8 lg:px-10 xl:px-15 2xl:px-48 ${isLoading ? 'pointer-events-none select-none blur-sm' : ''}`}>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Root;
