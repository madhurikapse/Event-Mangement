import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState({});
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      // Replace with actual user ID and endpoint
      const userId = '123';
      const userResponse = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUser(userResponse.data);

      const ticketsResponse = await axios.get(`http://localhost:5000/api/tickets/${userId}`);
      setTickets(ticketsResponse.data);
    }
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <h3>Event History</h3>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            Event ID: {ticket.event_id} | Quantity: {ticket.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
