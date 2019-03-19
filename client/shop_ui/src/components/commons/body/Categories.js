import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../api/product_api';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }
    componentDidMount() {
        if (this.state.categories.length === 0) {
            getCategories().then(res => {
                this.setState({ categories: res.data })
            });
        }
    }

    render() {
        const { categories } = this.state;
        return (
            <div id="categories">
                <ul>
                    {
                        categories.length > 0 && (
                            categories.map((category, index) => {
                                return <li key={index}>
                                    <Link onClick={this.navigateToProductsOfCategoryPage}
                                        to={`/categories/${category.id}`}>
                                        {category.catname}
                                    </Link>
                                </li>
                            })
                        )
                    }

                </ul>
            </div>
        );
    }
}


export default withRouter(Categories);