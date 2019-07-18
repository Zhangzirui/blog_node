import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import Catalog from '$common/components/catalog';
import './showCatalog.scss';

const mapStateToProps = (state) => ({
    menu: state.article.current.menu
});

@connect(mapStateToProps)
class ShowCatalog extends Component {
    state = {
        isShow: false
    }

    render() {
        const {menu = []} = this.props;
        const {isShow} = this.state;
        return (
            <div className="comp-menuItem" onClick={this.toggleCatalog}>
                <span className="iconfont icon-weibiaoti15" />
                {
                    isShow ? (
                        <div className="catalog">
                            <Catalog menu={menu} />
                        </div>
                    ) : null
                }
            </div>
        );
    }

    toggleCatalog = () => {
        this.setState((preState) => ({
            isShow: !preState.isShow
        }));
    }
};

export default ShowCatalog;
