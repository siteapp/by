import store from "./Store";

const LANGUAGE = 'LANGUAGE';

let initialState = {
    TextSiteStore: {
        _MetaTitle: '🎉 ᐅ Александр Ковалёв',
        _Language: 'ru',
    }
}

const languageReducer = (store = initialState, action) => {

    if(action.type == LANGUAGE){
        store.TextSiteStore._Language = action.Language
        store.TextSiteStore._MetaTitle = action.MetaTitle
        localStorage.setItem('MetaTitle', action.MetaTitle)
        localStorage.setItem('language', action.Language)
    }
    return store;
}

export default languageReducer;