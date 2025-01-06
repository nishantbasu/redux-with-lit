import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ExampleState } from "./example-store";

const rootReducer = combineReducers({
    ExampleState
});

export const store = configureStore({
  reducer: rootReducer,
});

export const state = store.getState();
