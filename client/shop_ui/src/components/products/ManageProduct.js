import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Navbar from '../commons/header/Navbar';
import { Link } from 'react-router-dom';
import { getListProduct } from '../../api/product_api';

class ManageProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            page: 1,
            shouldNavigatePage: true,
        }
    }

    loadProduct = (page) => {
        getListProduct(page).then(res => {
            if (res.data.length > 0) {
                this.setState({ products: res.data });
            }
            else {
                this.setState({ shouldNavigatePage: false, page: this.state.page - 1 })
            }
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        if (this.state.products.length === 0) {
            this.loadProduct(this.state.page);
        }
    }

    onNext = () => {
        const { page, shouldNavigatePage } = this.state;
        if (shouldNavigatePage) {
            this.loadProduct(page + 1);
            this.setState({ page: page + 1 });
        }
    }

    onPrevious = () => {
        const { page, shouldNavigatePage } = this.state;
        if (shouldNavigatePage && page > 0) {
            this.loadProduct(page);
            this.setState({ page: page - 1 })
        }

    }

    render() {
        const { page } = this.state;
        return (
            <div className="manage-product">
                <Navbar />
                <div className="page">
                    <div>
                        <Link to="/products/new" className="btn btn-default" id="btnCreateUser">Create Product</Link>
                    </div>
                    <div>
                        <span className="btn btn-info">Page: {page > 0 ? page : (page + 1)}</span>
                    </div>
                    <ProductTable listProducts={this.state.products} />
                    <nav aria-label="...">
                        <ul className="pagination pagination-lg">
                            <li className="page-item"><button onClick={this.onPrevious} className="page-link" href="#none" >Previous</button></li>
                            <li className="page-item"><button onClick={this.onNext} className="page-link" href="#none" >Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default ManageProduct;