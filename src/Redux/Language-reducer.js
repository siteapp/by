const LANGUAGE = 'LANGUAGE';

const languageReducer = (store, action) => {
    if(action.store = LANGUAGE){
        store._state._Language = action.Language
        localStorage.setItem('language', action.Language)

        localStorage.getItem('language') !== null ?
            localStorage.getItem('language') === 'ru' ?
                store._state._MetaTitle = '🎉 ᐅ Александр Ковалёв'
                :
                store._state._MetaTitle = '🎉 ᐅ Aliaksandr Kavaliou'
            :
            console.log('start react app')
        ;
    }

    return store;
}

export default languageReducer;