import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Basics" status="ongoing" instructor="John Doe" />
      <CohortDetails name="Node Advanced" status="completed" instructor="Jane Smith" />
    </div>
  );
}

export default App;
