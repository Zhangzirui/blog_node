import Home from '$pages/home';
import React from 'react';
import Detail from '$pages/detail';
import {fetchHomeData} from '$pages/home/action';
import getHomeStore from '$pages/home/store';
// import {fetchHomeData} from '$pages/detail/action';

const routeConfig = [
    {
        url: '/',
        name: 'home',
        component: <Home />,
        action: fetchHomeData,
        param: ['pageNumber', 'pageSize'],
        store: getHomeStore()
    },
    {
        url: '/detail',
        name: 'detail',
        component: <Detail />
    }
];

export default routeConfig;
