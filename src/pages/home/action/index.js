import axiosUrl from '$util/axiosUrl';
import {
    UPDATE_HOME_DATA,
    FETCH_STATUS
} from '../constant/default';

import {
    homeApi,
    PAGE_NUMBER,
    PAGE_SIZE
} from '../constant/config';

const updateHomeData = (status, data = {}) => ({
    type: UPDATE_HOME_DATA,
    status,
    articleList: data.articleList || [],
    allCount: data.articleNumber || 0
});

export const fetchHomeData = (pageNumber = PAGE_NUMBER, pageSize = PAGE_SIZE, errCb) => (dispatch) => {
    dispatch(updateHomeData(FETCH_STATUS.START));
    return axiosUrl({
        url: homeApi,
        pageNumber,
        pageSize
    })
        .then((res) => {
            if (res && res.state === 0) {
                dispatch(updateHomeData(FETCH_STATUS.SUCCESS, res.data));
                return;
            }
            dispatch(updateHomeData(FETCH_STATUS.FAIL));
            errCb && errCb(res.msg);
        });
};
