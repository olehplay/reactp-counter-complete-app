import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Importing React Redux hooks
import { increment, decrement } from "../redux/actions/counterAction"; // Importing action creators

const Counter = () => {
  // Use the useSelector hook to access the counter state from the Redux store
  const counter = useSelector((state) => state.counter);

  // Use the useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch();

  // Define a function to handle incrementing the counter
  const handleIncrement = () => {
    // Dispatch the increment action using the dispatch function
    dispatch(increment());
  };

  // Define a function to handle decrementing the counter
  const handleDecrement = () => {
    // Dispatch the decrement action using the dispatch function
    dispatch(decrement());
  };

  return (
    <div>
      {/* Displaying the counter value */}
      <h2>Counter Value: {counter}</h2>
      {/* Clicking this button triggers the handleIncrement function */}
      <button onClick={handleIncrement}>Increment</button>
      {/* Clicking this button triggers the handleDecrement function */}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
