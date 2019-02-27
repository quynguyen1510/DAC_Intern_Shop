import React, { Component } from 'react';
import ProductItem from './ProductItem';

class BodyPage extends Component {
    render() {
        return (
            <div className="container-fluid mb-5 mt-5" id="body-page">
                <div className="row justify-content-center">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        );
    }
}

export default BodyPage;