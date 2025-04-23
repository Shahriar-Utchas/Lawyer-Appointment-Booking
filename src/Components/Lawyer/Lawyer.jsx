import React from 'react';
const Lawyer = ({ lawyer }) => {
    const { image, name, speciality, experience, license_number, } = lawyer;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='w-[30%] m-4 shadow-2xl rounded-2xl'>
                    <img
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex gap-5">
                    <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">Available</span>
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">{experience}+ Years Experience</span>
                    </div>
                    <p className='text-gray-500'>{speciality}</p>
                    <p className='text-gray-500'>®️License No: {license_number}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-info w-full rounded-full">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;