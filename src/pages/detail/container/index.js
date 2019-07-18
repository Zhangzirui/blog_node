import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from '$common/components/sidebar';
import Article from '../components/article';
import Pagination from '../components/pagination';
import End from '../components/end';
import MiniMenu from '$common/components/miniMenu';
import ToTop from '$common/components/toTop';
import ShowCatalog from '../components/ShowCatalog';
import {
    fetchArticle
} from '../action';
import '$common/style/index.scss';
import './app.scss';

const mapStateToProps = (state) => ({
    articleData: state.article.current,
    query: state.meta.query
});

const mapDispatchToProps = {
    fetchArticle
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Detail extends Component {
    componentDidMount() {
        const {articleData: {content = ''} = {}, query: {aId} = {}, fetchArticle} = this.props;
        if (content === '') {
            fetchArticle(aId);
        }
    }

    render() {
        return (
            <div className="app" suppressHydrationWarning={true}>
                <Sidebar />
                <div className="main">
                    <Article />
                    <End text={'完'} />
                    <Pagination />
                </div>
                <MiniMenu>
                    <ToTop duration={200} />
                    <ShowCatalog />
                </MiniMenu>
            </div>
        );
    }
};
