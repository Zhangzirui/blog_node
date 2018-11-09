import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './store';
import App from './container/app';
import {fetchHomeData} from './action';

const initStore = window.__initStore || {};
const store = getStore(initStore);

if (Object.keys(initStore).length === 0) {
    store.dispatch(fetchHomeData());
}

const Home = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

try {
    ReactDOM.hydrate(
        <Home />,
        document.getElementById('root')
    );
} catch (e) {}

