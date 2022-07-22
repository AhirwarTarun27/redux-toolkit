//for extract the counter from the store
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import { addBy, decrement, increment } from './store';

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(addBy(5))}>Increment by 5</button>
    </div>
  );
}

export default App;
