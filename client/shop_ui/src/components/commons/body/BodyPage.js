import React, { Component } from 'react';
import ProductItem from './ProductItem';

class BodyPage extends Component {
    render() {
        return (
            <div className="container col-md-10 col-lg-10" id="body-page">
                <div className="row" id="item-row">
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