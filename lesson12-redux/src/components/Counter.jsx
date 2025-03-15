import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
