import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '$common/components/sidebar';
import './detail.scss';
import '$common/style/index.scss';

const Detail = () => {
    return (
        <div className="app" suppressHydrationWarning={true}>
            <Sidebar />
            <h1 className="title">detail</h1>
        </div>
    );
};

export default Detail;

try {
    ReactDOM.hydrate(
        <Detail />,
        document.getElementById('root')
    );
} catch (e) {}

