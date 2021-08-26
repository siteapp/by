import {combineReducers, createStore} from "redux";
import phoneReducer from "./Phone-reducer";
import languageReducer from "./Language-reducer";
import aboutReducer from "./About-reducer";
import menuReducer from "./Menu-reducer";
import TextSiteStoreReducer from "./TextSiteStore-reducer";

let reducers = combineReducers({
    Contacts: phoneReducer,
    Language: languageReducer,
    _About: aboutReducer,
    Menu: menuReducer,
    TextSiteStore: TextSiteStoreReducer
})

let store = createStore(reducers);

export default store;