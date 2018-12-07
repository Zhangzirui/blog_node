import {axiosUrl, getJson} from '$util/request';
import {
    UPDATE_HOME_DATA,
    FETCH_HOME_DATA,
    FETCH_STATUS,
    UPDATE_PAGE
} from '../constant/default';

import {
    homeApi,
    PAGE_NUMBER,
    PAGE_SIZE
} from '../constant/config';

const updateHomeData = ({articleList = [], articleNumber = 0} = {}) => ({
    type: UPDATE_HOME_DATA,
    articleList,
    allCount: articleNumber
});

export const fetchHomeData = ({pageNumber = PAGE_NUMBER, pageSize = PAGE_SIZE} = {}) => (dispatch) => {
    dispatch({
        type: FETCH_HOME_DATA + FETCH_STATUS.START
    });
    return axiosUrl({
        url: homeApi,
        pageNumber,
        pageSize
    })
        .then(getJson)
        .then((data) => {
            dispatch(updateHomeData(data));
        });
};

export const updatePage = (currentPage) => ({
    type: UPDATE_PAGE,
    currentPage
});
