import Home from '$pages/home/home';
import React from 'react';
import Detail from '$pages/detail/detail';

const routeConfig = [
    {
        url: '/',
        name: 'home',
        component: <Home />
    },
    {
        url: '/detail',
        name: 'detail',
        component: <Detail />
    }
];

export default routeConfig;
