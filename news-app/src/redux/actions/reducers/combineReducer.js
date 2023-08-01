import { combineReducers } from "redux";
import { newsReducer, selectedNewsReducer } from "./newsReducer";
const reducers = combineReducers({
  current_news: newsReducer,
  news: selectedNewsReducer,
});
export default reducers;