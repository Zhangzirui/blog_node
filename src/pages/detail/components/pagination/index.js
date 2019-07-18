import React, {Component} from 'react';
import {connect} from 'react-redux';
import './pagination.scss';

const mapStateToProps = (state) => ({
    pre: state.article.pre,
    next: state.article.next
});

@connect(mapStateToProps)
export default class Pagination extends Component {
    render() {
        const {pre = {}, next = {}} = this.props;
        return (
            <div className="comp-pagination">
                <div className={`jump ${pre.aId ? '' : 'disabled'}`}>
                    <span className="iconfont icon-zuo" />
                    <span>
                        {
                            pre.title ? pre.title : '没有了'
                        }
                    </span>
                </div>
                <div className={`jump ${next.aId ? '' : 'disabled'}`}>
                    <span>
                        {
                            next.title ? next.title : '没有了'
                        }
                    </span>
                    <span className="iconfont icon-you" />
                </div>
            </div>
        );
    }
}