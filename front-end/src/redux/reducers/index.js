import { combineReducers } from "redux";
import userReducer from "./userReducer";
import stationReducer from "./stationReducer";

const allReducers = combineReducers({
  userReducer,
  stationReducer,
});

export default allReducers;
