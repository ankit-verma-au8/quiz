import questionReducer from "./reducers/questionReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questionState: questionReducer,
  userState: userReducer,
});

export default rootReducer;
