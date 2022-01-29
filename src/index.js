import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

let refresh = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     getInputs={store.getInputs.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

refresh(store);

store.subscribe(refresh);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
