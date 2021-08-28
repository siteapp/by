import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {renderState} from './Redux/Store';
import store from './Redux/Redux';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import StoreContext, {Provider} from "./StoreContext";

let renderEntireTree = (store) => {
    localStorage.getItem('language') !== null ?
        localStorage.getItem('language') === 'ru' ?
            store.TextSiteStore._Language = 'ru'
            :
            store.TextSiteStore._Language = 'en'
        :
        console.log('Error index.js')
    ;

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
renderState(renderEntireTree);

/*renderState(() =>{
    let state = store.getState();
    renderEntireTree(state);
});*/

serviceWorker.unregister();