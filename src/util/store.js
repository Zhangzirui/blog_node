import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let initStore = {};

try {
    initStore = window.__initStore || {};
} catch(e) {}

const getStore = (rootReducer) => createStore(rootReducer, initStore, applyMiddleware(thunk));

export default getStore;
