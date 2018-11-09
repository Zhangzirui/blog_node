import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const getStore = (initState) => createStore(rootReducer, initState, applyMiddleware(thunk));

export default getStore;
