import axios from 'axios';
import {get} from './index';

const baseURL = 'http://127.0.0.1:9000/';

export const axiosUrl = function(options) {
    const {url} = options;

    if (!url) {
        return false;
    }

    return axios({
        baseURL: options.baseURL || baseURL,
        url,
        method: options.method || 'GET',
        params: options.params,
        data: options.data,
        header: options.method || {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            const [status, responseURL = ''] = get(res, 'status', 'request.responseURL');
            if (status >=200 && status < 300 || status === 304) {
                return res.data;
            }
            throw new Error(`${responseURL} 返回状态码为: ${status}`);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getJson = (res) => {
    return new Promise((resolve, reject) => {
        if (res.ret) {
            resolve(res.data);
        }
        reject(res.message);
    })
        .catch((err) => {
            console.log(err);
        });
};
