import {combineReducers} from 'redux';
import {getQuery} from '$util';
import {
    UPDATE_ARTICLE
} from '../constant/default';

const articleState = {
    pre: {},
    next: {},
    current: {
        title: '',
        content: '',
        menu: [],
        birthTime: '',
        mTime: ''
    }
};

const article = (state = articleState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE:
            return Object.assign({}, state, {
                ...action.articleData
            });
        default:
            return state;
    }
};

const metaState = {
    query: getQuery()
};

const meta = (state = metaState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    article,
    meta
});

export default rootReducer;
