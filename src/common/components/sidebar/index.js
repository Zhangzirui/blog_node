import React from 'react';
import {jump} from '$util';
import './sidebar.scss';

const Sidebar = () => {
    const onGoHome = () => {
        jump('/home.html');
    }
    return (
        <section className="comp-sidebar">
            <img src="" alt="" className="avatar" onClick={onGoHome} />
            <h2 className="title">吃肉吃肉</h2>
            <p className="desc">我的前端实验室</p>
            <ul className="nav">
                <li className="nav-item iconfont icon-blogger-b">
                    <span className="text">blog</span>
                </li>
                <li className="nav-item iconfont icon-zuopin">
                    <span className="text">works</span>
                </li>
                <li className="nav-item iconfont icon-github1">
                    <span className="text">github</span>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;
