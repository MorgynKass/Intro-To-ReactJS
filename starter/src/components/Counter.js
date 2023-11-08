import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // handle increment of counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // handle decrement of the counter
  const handleDecement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecement}>
          Minus 1
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 1
        </button>

        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
