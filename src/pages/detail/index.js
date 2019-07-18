import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from '$util/store';
import rootReducer from './reducer';
import App from './container';
import '@babel/polyfill';

const store = getStore(rootReducer);

const Detail = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Detail;

try {
    ReactDOM.hydrate(
        <Detail />,
        document.getElementById('root')
    );
} catch (e) {}

