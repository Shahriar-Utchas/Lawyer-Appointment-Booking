import React, { useEffect, useState } from 'react';
import { getBookings, removeBooking } from '../../Utilities/LocalStorage';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import Booking from '../Booking/Booking';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Make sure this is imported

const Bookings = () => {
    const allData = useLoaderData();
    const [bookedLawyers, setBookedLawyers] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const bookingsData = getBookings();
        const initialBooked = allData.filter(lawyer => bookingsData.includes(lawyer.id));
        setBookedLawyers(initialBooked);
    }, [allData]);

    useEffect(() => {
        if (location.state?.success) {
            toast.success("Booking successful!");
            navigate(location.pathname, { replace: true });
        }
    }, [location.state, location.pathname, navigate]);

    const handleRemoveBooking = (id) => {
        removeBooking(id);
        toast.error("Booking canceled!");
        setBookedLawyers(prev => prev.filter(lawyer => lawyer.id !== id));
    }

    return (
        <div>
            <div className="p-6 rounded-xl text-center mb-8">
                <h2 className="text-3xl font-bold">My Today Appointments</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    Here are the lawyers you have booked. You can cancel your appointment at any time. If you have any questions, feel free to reach out to us.
                </p>
            </div>

            {
                bookedLawyers.length > 0 ? bookedLawyers.map(lawyer => (
                    <Booking key={lawyer.id} lawyer={lawyer} handleRemoveBooking={handleRemoveBooking} />
                )) : <p className="text-center text-gray-500 my-4 min-h-[25vh]">No bookings available.</p>
            }

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

export default Bookings;
