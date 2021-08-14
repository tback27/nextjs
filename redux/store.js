import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import userReducer from "../redux/reducers/userReducer";
import creditReducer from "../redux/reducers/creditReducer";

const store = createStore(combineReducers({userReducer,creditReducer}),applyMiddleware(logger));

export default store