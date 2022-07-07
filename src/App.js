import "./App.css";
import DisplayUpd from "./DisplayUpd";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  selectCount,
} from "./counterSlice";
function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {count}
        <DisplayUpd></DisplayUpd>
      </header>
    </div>
  );
}

export default App;
