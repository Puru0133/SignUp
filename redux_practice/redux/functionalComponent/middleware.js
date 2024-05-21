import { applyMiddleware } from "redux";
import { store } from "./store";
import { thunk } from "redux-thunk";

const logMiddleware = (store) => (next) => (action) => {
    console.log("action", action);
    next(action)
}

export function setApiData(data) {
    return {
        type: "API_SUCCESS",
        payload: data,
    }
}

export function loadingData() {
    return {
        type: "FETCHING_DATA"
    }
}
export function handleError() {
    return {
        type: "SOME_ERROR"
    }
}
export function getApiData() {
    return async (dispatch) => {
        dispatch(loadingData());
        try {
            const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "GET"
            })
            const allData = await apiResponse.json();
            await dispatch(setApiData(allData))
            return allData || [];
        }
        catch (error) {
            dispatch(handleError())
            console.log(error)
        }
    }
}

export const middleware = applyMiddleware(thunk)