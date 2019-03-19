import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Navbar from '../commons/header/Navbar';
import { Link } from 'react-router-dom';
import { getListProduct, getProductByShop } from '../../api/product_api';
import { SHOPPER_ROLE, RECORD_PER_PAGE } from '../../util/constant';
var jwtDecode = require('jwt-decode');

class ManageProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            shouldNavigatePage: true,
            total: 0,
            numPages: null,
            currentPage: 1
        }
    }

    getNumPages(total, RECORD_PER_PAGE) {
        let numPages = 0;
        if (total % RECORD_PER_PAGE !== 0) {
           return numPages = Array(Math.floor(total / RECORD_PER_PAGE) + 1).fill();
        }
        else {
           return numPages = Array(Math.floor(total / RECORD_PER_PAGE)).fill();
        }
    }

    loadProduct = (page) => {
        const token = localStorage.getItem('token');
        const user = jwtDecode(token);
        if (user.role_id === SHOPPER_ROLE) {
            getProductByShop(token, user.user_id,page).then(res => {
                if (res.data.products.length > 0) {
                    this.setState({ products: [...res.data.products], total: res.data.total });
                }
                let numPages = this.getNumPages(this.state.total,RECORD_PER_PAGE);
                this.setState({ numPages: numPages })
            }).catch(err => {
                console.log(err)
            });
        } else {
            getListProduct(page).then(res => {
                this.setState({ products: [...res.data.products], total: res.data.total });
                let numPages = this.getNumPages(this.state.total,RECORD_PER_PAGE);
                this.setState({ numPages: numPages })
            }).catch(err => {
                console.log(err)
            });
        }
    }

    componentDidMount() {
        this.loadProduct(this.state.currentPage);
    }

    getCurrentPage = (event) => {
        const page = Number(event.target.innerHTML);
        if (this.state.currentPage !== page) {
            getListProduct(page).then(res => {
                this.setState({ products: [...res.data.products] });
            }).then(err => {

            })
            this.setState({ currentPage: page })
        }
    }

    onRemoveProduct = (productId) => {
        const { products } = this.state;
        for (let product of products) {
            if (product.id === productId) {
                product.active = false;
                break;
            }
        }
        this.setState({
            products: products
        })
    }



    render() {
        const { numPages } = this.state;
        return (
            <div>
                <Navbar />
                <div className="page">
                    <div>
                        <Link to="/products/new" className="btn btn-default" id="btnCreateUser">Create Product</Link>
                    </div>
                    <ProductTable listProducts={this.state.products} onRemoveProduct={this.onRemoveProduct} />
                    {
                        (numPages !== null) && (
                            <nav aria-label="...">
                                <ul className="pagination pagination-lg">
                                    {
                                        numPages.map((_, i) => (
                                            <li key={i} className="page-item">
                                                <button onClick={this.getCurrentPage}
                                                    className="page-link" >{i + 1}</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ManageProduct;