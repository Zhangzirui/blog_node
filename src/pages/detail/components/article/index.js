import React, {Component} from 'react';
import {connect} from 'react-redux';
import Catalog from '$common/components/catalog';
import './article.scss';

const mapStateToProps = (state) => ({
    articleData: state.article.current
});

@connect(mapStateToProps)
class Article extends Component {
    render() {
        const {title, content, menu} = this.props.articleData;
        return (
            <div className="comp-article">
                <h1 className="title">{title}</h1>
                <Catalog menu={menu} />
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        );
    }
};

export default Article;
