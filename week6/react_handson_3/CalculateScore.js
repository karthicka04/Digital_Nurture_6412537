import React from 'react';

function CalculateScore({ name, school, total, goal }) {
  const avg = total / goal;

  const containerStyle = {
    border: '1px solid black',
    padding: '20px',
    margin: '20px',
    backgroundColor: 'skyblue',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    fontSize: '18px',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.2)'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'darkred' }}>{name}</h2>
      <p style={{ color: 'green' }}>School: {school}</p>
      <p style={{ color: 'navy' }}>Total Marks: {total}</p>
      <p style={{ color: 'purple' }}>Goal: {goal}</p>
      <p style={{ color: 'maroon' }}>Average: {avg}</p>
    </div>
  );
}

export default CalculateScore;
