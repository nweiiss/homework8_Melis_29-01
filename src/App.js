import React from 'react';
import { useState, useEffect } from 'react';
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {};
  }, [count]);

  return (
    <div>
      <p>Сколько вам лет?</p>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

