import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  // a variable that changes! we want to use state.
  const [count, setCount] = useState(0)
  
  
  function handleCountClick() {
    setCount(count + 1)
  }
  
  return (
    <div>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));