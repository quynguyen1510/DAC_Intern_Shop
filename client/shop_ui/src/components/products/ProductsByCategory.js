import React, { Component } from 'react';
import Header from '../commons/header/Header';
import { withRouter } from 'react-router';
import { getProductByCategoryId } from '../../api/product_api';
import ProductItem from './ProductItem';

const RECORD_PERPAGE = 10;
class ProductsByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
            productsPerPage: [],
            numberPageArr: null,
        }
    }

    pagination(array, page_size, page_number) {
        page_number = page_number - 1;
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }

    componentDidMount() {
        const categoryId = this.props.match.params.id;
        getProductByCategoryId(categoryId).then(res => {
            const numberPageArr = Array(Math.floor(res.data.length / RECORD_PERPAGE)).fill();
            this.setState({ listProduct: res.data, 
                            numberPageArr: numberPageArr,
                            productsPerPage: this.pagination(res.data, RECORD_PERPAGE, 1)
                             });
        }).catch(err => {
            console.log(err)
        })
    }

    getCurrentPage = (event) => {
        const page = event.target.innerHTML;
        const { listProduct } = this.state;
        const arrPerPage = this.pagination(listProduct, RECORD_PERPAGE, page);
        this.setState({ productsPerPage: arrPerPage });
    }

    render() {
        const { numberPageArr, productsPerPage } = this.state;
        return (
            <div id="products-by-category">
                <Header />
                <div className="container col-md-10 col-lg-10" id="body-page">
                    <div className="row" id="item-row">
                    {
                        productsPerPage.length > 0 && 
                        ( productsPerPage.map((product, index) => {
                            return <ProductItem key={index} product={product}/>
                        }))
                    }
                    </div>
                </div>
                <nav aria-label="..." className="product-pagination">
                    <ul className="pagination pagination-lg">
                        {
                            numberPageArr && (
                                numberPageArr.map((_, i) =>
                                    <li key={i} className="page-item">
                                        <button onClick={this.getCurrentPage} className="page-link" >{i + 1}</button>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withRouter(ProductsByCategory);