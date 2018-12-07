import React, {Component} from 'react';
import Sidebar from '$common/components/sidebar';
import Pagination from '$common/components/pagination';
import {connect} from 'react-redux';
import {updatePage, fetchHomeData} from '../action';
import {PAGE_SIZE} from '../constant/config';
import '$common/style/index.scss';
import './app.scss';

const mapStateToProps = (state) => ({
    articleData: state.articleData,
    meta: state.meta
});

const mapDispatchToProps = {
    updatePage,
    fetchHomeData
};
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    render() {
        const {articleData: {articleList = [], allCount} = {}, meta: {currentPage} = {}} = this.props;
        return (
            <div className="app" suppressHydrationWarning={true}>
                <Sidebar />
                <div className="main">
                    {
                        articleList.map((item) => {
                            return (
                                <div className="article" key={item.mId}>
                                    <div className="hd">
                                        <h1 className="title">{item.title}</h1>
                                        <span className="desc">
                                            最新修改：
                                            <span className="value">{item.mTime}</span>
                                        </span>
                                    </div>
                                    <div className="bd">
                                        <div dangerouslySetInnerHTML={{__html: item.desc}}></div>
                                        <p className="more">阅读全文<span className="iconfont icon-more"></span></p>
                                    </div>
                                    <div className="ft">
                                        <span className="desc">
                                            创建日期：
                                            <span className="value">{item.birthTime}</span>
                                        </span>
                                        <span className="desc">
                                            阅读数：
                                            <span className="value">10</span>
                                        </span>
                                        <span className="desc">
                                            评论数：
                                            <span className="value">10</span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <Pagination
                        currentPage={currentPage}
                        allCount={allCount}
                        pageSize={PAGE_SIZE}
                        changePage={this.onChangePage} />
                </div>
            </div>
        );
    }

    onChangePage = (page) => {
        const {currentPage, updatePage, fetchHomeData} = this.props;
        if (currentPage !== page) {
            updatePage(page);
            fetchHomeData({
                pageNumber: page
            });
        }
    }

    getAllPage() {
        const {articleData: {allCount} = {}} = this.props;

    }
};

export default Home;
