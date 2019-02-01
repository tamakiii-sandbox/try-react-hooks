import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [value, setValue] = useState(0);
  const onClick = useCallback(event => setValue(s => s + 1), []);
  return (
    <>
      <div>yo: {value}</div>
      <button onClick={onClick}>+1</button>
    </>
  )
}

// Render your table
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
