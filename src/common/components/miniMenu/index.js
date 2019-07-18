import React, {Component} from 'react';
import {throttle, getScroll} from '$util';
import './miniMenu.scss';

const SHOW_HEIGHT = 200;

export default class MiniMenu extends Component {
    state = {
        scrollTop: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', throttle(() => {
            this.setState({
                scrollTop: getScroll().top
            });
        }));
    }

    render() {
        const {children, showHeight = SHOW_HEIGHT} = this.props;
        const {scrollTop} = this.state;
        return scrollTop > showHeight ? (
            <div className="comp-miniMenu">
                {children}
            </div>
        ) : null;
    }
}

export const toBeItem = (RenderComp, onClick) => {
    return (props) => {
        function onClickEvent() {
            onClick && onClick();
        }
        return (
            <div className="comp-menuItem" onClick={onClickEvent}>
                <RenderComp {...props}/>
            </div>
        );
    };
};
