import { combineReducers } from "redux";
import homeReducer from "./reducers";
import myReducerAPI from "./apiReducer";

export const combinedReducers = combineReducers({
    home: homeReducer,
    API_Data: myReducerAPI
})