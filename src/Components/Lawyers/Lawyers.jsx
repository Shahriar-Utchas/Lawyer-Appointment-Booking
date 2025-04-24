import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyers }) => {
    const [displayLawyers, setDisplayLawyers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayLawyers(lawyers);
        } else {
            setDisplayLawyers(lawyers.slice(0, 6));
        }
    }, [lawyers, showAll]);

    return (
        <div className='my-10 flex flex-col items-center'>
            <h1 className='text-center font-bold text-3xl'>Our Best Lawyers</h1>
            <p className='text-center text-gray-500 my-5'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    displayLawyers.map(lawyer => (
                        <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
                    ))
                }
            </div>
            {
                lawyers.length > 6 && (
                    <button
                        onClick={() => {
                            setShowAll(prev => !prev)
                            if (showAll) window.scrollTo(0, 400)
                        }
                        }
                        className='btn btn-success mt-4 rounded-full w-[60%] md:w-[40%] lg:w-[20%]'>
                        {showAll ? 'Show Less Lawyers' : 'Show All Lawyers'}
                    </button>
                )
            }
        </div>
    );
};

export default Lawyers;
