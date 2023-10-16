import { createAction } from "@reduxjs/toolkit";

// Action creator function to increment the counter
export const increment = createAction("counter/increment");
// This action creator generates an action object with type "counter/increment".

// Action creator function to decrement the counter
export const decrement = createAction("counter/decrement");
// This action creator generates an action object with type "counter/decrement".
