
import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Rahul', 'Dhoni', 'Jadeja', 'Bumrah'];

  const oddPlayers = team.filter((_, index) => index % 2 === 0);
  const evenPlayers = team.filter((_, index) => index % 2 !== 0);

  const [p1, p2, ...rest] = team;

  const T20players = ['Kohli', 'Rohit', 'Hardik'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
