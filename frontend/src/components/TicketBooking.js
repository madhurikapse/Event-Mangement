
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Api from '../axiosconfig';

const TicketBooking = ({ eventId }) => {
    const [ticketCount, setTicketCount] = useState(1);

    const handleChange = (e) => {
        setTicketCount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post(`/api/tickets/${eventId}`, { ticketCount });
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Error booking tickets.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Book Tickets</h1>
            <label>Number of Tickets:</label>
            <input type="number" value={ticketCount} onChange={handleChange} min="1" required />
            <button type="submit">Book Tickets</button>
        </form>
    );
};

export default TicketBooking;
