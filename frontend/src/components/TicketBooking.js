import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Api from '../axiosconfig';
import './Book.css';
import Reminder from './Reminder';
import { useNavigate } from 'react-router-dom';

const TicketBooking = () => {
    const [ticketCount, setTicketCount] = useState(1);
    const [eventId, setEventId] = useState('');
    const router=useNavigate()

    const handleChange = (e) => {
        setTicketCount(e.target.value);
    };

    const handleEventChange = (e) => {
        setEventId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post('/ticket/bookings', { eventId, ticketCount });
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Error booking tickets.');
        }
    };
 const gorimnder=()=>{
    router("/Reminder")
 }
    return (
        <form onSubmit={handleSubmit} className="ticket-booking-form">
            <h1>Book Tickets</h1>

            <label htmlFor="event">Event:</label>
            <select id="event" value={eventId} onChange={handleEventChange} required>
                <option value="">Select Event</option>
                <option>bithday</option>
                <option>wedding</option>
                <option>kitti</option>
                <option>anniversery</option>
                <option>promotion</option>
            </select>

            <label htmlFor="ticket">Number of Tickets:</label>
            <input
                id="ticket"
                type="number"
                value={ticketCount}
                onChange={handleChange}
                min="1"
                required
            />

            <button type="submit">Book Tickets</button>
            <br/>
            <button type='sumbit' onClick={gorimnder}>Reminder</button>
        </form>
    );
};

export default TicketBooking;
