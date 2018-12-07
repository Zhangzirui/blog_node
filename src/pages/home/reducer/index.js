import {
    UPDATE_HOME_DATA,
    UPDATE_PAGE
} from '../constant/default';
import {combineReducers} from 'redux';
import {getQuery} from '$util';

const initArticleData = {
    articleList: [],
    allCount: 0
};

const articleData = (state = initArticleData, action) => {
    switch (action.type) {
        case UPDATE_HOME_DATA:
            return Object.assign({}, state, {
                articleList: action.articleList.sort((a, b) => a.mId > b.mId),
                allCount: action.allCount
            });
        default:
            return state;
    }
};

const initMeta = {
    query: getQuery(),
    currentPage: 1
};

const meta = (state = initMeta, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return Object.assign({}, state, {
                currentPage: action.currentPage
            });
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    articleData,
    meta
});

export default rootReducer;
