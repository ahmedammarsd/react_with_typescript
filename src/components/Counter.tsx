import { useReducer } from "react";
import { CounterAction, CounterState } from "../types/app";

const initialstate: CounterState = { count: 0 };
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 1) };
    case "decrement":
      return { count: state.count - (action.payload || 1) };
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h2>count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset 0</button>
    </div>
  );
};

export default Counter;
