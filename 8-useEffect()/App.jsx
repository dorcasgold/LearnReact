import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code will run after every render
    console.log('Component rendered');
  });

  useEffect(() => {
    // This code will run only once after the initial render
    console.log('Component mounted');

    // Clean-up function
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
