import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlices";

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
