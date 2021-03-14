import usersReducer from "./usersReducer";
import { combineReducers } from "redux";
import barksReducer from "./barksReducer";

const entitiesReducer = combineReducers({
  user: usersReducer,
  barks: barksReducer
});

export default entitiesReducer;
