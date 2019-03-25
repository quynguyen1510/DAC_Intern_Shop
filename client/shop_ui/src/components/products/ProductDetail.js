import React, { Component } from 'react';
import Header from '../commons/header/Header';
import {withRouter} from 'react-router';
class ProductDetail extends Component {
    addProductToCart = () => {
        let cart = localStorage.getItem("cart");
        const arrItems = JSON.parse(cart);
        localStorage.setItem("cart", JSON.stringify([...arrItems,this.props.location.state.product] ));
        alert("add to cart succesfully")
        this.props.history.push('/')
    }

    render() {
       const {product} = this.props.location.state;
        return (
            <div>
                <Header />
                <div className="container">
                <div className="page-container">
                    <div className="row">
                        <div className="product-detail col-12">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 product-detail-image">
                                    <img src={product.product_img} alt='' />
                                </div>

                                    <div className="col-md-9 col-sm-9 product-detail-info">
                                        <div className="product-title">
                                            <h1>{product.product_name}</h1>
                                        </div>
                                        <div className="product-price">
                                            <span>{product.price}$</span>
                                        </div>                                      
                                        <div className="product-btn-add-cart">
                                            <button className="btn btn-dark" onClick={this.addProductToCart}>
                                                <i className="fa fa-shopping-cart"></i>Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product-description col-12">
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <span>Description</span>
                                    </li>
                                </ul>
                                <div className="product-detail-description">
                                    {product.product_desc}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            
        );
    }
}

export default withRouter(ProductDetail);