import React, { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addBooking, getBookings } from '../../Utilities/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';

const LawyerDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const lawyer = data.find(lawyer => lawyer.id === id);
    const { name, image, speciality, experience, license_number, availability, consultation_fee } = lawyer || {};
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    const bookError = () => toast.error("You have already booked this lawyer!");
    const handleBookings = () => {
        const bookingsData = getBookings();
        const isAlreadyBooked = bookingsData.some(booking => booking === id);
        if (isAlreadyBooked) {
            bookError();
            return;
        }
        addBooking(id);
        navigate('/Bookings', { state: { success: true } }); // Pass success flag
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
            {/* Section: Page Heading */}
            <div className="bg-gray-100 p-6 rounded-xl text-center">
                <h2 className="text-3xl font-bold">Lawyer’s Profile Details</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    Get to know our verified legal professionals and their areas of expertise. Here you’ll find detailed profiles including years of experience, specialization, availability, and consultation fees — helping you make informed decisions when booking legal assistance.
                </p>
            </div>

            {/* Section: Lawyer Info */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">
                <img src={image} alt={name} className="w-52 h-52 object-cover rounded-lg bg-gray-200" />
                <div className="flex flex-col gap-3 w-full">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium w-fit">
                        {experience}+ Years Experience
                    </span>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="text-gray-700 flex items-center gap-2">
                        {speciality} • <span className="text-sm text-gray-500">License No: {license_number}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {availability?.split(', ').map((day, i) => (
                            <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full">
                                {day}
                            </span>
                        ))}
                    </div>
                    <p className="mt-1 text-green-600 font-semibold">
                        Consultation Fee: <span className="font-bold">Taka : {consultation_fee}</span>
                    </p>
                </div>
            </div>

            {/* Section: Appointment */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h4 className="text-lg font-semibold border-b pb-2">Book an Appointment</h4>
                <div className="flex justify-between items-center flex-wrap gap-3">
                    <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full font-medium">
                        Lawyer Available Today
                    </span>
                    <span className="flex items-center text-yellow-600 bg-yellow-100 px-3 py-2 rounded text-sm">
                        ⚠️ Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </span>
                </div>
                <button
                    onClick={() => {
                        handleBookings();
                        handleNavigate();
                    }}
                    className="btn btn-success w-full rounded-full mt-4">
                    Book Appointment Now
                </button>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default LawyerDetails;
