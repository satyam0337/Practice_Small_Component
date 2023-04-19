import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { inc, dec } from "../redux/action";

const Button = () => {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(dec())} disabled={count === 0}> - </button>
      
     <button onClick={() => dispatch(inc())}> + </button>
          
    </div>
  );
};

export default Button;
