import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getListCategories } from '../../../actions/CategoriesAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Categories extends Component {

    componentDidMount() {
        if(this.props.categories.categories.length === 0){
            this.props.getListCategories();
        }
    }

    render() {
        const {categories} = this.props.categories;
        return (
            <div id="categories">
                <ul>
                  {
                      categories.map((category, index) => {
                        return <li key={index}>
                            <a href="#none">{category.catname}</a>
                         </li>
                      })
                  }
                   
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { categories: state.categories }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListCategories
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));