import React from 'react';
import FlightData from './FlightData';

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome, Guest! 👤</h2>
      <p>You can view flights but must login to book tickets.</p>
      <FlightData canBook={false} />
    </div>
  );
}

export default GuestGreeting;
