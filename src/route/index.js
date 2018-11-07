import Home from '$pages/home';
import Detail from '$pages/detail';

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
