import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store, {renderState} from './Store';
import App from "./App";
import * as serviceWorker from './serviceWorker';

let renderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store = {store} dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);
renderState(renderEntireTree);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
