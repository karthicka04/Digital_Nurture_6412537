import React from 'react';
import FlightData from './FlightData';

function UserGreeting() {
  return (
    <div>
      <h2>Welcome, User! 🎟️</h2>
      <FlightData canBook={true} />
    </div>
  );
}

export default UserGreeting;
