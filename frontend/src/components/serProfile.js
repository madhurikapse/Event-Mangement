// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';

import Api from '../axiosconfig';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await Api.get('/api/users/profile');
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user data.');
            }
        }
        fetchUserData();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <h3>Event History</h3>
                    <ul>
                        {user.events.map(event => (
                            <li key={event.id}>{event.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
