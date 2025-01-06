import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExampleStateModel } from "../models/example-state-model";

const updateExampleState = (state: any, action: PayloadAction<any>) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.payload != undefined) {
    if (newState[action.payload.fieldName]?.value != undefined) {
      newState[action.payload.fieldName].value = action.payload.fieldValue;
      newState[action.payload.fieldName].isValid = action.payload.isValid;
    } else {
      newState[action.payload.fieldName] = action.payload.fieldValue;
    }
  }
  return newState;
};

const upsertExampleState = (state: any, action: PayloadAction<ExampleStateModel>) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.payload != undefined) {
    newState = action.payload;
  }
  return newState;
};

const { actions: exampleActions, reducer: ExampleState } = createSlice({
  name: "ExampleState",
  initialState: {},
  reducers: {
    updateExampleState: updateExampleState,
    upsertExampleState: upsertExampleState,
  },
});

export { exampleActions, ExampleState };