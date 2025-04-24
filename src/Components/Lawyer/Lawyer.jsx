import React from 'react';
import { Link } from 'react-router';
const Lawyer = ({ lawyer }) => {
    const { id, image, name, speciality, experience, license_number, } = lawyer;
    return (
        <div>
            <div className="card lg:card-side bg-base-300 shadow-sm">
                <figure className='w-[70%] lg:w-[30%] m-4 shadow-2xl rounded-2xl mx-auto'>
                    <img
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex gap-5">
                        <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full border-1">Available</span>
                        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full border-1">{experience}+ Years Experience</span>
                    </div>
                    <p className='text-gray-500'>{speciality}</p>
                    <p className='text-gray-500'>®️License No: {license_number}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/lawyerDetails/${id}`} className="btn btn-outline btn-info w-full rounded-full">View details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;