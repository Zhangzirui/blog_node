import React from 'react';
import Animator from '$util/animator';
import {getScroll} from '$util';
// import './toTop.scss';
import '@babel/polyfill';

const ToTop = (props) => {
    let scrollAnimation = null;
    async function onTop() {
        const {duration, easing} = props;
        const scrollTop = getScroll().top;
        if (scrollAnimation) {
            scrollAnimation.cancel();
        }
        scrollAnimation = new Animator({
            duration,
            update: (p) => {
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop - scrollTop * p * p;
            },
            easing
        });
        await scrollAnimation.animate();
    };

    return (
        <div className="comp-menuItem" onClick={onTop}>
            <span className="iconfont icon-zhiding" />
        </div>
    );
};

export default ToTop;
