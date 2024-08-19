import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/noteReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
