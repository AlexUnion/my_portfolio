import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/storage';
import './index.css';
import App from './App';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        rootElement
    );
} else {
    console.error('Element "div" is not found');
    const error = document.createElement('h1');
    error.innerText = 'Element "div" is not found';
    error.style.color = 'red';
    document.body.append(error);
}
