import {
    UPDATE_HOME_DATA
} from '../constant/default';

const updateHomeData = (state, action) => {
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

export default updateHomeData;
