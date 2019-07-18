import React, {Component} from 'react';
import {getScroll} from '$util';
import './catalog.scss';

export default class Catalog extends Component {
    render() {
        const {menu} = this.props;
        return (
            <div className="comp-catalog">
                <p className="title">目录</p>
                <div className="wrap">
                    {
                        menu.length !== 0 && this.generateCatalog(menu, 0, 0)
                    }
                </div>
            </div>
        );
    }

    onJumpTitle(tag, index) {
        const {scrollTo} = this.props;
        try {
            const dom = document.querySelectorAll(`.comp-article ${tag}`)[index];
            const scrollTop = getScroll().top + dom.getBoundingClientRect().top;

            if (scrollTo) {
                scrollTo(scrollTop);
                return;
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        } catch (e) {
            console.log(e);
        }
    }

    // 递归函数，用来将目录以一定的方式进行排列，以便于伪元素 counter 计数
    generateCatalog = (menu, preIndex, index, mark) => {
        if (menu.length === 0 || menu.length === index) {
            return null;
        }
        const item = menu[index];
        const preItem = menu[preIndex];
        const bigger = item.tag > preItem.tag;
        const isEq = item.tag === preItem.tag;

        if (mark === 'eq' && bigger) {
            return this.generateCatalog(menu, preIndex, index + 1, 'eq');
        }

        if (mark === 'lt' && !bigger) {
            return null;
        }

        if (bigger) {
            return (
                <div className="wrap">
                    <div className="item">
                        <span
                            onClick={() => this.onJumpTitle(item.tag, item.index)}
                            className={`catalog-${item.tag}`}>
                            {item.content}
                        </span>
                        {this.generateCatalog(menu, index, index + 1, 'lt')}
                    </div>
                    {this.generateCatalog(menu, index, index + 1, 'eq')}
                </div>
            );
        } else if (isEq) {
            return (
                <>
                    <div className="item">
                        <span
                            onClick={() => this.onJumpTitle(item.tag, item.index)}
                            className={`catalog-${item.tag}`}>
                            {item.content}
                        </span>
                        {this.generateCatalog(menu, index, index + 1, 'lt')}
                    </div>
                    {this.generateCatalog(menu, preIndex, index + 1, 'eq')}
                </>
            );
        } else {
            return null;
        }
    }
};
