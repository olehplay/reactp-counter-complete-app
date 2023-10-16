// Import the `configureStore` function from the `@reduxjs/toolkit` package
import { configureStore } from "@reduxjs/toolkit";

// Import the `counterReducer` from the `./reducers/counterReducer` file
import counterReducer from "./reducers/counterReducer";

// Configure the Redux store
const store = configureStore({
  // Specify the reducers for each state slice
  reducer: {
    counter: counterReducer, // The `counterReducer` handles state changes for the "counter" slice
  },
});

// Export the created store as the default export of this module
export default store;
