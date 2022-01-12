import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";

const rootReducer = combineReducers({
    profile: profileSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

window.store = store
