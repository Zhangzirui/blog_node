import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from '$util/store';
import App from './container/app';
import rootReducer from './reducer';
import '@babel/polyfill';

const store = getStore(rootReducer);

const Home = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Home;

try {
    ReactDOM.hydrate(
        <Home />,
        document.getElementById('root')
    );
} catch (e) {}

