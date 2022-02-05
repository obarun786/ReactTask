import React, {useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="container-title">
        <h1><strong>COUNTER APP</strong></h1>
      </div>
      <div className="container-body">
        <h2>{count}</h2>
        <button 
            className="btn increment" 
            onClick={() => setCount(count + 1)}
        >
        INCREASE
        </button>

        <button 
            className="btn decrement" 
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
        >
        DECREASE
        </button>
          
        <button 
            className="btn reset" 
            onClick={() => setCount(0)}
            disabled={count === 0}
        >
        RESET
        </button>
      </div>
    </div>
  );
}

export default App;
