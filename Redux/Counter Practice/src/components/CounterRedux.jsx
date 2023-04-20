import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub } from "../redux/action";
const CounterRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> {count} </h1>
      <button disabled={count === 0} onClick={() => dispatch(sub())}> - </button>
      <button onClick={() => dispatch(add())}> +</button>

//      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
//      <button onClick={() => setCount(count + 1)}> + </button>

    </div>
  );
};

export default CounterRedux;
