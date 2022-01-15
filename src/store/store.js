import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store
export default store;
