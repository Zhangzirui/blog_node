import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

const DEFAULT_PAGE = 1;
const PAGE_SIZE = 10;

export default class Pagination extends Component {
    state = {
        allPage: DEFAULT_PAGE,
        currentPage: DEFAULT_PAGE
    }

    componentWillMount() {
        this.dealPage();
    }

    render() {
        const {allPage, currentPage} = this.state;
        return (
            <div className="comp-pagination">
                <span
                    className={`item iconfont icon-zuo ${this.allowSubtract() ? 'item-trigger' : 'item-disabled'}`}
                    onClick={this.onSubtractPage} />
                <input
                    className="item item-input"
                    type="text"
                    value={currentPage}
                    onChange={this.onChangePage}
                    onKeyDown={this.onSubmit} />
                <span className="item">/</span>
                <span className="item">{allPage}</span>
                <span
                    className={`item iconfont icon-you ${this.allowAdd() ? 'item-trigger' : 'item-disabled'}`}
                    onClick={this.onAddPage} />
            </div>
        );
    }

    onSubtractPage = () => {
        const {currentPage = DEFAULT_PAGE, changePage} = this.props;
        if (this.allowSubtract()) {
            changePage && changePage(currentPage - 1);
        }
    }

    onAddPage = () => {
        const {currentPage = DEFAULT_PAGE, changePage} = this.props;
        if (this.allowAdd()) {
            changePage && changePage(currentPage + 1);
        }
    }

    onChangePage = (e) => {
        this.setState({
            currentPage: e.target.value
        });
    }

    onSubmit = () => {
        let {currentPage, allPage} = this.state;
        const {changePage} = this.props;
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > allPage) {
            currentPage = allPage;
        }
        changePage && changePage(currentPage);
        this.setState({
            currentPage
        });
    }

    dealPage = () => {
        let {allPage, allCount, pageSize = PAGE_SIZE, currentPage = DEFAULT_PAGE} = this.props;
        if (!allPage) {
            allCount = allCount ? allCount : DEFAULT_PAGE;
            allPage = Math.ceil(allCount / pageSize);
        }
        this.setState({
            allPage,
            currentPage
        });
    }

    allowSubtract() {
        const {currentPage = DEFAULT_PAGE} = this.props;
        return currentPage > DEFAULT_PAGE;
    }

    allowAdd() {
        const {currentPage = DEFAULT_PAGE} = this.props;
        const {allPage} = this.state;
        return currentPage < allPage;
    }
};


Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired, // 当前页面，也是默认的页面值
    allPage: PropTypes.number, // 总的页面数
    allCount: PropTypes.number, // 内容的总数，如果总的页面数不给，就需要给 allCount 和 pageSize
    pageSize: PropTypes.number, // 每页可放的内容数
    changePage: PropTypes.func.isRequired // 当改变页面数并且回车之后的回调函数
};
