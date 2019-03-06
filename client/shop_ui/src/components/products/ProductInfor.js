import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Navbar from '../commons/header/Navbar';

class ProductInfor extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="profile">
                    <h2>Samsung Galaxy S10+</h2>
                    <div className="avatar">
                        <img className="avatar-default" src="https://picsum.photos/100/100/?random" alt="" />
                    </div>
                    <div className="inputForm">
                        <ProductForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfor;