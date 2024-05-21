import { all } from "redux-saga/effects";
import { homeIncreaseSaga, homeDecreaseSaga, homeApiDataSaga} from "./saga";

function* rootSaga() {
    yield all([
        homeIncreaseSaga(),
        homeDecreaseSaga(),
        homeApiDataSaga()
    ])
}

export default rootSaga;