import React from 'react';
import { FaUserTie, FaStar, FaGavel, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
const Success = () => {
    return (
        <div className="py-10 px-5 text-center">
            <h2 className="text-3xl font-bold">We Provide Best Law Services</h2>
            <p className="text-sm text-gray-500 mt-2">
                Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {/* Total Lawyer */}
                <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                    <div className="flex justify-center mb-4">
                        <FaUserTie className="text-4xl text-primary" />
                    </div>
                    <div className="text-2xl font-bold"><CountUp end={199} duration={2} enableScrollSpy={true} />+
                    </div>
                    <div className="text-sm mt-1 text-gray-600">Total Lawyer</div>
                </div>

                {/* Total Reviews */}
                <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                    <div className="flex justify-center mb-4">
                        <FaStar className="text-4xl text-yellow-500" />
                    </div>
                    <div className="text-2xl font-bold"><CountUp end={467} duration={2} enableScrollSpy={true} />+</div>
                    <div className="text-sm mt-1 text-gray-600">Total Reviews</div>
                </div>

                {/* Cases Initiated */}
                <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                    <div className="flex justify-center mb-4">
                        <FaGavel className="text-4xl text-warning" />
                    </div>
                    <div className="text-2xl font-bold"><CountUp end={1900} duration={2} enableScrollSpy={true} />+</div>
                    <div className="text-sm mt-1 text-gray-600">Cases Initiated</div>
                </div>

                {/* Total Staffs */}
                <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                    <div className="flex justify-center mb-4">
                        <FaUsers className="text-4xl text-accent" />
                    </div>
                    <div className="text-2xl font-bold"><CountUp end={300} duration={2} enableScrollSpy={true} />+</div>
                    <div className="text-sm mt-1 text-gray-600">Total Staffs</div>
                </div>
            </div>
        </div>
    );
};

export default Success;
