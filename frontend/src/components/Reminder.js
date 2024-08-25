import React, { useState, useEffect } from 'react';
import Api from '../axiosconfig';
import toast from 'react-hot-toast';

const Reminder= ({ eventId }) => {
    const [reminderTime, setReminderTime] = useState('');
    const [events, setEvents] = useState({
        birthday:"birthday",
        weeding:'',
});

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await Api.get('/events');
                setEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

    const handleChange = (e) => {
        setReminderTime(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post('/reminders', { eventId, reminderTime });
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Error setting reminder.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Set Reminder</h2>
            <label htmlFor="event">Event:</label>
            <select id="event" onChange={(e) => setReminderTime(e.target.value)}>
             
            <option>Birthday</option>
            <option>weeding</option>
            <option>office party</option>
               
                   
               
            </select>
            <label>Reminder Time:</label>
            <input
                type="datetime-local"
                id="reminderTime"
                value={reminderTime}
                onChange={handleChange}
                required
            />
            <button type="submit">Set Reminder</button>
        </form>
    );
};

export default Reminder;
