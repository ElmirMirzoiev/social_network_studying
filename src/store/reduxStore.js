import {createStore} from "redux";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer);

window.store = store
export default store;
