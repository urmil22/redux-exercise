import { useSelector, useDispatch } from 'react-redux/es/exports';


function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:'inc'});
  }

  const decrement = () => {
     dispatch({type:'dec'});
  }

  const addBy = () => {
    dispatch({type:'add', payload:10})
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add value by 10</button>
    </div>
  );
}

export default App;
