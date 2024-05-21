import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import allReducers from "./reducerindex";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { middleware } from "./middleware";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['values']
};
const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store)

const onStoreChange = () => console.log(store.getState());

store.subscribe(onStoreChange)
