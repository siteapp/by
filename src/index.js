import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {renderState} from './Redux/Store';
import store from './Redux/Redux';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import dispatch from './Redux/Store';

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
            <App
                store = {store}
                dispatch = {dispatch.dispatch.bind(store)}
            />
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
