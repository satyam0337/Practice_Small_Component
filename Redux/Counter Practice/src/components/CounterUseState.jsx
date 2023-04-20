import React from "react";
import { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2> Count : {count} </h2>
      <button onClick={() => sub()} disabled={count === 0}>-</button>
      <button onClick={() => add()}> + </button>

    {/* we can use set count dircet without any handleClick function  */}
      
     <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button> 
     <button onClick={() => setCount(count + 1)}> + </button> 
          
    </div>
  );
};

export default CounterUseState;
