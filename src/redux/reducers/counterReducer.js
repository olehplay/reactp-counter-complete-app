import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions/counterAction.js";

// Set the initial state of the counter
const initialState = 0;

// Create the counter reducer using createReducer
const counterReducer = createReducer(initialState, (builder) => {
  // Define how the state should be updated for different actions
  builder
    // Increment the state by 1 when the increment action is dispatched
    .addCase(increment, (state) => state + 1)

    // Decrement the state by 1 when the decrement action is dispatched
    .addCase(decrement, (state) => state - 1);
});

export default counterReducer;
