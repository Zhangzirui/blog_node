import axios from 'axios';

const baseURL = 'http://127.0.0.1:8888/';
const axiosUrl = function(options) {
    const {url} = options;

    if (!url) {
        return false;
    }

    return axios({
        baseURL,
        url,
        method: options.method || 'GET',
        params: options.params,
        data: options.data,
        header: options.method || {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export default axiosUrl;
