import React from 'react';


const Booking = ({ lawyer, handleRemoveBooking }) => {
    const { id, name, speciality, consultation_fee } = lawyer;

    return (
        <>
           
            <div className="bg-white border rounded-xl p-5 mb-4 shadow-sm max-w-4xl mx-auto">
                {/* Top Row: Name + Fee */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-base">{name}</h3>
                        <p className="text-sm text-gray-500">{speciality}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                        Appointment Fee : <span className="font-medium">{consultation_fee} Taka</span>
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed my-4"></div>

                {/* Cancel Button */}
                <button onClick={() => handleRemoveBooking(id)} className="w-full border border-red-500 text-red-600 font-semibold py-2 rounded-full hover:bg-red-50 transition cursor-pointer">
                    Cancel Appointment
                </button>

            </div>

        </>
    );
};

export default Booking;
