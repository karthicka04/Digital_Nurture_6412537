
import React from 'react';
import './OfficeSpace.css';

const OfficeSpace = ({ office }) => {
  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div className="office-card">
      <img src={office.image} alt={office.name} className="office-image" />
      <h3>{office.name}</h3>
      <p style={rentStyle}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>
    </div>
  );
};

export default OfficeSpace;
