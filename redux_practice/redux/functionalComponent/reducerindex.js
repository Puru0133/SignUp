import { combineReducers } from "redux";
import countReducer from "./reducer";
import valueReducer from "./reducer2";
import apiDataReducer from "./reducer3";

const allReducers = combineReducers({
    counter: countReducer,
    values: valueReducer,
    apiData: apiDataReducer
})

export default allReducers;