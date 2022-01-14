import {applyMiddleware, createStore} from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
// import {configureStore} from "@reduxjs/toolkit";

const store = createStore(RootReducer, applyMiddleware(thunk));

// const store = configureStore({
//     reducer: RootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// })

window.store = store
export default store;
