import {createStore} from "redux";
import RootReducer from "./RootReducer";

let store = createStore(RootReducer);

window.store = store
export default store;
