import { put, takeLatest, delay, takeEvery, call } from "redux-saga/effects";
import * as actions from "./actions";
import { act } from "react";

function* increase({ payload }) {
    try {
        yield delay(2000);
        yield put(actions.increaseSuccess(payload))
    } catch (e) {
        yield put(actions.increaseFailed())
    }
}
function* decrease({ payload }) {
    try {
        yield delay(2000);
        yield put(actions.decreaseSuccess(payload))
    } catch (e) {
        yield put(actions.increaseFailed())
    }
}
export function* homeIncreaseSaga() {
    yield takeLatest(actions.increaseRequest, increase)
}

export function* homeDecreaseSaga() {
    yield takeLatest(actions.increaseRequest, decrease)
}


async function userFtech() {
    try {
        console.log("===========")
        let comingData = await fetch("https://jsonplaceholder.typicode.com/posts/10")
        console.log(comingData)

        let ans = await comingData.json();
        console.log("---------------------------", ans)
        return ans
    }
    catch(error) {
        console.log(error)
    }
}

export function* getUserFetch() {
    try {
        const users = yield call(userFtech);
        yield put({ type: "FETCHED API DATA", users })
    } catch (e) {
        yield put(actions.increaseFailed())
    }
}

export function* homeApiDataSaga() {
    yield takeEvery("FETCHED API REQUEST", getUserFetch)
}