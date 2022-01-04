import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
