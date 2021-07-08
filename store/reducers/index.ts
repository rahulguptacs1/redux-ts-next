import { combineReducers } from "redux";
import posts from "./posts";
import counter from "./counter";
import timer from "./timer";
import users from "./users";
export default combineReducers({
  posts,
  counter,
  timer,
  users,
});
