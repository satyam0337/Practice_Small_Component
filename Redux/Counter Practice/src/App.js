import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, sub } from "./redux/action";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> {count} </h1>
      <button disabled={count === 0} onClick={() => dispatch(sub())} > - </button>
      <button  onClick={() => dispatch(add())} > +</button>
    </div>
  );
}

export default App;
