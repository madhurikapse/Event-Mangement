import React from 'react';
import EventImageSlider from '../components/EventImageSlider';

const EventPage = () => {
  // Example images array
  const images = [
    'https://via.placeholder.com/800x400?text=Event+Image+1',
    'https://via.placeholder.com/800x400?text=Event+Image+2',
    'https://via.placeholder.com/800x400?text=Event+Image+3',
  ];

  return (
    <div className="event-page">
      <h1>Event Title</h1>
      <EventImageSlider images={images} />
      <p>Event description goes here...</p>
    </div>
  );
};

export default EventPage;
