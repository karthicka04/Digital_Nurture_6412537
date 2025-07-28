import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore name="Alice" school="XYZ High School" total={480} goal={6} />
    </div>
  );
}

export default App;
