import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk';

export default function createReduxStore() {
  return createStore(rootReducer, applyMiddleware(reduxThunk));
}