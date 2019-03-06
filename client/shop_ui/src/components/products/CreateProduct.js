import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Navbar from '../commons/header/Navbar';

class FormCreateProduct extends Component {
    render() {
        return (
            <div className="detail">
              <Navbar /> 
            <h2 className="text-center"> Create New Product</h2>
            <div className="inputForm">
                <ProductForm />
            </div>
        </div>
        );
    }
}

export default FormCreateProduct;