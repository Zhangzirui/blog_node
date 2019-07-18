import {axiosUrl, getJson} from '$util/request';
import {splitArticle, parseContentToCatalog} from '$util/catalog';
import {
    UPDATE_ARTICLE,
    FETCH_ARTICLE,
    FETCH_STATUS
} from '../constant/default';
import {detailApi} from '../constant/config';

const updateArticle = (articleData) => ({
    type: UPDATE_ARTICLE,
    articleData
});

export const fetchArticle = (aId) => (dispatch) => {
    dispatch({
        type: FETCH_ARTICLE + FETCH_STATUS
    });
    return axiosUrl({
        url: detailApi,
        params: {
            aId
        }
    })
        .then(getJson)
        .then((data) => {
            const {title, content} = splitArticle(data.artilce.content);
            dispatch(updateArticle({
                pre: data.pre,
                next: data.next,
                current: {
                    ...data.article,
                    title,
                    content,
                    menu: parseContentToCatalog(content)
                }
            }));
        });
};
