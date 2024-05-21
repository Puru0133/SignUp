import { createStore } from 'redux';
import reducer from "./reducer"

const store = createStore(reducer);

const onStoreChange = () => console.log(store.getState());

store.subscribe(onStoreChange);

const unsubscribe = store.subscribe(onStoreChange);
unsubscribe();

export default store
