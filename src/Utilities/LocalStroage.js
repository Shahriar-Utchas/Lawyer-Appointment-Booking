const getBookingsFromLocalStorage = () => {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
}
const setBookingsToLocalStorage = (bookings) => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

const addBookingToLocalStorage = (id) => {
    const bookings = getBookingsFromLocalStorage();
    const newBooking = [...bookings, id];
    setBookingsToLocalStorage(newBooking);

}
const removeBookingFromLocalStorage = (bookingId) => {
    const bookings = getBookingsFromLocalStorage();
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookingsToLocalStorage(updatedBookings);
}

export {
     getBookingsFromLocalStorage as getBookings, 
     addBookingToLocalStorage as addBooking,
     removeBookingFromLocalStorage as removeBooking,
};