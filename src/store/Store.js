import { legacy_createStore,applyMiddleware } from "redux";
import myReducer from "../reducer/MyReducer";
import logger from "redux-logger";

let store = legacy_createStore(myReducer,applyMiddleware(logger));

export default store;
