import React from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyers }) => {
    return (
        <div className='my-10'>
            <h1 className='text-center font-bold text-3xl'>Our Best Lawyers</h1>
            <p className='text-center text-gray-500 my-5'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                {
                    lawyers.map(lawyer => (
                        <Lawyer lawyer={lawyer}></Lawyer>
                    ))
                }
            </div>
        </div>
    );
};

export default Lawyers;