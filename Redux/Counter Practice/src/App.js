import logo from "./logo.svg";
import "./App.css";
import CounterRedux from "./components/CounterRedux";
import CounterUseState from "./components/CounterUseState";

function App() {
  

  return (
    <div className="App">
      <CounterRedux />
      <CounterUseState/>
    </div>
  );
}

export default App;
