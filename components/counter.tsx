import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "@store/actions/counter";

const Counter = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};

export default Counter;
