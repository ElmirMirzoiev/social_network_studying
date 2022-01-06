import {combineReducers} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";

let RootReducer = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export default RootReducer;