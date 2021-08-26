import {combineReducers, createStore} from "redux";
import languageReducer from "./Language-reducer";
import phoneReducer from "./Phone-reducer";

let reducers = combineReducers(
    {
        phoneReducer: phoneReducer,
        languageReducer: languageReducer
    }
);

let store = createStore(reducers);

export default store;