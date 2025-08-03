
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Rahul', score: 45 },
    { name: 'Dhoni', score: 100 },
    { name: 'Jadeja', score: 68 },
    { name: 'Bumrah', score: 72 },
    { name: 'Shami', score: 30 },
    { name: 'Ashwin', score: 85 },
    { name: 'Gill', score: 78 },
    { name: 'Surya', score: 65 },
    { name: 'Pant', score: 50 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
