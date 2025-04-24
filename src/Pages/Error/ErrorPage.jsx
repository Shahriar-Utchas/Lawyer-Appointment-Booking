import React from 'react';
import { useNavigate } from 'react-router';
import { Ghost } from 'lucide-react';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
            <div className="w-full max-w-md sm:max-w-xl bg-base-200 bg-opacity-5 shadow-xl rounded-2xl p-6 sm:p-10 text-center border border-green-500">
                <div className="flex flex-col items-center mb-6">
                    <Ghost size={56} className="text-green-500 mb-4 sm:mb-6" />
                    <h1 className="text-4xl sm:text-5xl font-bold text-black">404</h1>
                    <p className="text-lg sm:text-xl text-black mt-2 font-semibold">
                        Oops! Page Not Found
                    </p>
                </div>
                <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full cursor-pointer"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
