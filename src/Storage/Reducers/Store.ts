import { combineReducers, createStore } from "redux";
import usernameReducer from "./usernameReducer";

const rootReducer = combineReducers({
    usernameReducer: usernameReducer
});

const Store = createStore(rootReducer);

export default Store