import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {product} = this.props;
        return (
            <div className="col-md-2 col-sm-2 col-xs-12 mb-2 col-cus">
                <div className="product-item">
                    <div className="pi-img-wrapper">
                        <a href="#none">
                            <img src={product.product_img} className="img-responsive" alt="Berry Lace Dress" />
                        </a>
                    </div>
                    <a href="#none" className="item-name">
                        <h3 className="text-center">{product.product_name}</h3>
                    </a>
                    <div className="inforItem">
                        <p className="item-price">{product.price}</p>
                        <a href="#none" className="btn add-cart">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

// width="100%" height="241px" 

export default ProductItem;