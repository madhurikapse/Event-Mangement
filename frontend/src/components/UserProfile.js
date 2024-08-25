import React, { useEffect, useState } from 'react';
import Api from '../axiosconfig';
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const userResponse = await Api.get('/pro/profile');
                const bookingsResponse = await Api.get('/book/bookings');
                setUser(userResponse.data.user);
                setBookings(bookingsResponse.data.bookings);
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="user-profile">
            <div className="profile-header">
                <h1>User Profile</h1>
                {user && (
                    <div className="profile-info">
                        <img src={user.profilePicture} alt="Profile" className="profile-pic" />
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
                    </div>
                )}
            </div>

            <div className="bookings">
                <h2>Event Bookings</h2>
                {bookings.length > 0 ? (
                    <ul>
                        {bookings.map(booking => (
                            <li key={booking._id} className="booking-item">
                                <h3>{booking.name}</h3>
                                <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                                <p>Tickets: {booking.bookedTickets}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
