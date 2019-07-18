export const jump = (url) => {
    location.href = url;
};

export const get = (context, ...selectors) => selectors.map((selector) => 
    selector
        .replace(/\[([^\[\]]*)\]/g, '.$1.')
        .split('.')
        .filter((item) => item !== '')
        .reduce((prev, cur) => prev && prev[cur], context)
);

export const getQuery = (url) => {
    const dealStr = url ? url.slice(url.indexOf('?')) : location.search;
    let queryObj = {};
    if (/^\?.+/.test(dealStr)) {
        dealStr
            .slice(1)
            .split('&')
            .forEach((param) => {
                const p = param.split('=');
                // 如果 p[1] 为 undefined , decodeURI 会将其变成 'undefined'，这样容易出错
                queryObj[decodeURI(p[0])] = p[1] ? decodeURI(p[1]) : p[1];
            });
    }
    return queryObj;
};

export const getScroll = () => ({
    top: document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
    left: document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft
});

export const throttle = (fn, delay = 300) => {
    let timer;
    return (...rest) => {
        if (!timer) {
            timer = setTimeout(() => {
                fn && fn(...rest);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    };
};
