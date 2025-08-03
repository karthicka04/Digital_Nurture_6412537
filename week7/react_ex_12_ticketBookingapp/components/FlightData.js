import React from 'react';

const flights = [
  { id: 1, airline: "IndiGo", from: "Delhi", to: "Mumbai", price: 4500 },
  { id: 2, airline: "Air India", from: "Chennai", to: "Bangalore", price: 3200 },
  { id: 3, airline: "SpiceJet", from: "Kolkata", to: "Hyderabad", price: 3900 },
];

const FlightData = ({ canBook }) => {
  return (
    <div>
      <h3>Available Flights:</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            ✈ {flight.airline} | {flight.from} ➡ {flight.to} | ₹{flight.price}
            {canBook && <button style={{ marginLeft: '10px' }}>Book Now</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightData;
