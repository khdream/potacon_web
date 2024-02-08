import { createStore, combineReducers } from "redux";

// Combine all reducers if you have more than one
const rootReducer = combineReducers({
});

// Define RootState type
export type RootState = {
    // ... other state types if you have more
};

// Create Redux Store
const store = createStore(rootReducer);

export default store;
