import React, { useEffect, useState } from 'react';
import { getBookings, removeBooking } from '../../Utilities/LocalStorage';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router';
import Booking from '../Booking/Booking';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { Helmet } from 'react-helmet';

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
    };

    // Chart data
    const data = bookedLawyers.map((lawyer) => ({
        name: lawyer.name,
        price: lawyer.consultation_fee,
    }));

    const colors = ['#0088FE', '#FFBB28', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <Helmet>
                <title>Lawyer | Booking</title>
            </Helmet>
            {/* Bar Chart */}
            {bookedLawyers.length > 0 && (
                <div className="w-full flex justify-center my-8">
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="price" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            )}

            {/* Header */}
            <div className="p-6 rounded-xl text-center mb-8">
                <h2 className="text-3xl font-bold">My Today Appointments</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    Here are the lawyers you have booked. You can cancel your appointment at any time. If you have any questions, feel free to reach out to us.
                </p>
            </div>

            {/* Bookings List */}
            {bookedLawyers.length > 0 ? (
                bookedLawyers.map(lawyer => (
                    <Booking key={lawyer.id} lawyer={lawyer} handleRemoveBooking={handleRemoveBooking} />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center min-h-[28vh] text-center">
                    <p className="text-gray-500 mb-4">No bookings available.</p>
                    <Link to={`/`}><button className='btn btn-success'>Add Bookings</button></Link>
                </div>

            )}


            {/* Toasts */}
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
